import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');

const jobs = [
  {
    input: 'hero-ciervos.jpg',
    outputs: [
      { file: 'hero-ciervos-480.webp', width: 480, quality: 82 },
      { file: 'hero-ciervos-780.webp', width: 780, quality: 82 },
      { file: 'hero-ciervos-1040.webp', width: 1040, quality: 82 },
      { file: 'hero-ciervos.webp', width: 1040, quality: 82 },
    ],
  },
  {
    input: 'tucan-bubalco.jpg',
    outputs: [
      { file: 'tucan-bubalco-440.webp', width: 440, quality: 82 },
      { file: 'tucan-bubalco.webp', width: 880, quality: 82 },
    ],
  },
  {
    input: 'bubalco-map-1.png',
    outputs: [
      { file: 'bubalco-map-1-304.webp', width: 304, quality: 85 },
      { file: 'bubalco-map-1.webp', width: 608, quality: 85 },
    ],
  },
  {
    input: 'bubalco-map-2.png',
    outputs: [
      { file: 'bubalco-map-2-304.webp', width: 304, quality: 85 },
      { file: 'bubalco-map-2.webp', width: 608, quality: 85 },
    ],
  },
  {
    input: 'logos/logo-negro.png',
    outputs: [{ file: 'logos/logo-negro.webp', width: 200, quality: 90 }],
  },
  {
    input: 'logos/logo-blanco.png',
    outputs: [{ file: 'logos/logo-blanco.webp', width: 200, quality: 90 }],
  },
];

async function main() {
  for (const job of jobs) {
    const inputPath = path.join(publicDir, job.input);
    const source = sharp(inputPath);
    const metadata = await source.metadata();

    for (const output of job.outputs) {
      const outputPath = path.join(publicDir, output.file);
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await source
        .clone()
        .resize({ width: output.width, withoutEnlargement: true })
        .webp({ quality: output.quality })
        .toFile(outputPath);

      const { size } = await fs.stat(outputPath);
      console.log(`${output.file} (${metadata.width}x${metadata.height} -> ${output.width}w, ${size} bytes)`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
