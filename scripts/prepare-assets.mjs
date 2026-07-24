import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const assets = [
  {
    sources: [".assets-src/casey-wilcox-bio-portrait-4x5.webp.b64"],
    targets: ["src/assets/casey-wilcox-bio-portrait-4x5.webp"],
  },
  {
    sources: [
      ".assets-src/casey-wilcox-bio-square.webp.b64.chunk01",
      ".assets-src/casey-wilcox-bio-square.webp.b64.chunk02",
      ".assets-src/casey-wilcox-bio-square.webp.b64.mid01",
      ".assets-src/casey-wilcox-bio-square.webp.b64.mid02",
      ".assets-src/casey-wilcox-bio-square.webp.b64.mid03",
      ".assets-src/casey-wilcox-bio-square.webp.b64.mid04",
      ".assets-src/casey-wilcox-bio-square.webp.b64.chunk04",
    ],
    targets: [
      "src/assets/casey-wilcox-bio-square.webp",
      "public/casey-wilcox-social-preview.webp",
    ],
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

  for (const target of asset.targets) {
    const targetPath = resolve(root, target);
    await mkdir(dirname(targetPath), { recursive: true });
    await writeFile(targetPath, decoded);
  }
}

console.log(
  `Prepared ${assets.reduce((total, asset) => total + asset.targets.length, 0)} deployment assets.`,
);
