// Runs after the client build (dist/) and the SSR build (dist-ssr/). Writes
// dist/<route>/index.html for each page in PRERENDERED_PAGES (src/seo.ts).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { renderPageHtml } from "./prerender-lib.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(root, "dist-ssr", "entry-server.js");

const template = await readFile(path.join(distDir, "index.html"), "utf8");
const { render, PRERENDERED_PAGES, SITE_URL } = await import(
	pathToFileURL(serverEntry).href
);

for (const page of PRERENDERED_PAGES) {
	const appHtml = render(page.path);
	if (!appHtml.includes(`>${page.heading}</h1>`)) {
		throw new Error(
			`prerender: ${page.path} did not render its "${page.heading}" heading`,
		);
	}

	const html = renderPageHtml(template, {
		appHtml,
		title: page.title,
		description: page.description,
		url: `${SITE_URL}${page.path}`,
	});
	// Meta checks this tag to verify the domain, so every page must keep it.
	if (!html.includes('name="facebook-domain-verification"')) {
		throw new Error(
			`prerender: ${page.path} is missing the facebook-domain-verification tag`,
		);
	}

	const outFile = path.join(distDir, page.path.slice(1), "index.html");
	await mkdir(path.dirname(outFile), { recursive: true });
	await writeFile(outFile, html);
	console.log(`prerendered ${page.path} -> ${path.relative(root, outFile)}`);
}
