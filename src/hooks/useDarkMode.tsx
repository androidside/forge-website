// hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export function useDarkMode() {
	const [isDark, setIsDark] = useState(() => {
		// Always default to light mode
		return false;
	});

	useEffect(() => {
		// Check if we're in a browser environment
		if (typeof window === "undefined") {
			return;
		}

		const root = document.documentElement;

		if (isDark) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

		// Save preference to localStorage
		localStorage.setItem("darkMode", JSON.stringify(isDark));
	}, [isDark]);

	// Listen for system theme changes
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (e: MediaQueryListEvent) => {
			// Only update if user hasn't set a manual preference
			const savedPreference = localStorage.getItem("darkMode");
			if (savedPreference === null) {
				setIsDark(e.matches);
			}
		};

		// Modern browsers
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		}
		// Fallback for older browsers
		else {
			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		}
	}, []);

	const toggleDarkMode = () => setIsDark(!isDark);

	const setLightMode = () => setIsDark(false);

	const setDarkMode = () => setIsDark(true);

	const resetToSystemPreference = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("darkMode");
			setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	};

	return {
		isDark,
		toggleDarkMode,
		setLightMode,
		setDarkMode,
		resetToSystemPreference,
	};
}
