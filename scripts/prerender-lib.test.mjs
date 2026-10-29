import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";
import { renderPageHtml } from "./prerender-lib.mjs";

const indexHtml = await readFile(
	new URL("../index.html", import.meta.url),
	"utf8",
);

const page = {
	appHtml: "<h1>Privacy Policy</h1><p>We keep your clips.</p>",
	title: "Privacy Policy | ViralClips.ai",
	description: "How we handle your data.",
	url: "https://www.viralclips.ai/privacy",
};

describe("renderPageHtml", () => {
	it("puts the app markup inside #root", () => {
		const html = renderPageHtml(indexHtml, page);

		assert.match(
			html,
			/<div id="root"><h1>Privacy Policy<\/h1><p>We keep your clips.<\/p><\/div>/,
		);
	});

	it("points every title, description, URL and canonical tag at the route", () => {
		const html = renderPageHtml(indexHtml, page);

		assert.match(html, /<title>Privacy Policy \| ViralClips.ai<\/title>/);
		for (const key of [
			'name="title"',
			'property="og:title"',
			'property="twitter:title"',
		]) {
			assert.ok(
				html.includes(
					`<meta ${key} content="Privacy Policy | ViralClips.ai" />`,
				),
				key,
			);
		}
		for (const key of [
			'name="description"',
			'property="og:description"',
			'property="twitter:description"',
		]) {
			assert.ok(
				html.includes(`<meta ${key} content="How we handle your data." />`),
				key,
			);
		}
		for (const key of ['property="og:url"', 'property="twitter:url"']) {
			assert.ok(
				html.includes(
					`<meta ${key} content="https://www.viralclips.ai/privacy" />`,
				),
				key,
			);
		}
		assert.ok(
			html.includes(
				'<link rel="canonical" href="https://www.viralclips.ai/privacy" />',
			),
		);
		assert.ok(!html.includes("Turn Long Videos Into Viral Clips"));
	});

	it("keeps the facebook-domain-verification tag", () => {
		const html = renderPageHtml(indexHtml, page);

		assert.match(
			html,
			/<meta name="facebook-domain-verification" content="[^"]+" \/>/,
		);
	});

	it("escapes metadata and keeps $ sequences in the markup literal", () => {
		const html = renderPageHtml(indexHtml, {
			...page,
			appHtml: "<p>Costs $& and $1</p>",
			title: 'Terms & "Conditions" <beta>',
		});

		assert.ok(html.includes("<p>Costs $& and $1</p>"));
		assert.ok(
			html.includes(
				"<title>Terms &amp; &quot;Conditions&quot; &lt;beta&gt;</title>",
			),
		);
	});

	it("throws when the template is missing a tag it must replace", () => {
		const withoutCanonical = indexHtml.replace(
			/<link rel="canonical"[^>]*>/,
			"",
		);

		assert.throws(
			() => renderPageHtml(withoutCanonical, page),
			/<link rel="canonical"> not found/,
		);
	});

	it("throws when #root already has content", () => {
		const filledRoot = indexHtml.replace(
			'<div id="root"></div>',
			'<div id="root"><p>stale</p></div>',
		);

		assert.throws(
			() => renderPageHtml(filledRoot, page),
			/<div id="root"> not found/,
		);
	});
});
