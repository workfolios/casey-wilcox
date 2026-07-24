import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const assets = [
  {
    source: ".assets-src/casey-wilcox-bio-portrait-4x5.webp.b64",
    target: "src/assets/casey-wilcox-bio-portrait-4x5.webp",
  },
  {
    source: ".assets-src/casey-wilcox-bio-square.webp.b64",
    target: "src/assets/casey-wilcox-bio-square.webp",
  },
  {
    source: ".assets-src/casey-wilcox-og-preview.jpg.b64",
    target: "public/casey-wilcox-og-preview.jpg",
  },
];

for (const asset of assets) {
  const sourcePath = resolve(root, asset.source);
  const targetPath = resolve(root, asset.target);
  const encoded = (await readFile(sourcePath, "utf8")).trim();

  if (!encoded) {
    throw new Error(`Encoded asset is empty: ${asset.source}`);
  }

  const decoded = Buffer.from(encoded, "base64");
  await mkdir(dirname(targetPath), { recursive: true });
  await writeFile(targetPath, decoded);
}

console.log(`Prepared ${assets.length} deployment assets.`);
