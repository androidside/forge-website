import { useEffect } from "react";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { TopNavigation } from "./components/TopNavigation";
import { Landing } from "./pages/Landing";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { titleForPath } from "./seo";

// Component to handle scroll-to-top on route changes
function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

// Prerendered pages ship their own <title>, so client-side navigation has to
// set it too or the previous page's title would stick.
function DocumentTitle() {
	const { pathname } = useLocation();

	useEffect(() => {
		document.title = titleForPath(pathname);
	}, [pathname]);

	return null;
}

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/terms" element={<Terms />} />
			<Route path="/privacy" element={<Privacy />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}

// Rendered inside BrowserRouter in the browser and StaticRouter at build time
// (src/entry-server.tsx); both must produce the same markup for hydration.
export function AppShell() {
	return (
		<>
			<ScrollToTop />
			<DocumentTitle />
			<TopNavigation />
			<main>
				<AppRoutes />
			</main>
			<Toaster />
		</>
	);
}

function App() {
	return (
		<Router>
			<AppShell />
		</Router>
	);
}

export default App;
