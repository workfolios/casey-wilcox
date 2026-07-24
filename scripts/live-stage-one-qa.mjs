import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const liveUrl = process.env.LIVE_URL || "https://workfolios.github.io/casey-wilcox/";
const outputDir = resolve(process.env.QA_OUTPUT || "qa-output");
await mkdir(outputDir, { recursive: true });

const sleep = (ms) => new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
const fetchStatus = async (url) => {
  try {
    const response = await fetch(url, { redirect: "follow", cache: "no-store" });
    return {
      ok: response.ok,
      status: response.status,
      contentType: response.headers.get("content-type") || "",
      body: await response.text(),
      finalUrl: response.url,
    };
  } catch (error) {
    return { ok: false, status: 0, contentType: "", body: "", finalUrl: url, error: String(error) };
  }
};

let rootResponse;
for (let attempt = 1; attempt <= 18; attempt += 1) {
  rootResponse = await fetchStatus(liveUrl);
  if (rootResponse.ok && rootResponse.status === 200 && rootResponse.body.includes('<div id="root"></div>')) {
    break;
  }
  if (attempt < 18) await sleep(10_000);
}

const results = {
  liveUrl,
  pass: false,
  runtimeException: "",
  http: {
    root: {
      status: rootResponse?.status || 0,
      ok: Boolean(rootResponse?.ok),
      finalUrl: rootResponse?.finalUrl || liveUrl,
    },
  },
  sourceChecks: {
    rootMountPresent: Boolean(rootResponse?.body.includes('<div id="root"></div>')),
    noindexPresent: Boolean(rootResponse?.body.includes("noindex, nofollow, noarchive, nosnippet")),
    correctBasePath: Boolean(rootResponse?.body.includes('/casey-wilcox/assets/')),
  },
  assets: [],
  viewports: [],
  interactions: {
    skipLink: false,
    mobileMenuOpenClose: false,
    linkedInTarget: false,
    submitLabel: false,
    sectionAnchors: false,
  },
  consoleErrors: [],
  pageErrors: [],
  failedRequests: [],
};

try {
  if (rootResponse?.ok) {
    const assetUrls = [];
    const assetPattern = /(?:src|href)="([^"]*\/casey-wilcox\/assets\/[^"]+)"/g;
    for (const match of rootResponse.body.matchAll(assetPattern)) {
      assetUrls.push(new URL(match[1], liveUrl).href);
    }
    assetUrls.push(new URL("robots.txt", liveUrl).href);
    assetUrls.push(new URL("casey-wilcox-social-preview.webp", liveUrl).href);

    for (const assetUrl of [...new Set(assetUrls)]) {
      const response = await fetchStatus(assetUrl);
      results.assets.push({
        url: assetUrl,
        status: response.status,
        ok: response.ok,
        contentType: response.contentType,
      });
    }

    const browser = await chromium.launch({ headless: true });
    const viewports = [
      { name: "desktop-1440", width: 1440, height: 900 },
      { name: "desktop-1024", width: 1024, height: 900 },
      { name: "tablet-768", width: 768, height: 1024 },
      { name: "mobile-390", width: 390, height: 844 },
      { name: "mobile-320", width: 320, height: 720 },
    ];

    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
        reducedMotion: "reduce",
      });
      const page = await context.newPage();

      page.on("console", (message) => {
        if (message.type() === "error") {
          results.consoleErrors.push(`${viewport.name}: ${message.text()}`);
        }
      });
      page.on("pageerror", (error) => results.pageErrors.push(`${viewport.name}: ${error.message}`));
      page.on("requestfailed", (request) => {
        results.failedRequests.push(`${viewport.name}: ${request.url()} — ${request.failure()?.errorText || "failed"}`);
      });

      try {
        const response = await page.goto(liveUrl, { waitUntil: "domcontentloaded", timeout: 90_000 });
        await page.waitForSelector("main#main-content", { timeout: 30_000 });
        await page.waitForTimeout(1_000);
        await page.screenshot({ path: resolve(outputDir, `${viewport.name}.png`), fullPage: true });

        const metrics = await page.evaluate(() => {
          const root = document.documentElement;
          const body = document.body;
          const images = Array.from(document.images).map((image) => ({
            src: image.currentSrc || image.src,
            complete: image.complete,
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight,
          }));
          const requiredIds = ["home", "support-areas", "how-it-works", "about", "contact"];
          return {
            title: document.title,
            h1: document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim() || "",
            scrollWidth: Math.max(root.scrollWidth, body.scrollWidth),
            clientWidth: root.clientWidth,
            horizontalOverflow: Math.max(root.scrollWidth, body.scrollWidth) > root.clientWidth + 1,
            images,
            allImagesLoaded: images.length > 0 && images.every((image) => image.complete && image.naturalWidth > 0),
            requiredSectionsPresent: requiredIds.every((id) => Boolean(document.getElementById(id))),
            linkedInHref: document.querySelector('a[href*="linkedin.com/in/casey-wilcox"]')?.getAttribute("href") || "",
            submitText: document.querySelector('button[type="submit"]')?.textContent?.replace(/\s+/g, " ").trim() || "",
          };
        });

        results.viewports.push({
          ...viewport,
          ...metrics,
          responseStatus: response?.status() || 0,
          browserError: "",
        });

        if (viewport.name === "desktop-1440") {
          await page.keyboard.press("Tab");
          const firstFocusText = await page.locator(":focus").textContent().catch(() => "");
          await page.keyboard.press("Enter");
          await page.waitForTimeout(150);
          const activeId = await page.evaluate(() => document.activeElement?.id || "");
          results.interactions.skipLink = Boolean(firstFocusText?.includes("Skip to main content") && activeId === "main-content");
          results.interactions.linkedInTarget = metrics.linkedInHref === "https://www.linkedin.com/in/casey-wilcox/";
          results.interactions.submitLabel = metrics.submitText === "Submit";
          results.interactions.sectionAnchors = metrics.requiredSectionsPresent;
        }

        if (viewport.name === "mobile-390") {
          const toggle = page.locator("#mobile-nav-toggle");
          if (await toggle.isVisible()) {
            await toggle.click();
            const opened = await page.locator("#mobile-menu").isVisible();
            const expanded = await toggle.getAttribute("aria-expanded");
            await page.keyboard.press("Escape");
            await page.waitForTimeout(150);
            const closed = !(await page.locator("#mobile-menu").isVisible().catch(() => false));
            const collapsed = await toggle.getAttribute("aria-expanded");
            results.interactions.mobileMenuOpenClose = opened && expanded === "true" && closed && collapsed === "false";
          }
        }
      } catch (error) {
        results.viewports.push({
          ...viewport,
          responseStatus: 0,
          horizontalOverflow: true,
          allImagesLoaded: false,
          requiredSectionsPresent: false,
          h1: "",
          browserError: String(error),
        });
      } finally {
        await context.close();
      }
    }

    await browser.close();
  }
} catch (error) {
  results.runtimeException = String(error?.stack || error);
}

