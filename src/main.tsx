import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const container = document.getElementById("root")!;
const app = (
	<StrictMode>
		<App />
	</StrictMode>
);

// Prerendered routes arrive with markup already in #root; hydrating keeps it
// in place instead of tearing it down and rendering it again.
if (container.hasChildNodes()) {
	hydrateRoot(container, app);
} else {
	createRoot(container).render(app);
}
