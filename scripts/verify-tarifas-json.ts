import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn, type ChildProcess } from 'node:child_process';

const distDir = path.resolve('dist');
const tarifasPath = path.join(distDir, 'data/tarifas.json');
const baseUrl = 'http://127.0.0.1:4321';

function startServer(): ChildProcess {
  return spawn('npx', ['--yes', 'serve', '-l', '4321', 'dist'], {
    stdio: 'ignore',
  });
}

async function main() {
  const original = await fs.readFile(tarifasPath, 'utf8');
  const parsed = JSON.parse(original) as {
    tarifas: Array<{ nombre: string; detalle: string; valor: string }>;
  };

  const server = startServer();
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

    await page.goto(`${baseUrl}/bioparque/horarios-y-tarifas`, { waitUntil: 'networkidle' });
    await page.waitForSelector('[data-tarifas-ready="true"]', { state: 'attached', timeout: 30_000 });
    const before = await page.content();
    if (!before.includes('$30.800')) {
      throw new Error('Expected initial tariff $30.800 in page');
    }

    parsed.tarifas[0].valor = '$99.999';
    await fs.writeFile(tarifasPath, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8');

    await page.goto(`${baseUrl}/bioparque/horarios-y-tarifas?refresh=1`, { waitUntil: 'networkidle' });
    await page.waitForSelector('[data-tarifas-ready="true"]', { state: 'attached', timeout: 30_000 });
    const after = await page.content();
    if (!after.includes('$99.999')) {
      throw new Error('Expected updated tariff $99.999 after JSON edit');
    }

    await browser.close();
    console.log('OK JSON edit updates tariffs without rebuild');
  } finally {
    await fs.writeFile(tarifasPath, original, 'utf8');
    server.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