const allAssetsPass = results.assets.length >= 4 && results.assets.every((asset) => asset.ok && asset.status === 200);
const allViewportsPass = results.viewports.length === 5 && results.viewports.every((viewport) =>
  viewport.responseStatus === 200 &&
  !viewport.horizontalOverflow &&
  viewport.allImagesLoaded &&
  viewport.requiredSectionsPresent &&
  viewport.h1.length > 0 &&
  !viewport.browserError,
);
const interactionsPass = Object.values(results.interactions).every(Boolean);

results.pass = Boolean(
  results.http.root.ok &&
  results.http.root.status === 200 &&
  results.sourceChecks.rootMountPresent &&
  results.sourceChecks.noindexPresent &&
  results.sourceChecks.correctBasePath &&
  allAssetsPass &&
  allViewportsPass &&
  interactionsPass &&
  results.consoleErrors.length === 0 &&
  results.pageErrors.length === 0 &&
  results.failedRequests.length === 0 &&
  !results.runtimeException,
);

const status = (value) => value ? "Pass" : "Fail";
const report = `# Stage One Live Preview QA\n\n- **Live URL:** ${liveUrl}\n- **Overall result:** **${results.pass ? "PASS" : "FAIL"}**\n- **Indexing state:** Disabled pending Casey Wilcox review\n\n## HTTP And Asset Verification\n\n- Root page HTTP 200: **${status(results.http.root.status === 200)}**\n- Root application mount present: **${status(results.sourceChecks.rootMountPresent)}**\n- Correct \`/casey-wilcox/\` production paths: **${status(results.sourceChecks.correctBasePath)}**\n- Controlled-preview noindex directive present: **${status(results.sourceChecks.noindexPresent)}**\n- Referenced CSS, JavaScript, robots, and social-preview assets: **${status(allAssetsPass)}**\n\n## Responsive Browser Verification\n\n| Viewport | HTTP | Overflow | Images | Required Sections |\n|---|---:|---|---|---|\n${results.viewports.map((viewport) => `| ${viewport.name} (${viewport.width}×${viewport.height}) | ${viewport.responseStatus} | ${status(!viewport.horizontalOverflow)} | ${status(viewport.allImagesLoaded)} | ${status(viewport.requiredSectionsPresent)} |`).join("\n")}\n\n## Interaction And Accessibility Verification\n\n- Skip link moves focus to main content: **${status(results.interactions.skipLink)}**\n- Mobile navigation opens, closes, and restores state: **${status(results.interactions.mobileMenuOpenClose)}**\n- LinkedIn destination is Casey's approved profile: **${status(results.interactions.linkedInTarget)}**\n- Contact-form button label is \`Submit\`: **${status(results.interactions.submitLabel)}**\n- All primary section anchors are present: **${status(results.interactions.sectionAnchors)}**\n\n## Runtime Verification\n\n- Browser-console errors: **${results.consoleErrors.length}**\n- Unhandled page errors: **${results.pageErrors.length}**\n- Failed network requests: **${results.failedRequests.length}**\n- QA runtime exception: **${results.runtimeException ? "Present" : "None"}**\n\n${results.pass ? "The Stage One controlled preview is technically ready to share with Casey by URL." : "The Stage One controlled preview is not ready to share. Review the JSON results and screenshot evidence from the workflow artifact."}\n`;

await writeFile(resolve(outputDir, "results.json"), `${JSON.stringify(results, null, 2)}\n`, "utf8");
await writeFile(resolve(outputDir, "report.md"), report, "utf8");
console.log(report);
