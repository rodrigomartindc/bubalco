import { chromium } from 'playwright';
import { spawn, type ChildProcess } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRERENDER_ROUTES } from '../src/data/prerender-routes';
import { injectHeadIntoHtml } from '../src/seo/renderHead';

const PORT = 4173;
const VIEWPORT = { width: 390, height: 844 };
const MIN_ROOT_HTML_LENGTH = 500;

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const siteEnv = process.env.VITE_SITE_ENV;

async function waitForUrl(url: string, timeoutMs: number) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Server not ready yet.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for preview server at ${url}`);
}

function startPreviewServer(): ChildProcess {
  return spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(PORT), '--strictPort'], {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
  });
}

function routeToOutputPath(route: string): string {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, route.slice(1), 'index.html');
}

async function main() {
  const previewProcess = startPreviewServer();
  const baseUrl = `http://127.0.0.1:${PORT}`;

  try {
    await waitForUrl(`${baseUrl}/`, 60_000);

    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport: VIEWPORT });

    try {
      for (const route of PRERENDER_ROUTES) {
        const page = await context.newPage();
        const url = `${baseUrl}${route}?prerender=1`;

        await page.goto(url, { waitUntil: 'networkidle' });

        if (route === '/bioparque/horarios-y-tarifas') {
          await page.waitForSelector('[data-tarifas-ready="true"]', { timeout: 60_000, state: 'attached' });
        }

        await page.waitForFunction(
          (minLength) => {
            const root = document.getElementById('root');
            return Boolean(root && root.innerHTML.trim().length >= minLength);
          },
          MIN_ROOT_HTML_LENGTH,
          { timeout: 60_000 },
        );

        let html = await page.content();
        html = injectHeadIntoHtml(html, route, { siteEnv });

        const outputPath = routeToOutputPath(route);
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, html, 'utf8');

        console.log(`Prerendered ${route} -> ${path.relative(rootDir, outputPath)}`);
        await page.close();
      }
    } finally {
      await browser.close();
    }
  } finally {
    previewProcess.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
