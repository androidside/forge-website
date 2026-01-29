import { useEffect } from "react";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from "react-router-dom";
import { TopNavigation } from "./components/TopNavigation";
import { Landing } from "./pages/Landing";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";

// Component to handle scroll-to-top on route changes
function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
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

function App() {
	return (
		<Router>
			<ScrollToTop />
			<TopNavigation />
			<main>
				<AppRoutes />
			</main>
		</Router>
	);
}

export default App;
