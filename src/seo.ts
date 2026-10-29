export const SITE_URL = "https://www.viralclips.ai";

// Matches the <title> in index.html, which every non-prerendered route serves.
const DEFAULT_TITLE = "ViralClips.ai - Turn Long Videos Into Viral Clips";

export interface PrerenderedPage {
	path: string;
	heading: string;
	title: string;
	description: string;
}

// The build writes these routes as static HTML (scripts/prerender.mjs) so
// crawlers that do not run JavaScript, which may include Meta's, can read the
// policies.
export const PRERENDERED_PAGES: PrerenderedPage[] = [
	{
		path: "/privacy",
		heading: "Privacy Policy",
		title: "Privacy Policy | ViralClips.ai",
		description:
			"How J3D Labs, Inc. collects, uses, stores and deletes data when you use ViralClips.ai, including data from the Facebook and Instagram accounts you connect.",
	},
	{
		path: "/terms",
		heading: "Terms of Service",
		title: "Terms of Service | ViralClips.ai",
		description:
			"The terms that govern your use of ViralClips.ai, the AI video clipping service that J3D Labs, Inc. operates.",
	},
];

export function titleForPath(pathname: string): string {
	const path = pathname.replace(/\/+$/, "") || "/";
	return (
		PRERENDERED_PAGES.find((page) => page.path === path)?.title ?? DEFAULT_TITLE
	);
}
