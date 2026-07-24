import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const assets = [
  {
    sources: [".assets-src/casey-wilcox-bio-portrait-4x5.webp.b64"],
    target: "src/assets/casey-wilcox-bio-portrait-4x5.webp",
  },
  {
    sources: [".assets-src/casey-wilcox-bio-square.webp.b64"],
    target: "src/assets/casey-wilcox-bio-square.webp",
  },
  {
    sources: [
      ".assets-src/casey-wilcox-og-preview.jpg.b64.part1",
      ".assets-src/casey-wilcox-og-preview.jpg.b64.part2",
    ],
    target: "public/casey-wilcox-og-preview.jpg",
  },
];

for (const asset of assets) {
  const encodedParts = await Promise.all(
    asset.sources.map(async (source) => {
      const sourcePath = resolve(root, source);
      const encoded = (await readFile(sourcePath, "utf8")).trim();
      if (!encoded) {
        throw new Error(`Encoded asset is empty: ${source}`);
      }
      return encoded;
    }),
  );

  const decoded = Buffer.from(encodedParts.join(""), "base64");
  const targetPath = resolve(root, asset.target);
  await mkdir(dirname(targetPath), { recursive: true });
  await writeFile(targetPath, decoded);
}

console.log(`Prepared ${assets.length} deployment assets.`);
