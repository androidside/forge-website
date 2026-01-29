import { useEffect } from "react";

export function usePageAnimation() {
	useEffect(() => {
		// Add CSS class for animation
		document.body.style.opacity = "0";
		document.body.style.transform = "translateY(80px)";
		document.body.style.transition = "opacity 0.6s ease, transform 0.6s ease";

		// Trigger animation after a short delay
		const timer = setTimeout(() => {
			document.body.style.opacity = "1";
			document.body.style.transform = "translateY(0px)";
		}, 100);

		return () => {
			clearTimeout(timer);
			// Reset styles when component unmounts
			document.body.style.opacity = "";
			document.body.style.transform = "";
			document.body.style.transition = "";
		};
	}, []);
}
