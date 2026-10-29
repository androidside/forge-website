import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppShell } from "./App";

export { PRERENDERED_PAGES, SITE_URL } from "./seo";

export function render(url: string): string {
	return renderToString(
		<StrictMode>
			<StaticRouter location={url}>
				<AppShell />
			</StaticRouter>
		</StrictMode>,
	);
}
