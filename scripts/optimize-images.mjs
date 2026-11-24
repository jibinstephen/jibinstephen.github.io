// Converts the home page slides (listed in app/data/slides.json) into
// responsive WebP files in public/slides/ and writes
// app/data/slides.generated.json with sizes and blur placeholders.
//
// Runs automatically before `npm run dev` and `npm run build`.
// Unchanged sources are skipped, so repeat runs are fast.

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const LIST = path.join(ROOT, "app/data/slides.json");
const MANIFEST = path.join(ROOT, "app/data/slides.generated.json");
const OUT_DIR = path.join(ROOT, "public/slides");

const WIDTHS = [640, 1080, 1920];
const QUALITY = 80;

const slug = (file) =>
  path
    .basename(file, path.extname(file))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const mtime = (file) => fs.stat(file).then((s) => s.mtimeMs, () => 0);

async function readCache() {
  try {
    const entries = JSON.parse(await fs.readFile(MANIFEST, "utf8"));
    return new Map(entries.map((e) => [e.source, e]));
  } catch {
    return new Map();
  }
}

async function processSlide({ src, alt }, cache) {
  const input = path.join(ROOT, src);
  const name = slug(src);
  const meta = await sharp(input).metadata();
  const animated = (meta.pages ?? 1) > 1;
  const widths = WIDTHS.filter((w) => w < meta.width);
  widths.push(Math.min(meta.width, WIDTHS.at(-1)));

  const outputs = widths.map((w) => path.join(OUT_DIR, `${name}-${w}.webp`));
  const srcTime = await mtime(input);
  const cached = cache.get(src);
  const outTimes = await Promise.all(outputs.map(mtime));
  const upToDate = cached && outTimes.every((t) => t >= srcTime);

  if (upToDate) return { ...cached, alt, skipped: true };

  for (const [i, w] of widths.entries()) {
    await sharp(input, { animated })
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(outputs[i]);
  }

  const height = Math.round((meta.pageHeight ?? meta.height) * (widths.at(-1) / meta.width));
  const { isOpaque } = await sharp(input).stats();

  // Tiny blurred preview shown while the real image downloads.
  // Skipped for images with transparency, where it would show through.
  let blur = null;
  if (isOpaque) {
    const buf = await sharp(input).resize(24).blur(1.2).webp({ quality: 40 }).toBuffer();
    blur = `data:image/webp;base64,${buf.toString("base64")}`;
  }

  return { source: src, name, alt, width: widths.at(-1), height, widths, blur };
}

async function main() {
  const started = Date.now();
  const list = JSON.parse(await fs.readFile(LIST, "utf8"));
  await fs.mkdir(OUT_DIR, { recursive: true });
  const cache = await readCache();

  const results = [];
  const concurrency = 4;
  for (let i = 0; i < list.length; i += concurrency) {
    results.push(...(await Promise.all(list.slice(i, i + concurrency).map((s) => processSlide(s, cache)))));
  }

  const built = results.filter((r) => !r.skipped).length;
  const manifest = results.map((r) => {
    const entry = { ...r };
    delete entry.skipped;
    return entry;
  });
  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

  // Remove outputs for slides no longer in the list.
  const keep = new Set(manifest.flatMap((s) => s.widths.map((w) => `${s.name}-${w}.webp`)));
  for (const file of await fs.readdir(OUT_DIR)) {
    if (!keep.has(file)) await fs.rm(path.join(OUT_DIR, file));
  }

  console.log(
    `optimize-images: ${manifest.length} slides (${built} rebuilt) in ${((Date.now() - started) / 1000).toFixed(1)}s`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
