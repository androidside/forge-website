function escapeHtml(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// A function replacement keeps "$&"-style sequences in the markup literal.
function replaceOnce(html, pattern, replacement, label) {
	if (!pattern.test(html)) {
		throw new Error(`prerender: ${label} not found in the HTML template`);
	}
	return html.replace(pattern, () => replacement);
}

function replaceMeta(html, attribute, key, content) {
	const pattern = new RegExp(
		`<meta\\s+${attribute}="${escapeRegExp(key)}"\\s+content="[^"]*"\\s*/?>`,
	);
	return replaceOnce(
		html,
		pattern,
		`<meta ${attribute}="${key}" content="${content}" />`,
		`<meta ${attribute}="${key}">`,
	);
}

/**
 * Turns the built index.html into a route's static page: the server-rendered
 * app markup goes into #root, and the title, description, Open Graph, Twitter
 * and canonical tags point at the route. Throws if the template lacks any of
 * them, so a template change cannot silently ship pages with stale metadata.
 */
export function renderPageHtml(template, { appHtml, title, description, url }) {
	const safeTitle = escapeHtml(title);
	const safeDescription = escapeHtml(description);
	const safeUrl = escapeHtml(url);

	let html = replaceOnce(
		template,
		/<title>[^<]*<\/title>/,
		`<title>${safeTitle}</title>`,
		"<title>",
	);
	html = replaceMeta(html, "name", "title", safeTitle);
	html = replaceMeta(html, "name", "description", safeDescription);
	html = replaceMeta(html, "property", "og:url", safeUrl);
	html = replaceMeta(html, "property", "og:title", safeTitle);
	html = replaceMeta(html, "property", "og:description", safeDescription);
	html = replaceMeta(html, "property", "twitter:url", safeUrl);
	html = replaceMeta(html, "property", "twitter:title", safeTitle);
	html = replaceMeta(html, "property", "twitter:description", safeDescription);
	html = replaceOnce(
		html,
		/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
		`<link rel="canonical" href="${safeUrl}" />`,
		'<link rel="canonical">',
	);
	return replaceOnce(
		html,
		/<div id="root"><\/div>/,
		`<div id="root">${appHtml}</div>`,
		'<div id="root">',
	);
}
