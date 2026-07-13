import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');
const outDir = path.join(__dirname, 'public_optimized');

fs.mkdirSync(outDir, { recursive: true });

const ALLOWED = ['.jpg', '.jpeg', '.png', '.webp'];
const MAX_SIZE_MB = 1;
const MAX_DIM = 2000;

async function compress(file) {
  const ext = path.extname(file).toLowerCase();
  if (!ALLOWED.includes(ext)) return;

  const src = path.join(publicDir, file);
  const stat = fs.statSync(src);
  const sizeMB = stat.size / (1024 * 1024);
  const name = path.parse(file).name;

  if (sizeMB < 0.2 && ext === '.webp') return;

  const outName = name + '.webp';
  const outPath = path.join(outDir, outName);

  try {
    const img = sharp(src);
    const meta = await img.metadata();

    let pipeline = img;
    if (meta.width > MAX_DIM || meta.height > MAX_DIM) {
      pipeline = img.resize({
        width: Math.min(meta.width, MAX_DIM),
        height: Math.min(meta.height, MAX_DIM),
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    await pipeline
      .webp({ quality: 75, effort: 6 })
      .toFile(outPath);

    const newSize = fs.statSync(outPath).size / (1024 * 1024);
    console.log(`${file} (${sizeMB.toFixed(2)}MB) → ${outName} (${newSize.toFixed(2)}MB) ✓`);
  } catch (err) {
    console.error(`${file}: ERROR - ${err.message}`);
  }
}

const files = fs.readdirSync(publicDir);
let count = 0;
for (const f of files) {
  const ext = path.extname(f).toLowerCase();
  if (ALLOWED.includes(ext)) {
    const stat = fs.statSync(path.join(publicDir, f));
    if (stat.size > 100 * 1024) { // > 100KB
      await compress(f);
      count++;
    }
  }
}
console.log(`\nDone. Compressed ${count} files to public_optimized/`);
