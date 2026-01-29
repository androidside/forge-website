import * as SheetPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import viralclipsLogo from "../assets/viralclips-logo.svg";
import viralclipsLogoDark from "../assets/viralclips-logo-dark.svg";
import { useIsMobile } from "../hooks/use-mobile";
import { useSwipe } from "../hooks/use-swipe";
import { Button } from "./design-system/button/Button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { VisuallyHidden } from "./ui/visually-hidden";

export function TopNavigation() {
	const location = useLocation();
	const isMobile = useIsMobile();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Add swipe gesture support for mobile navigation
	useSwipe({
		onSwipeLeft: () => {
			if (isMobile && !isMenuOpen) {
				setIsMenuOpen(true);
			}
		},
		onSwipeRight: () => {
			if (isMobile && isMenuOpen) {
				setIsMenuOpen(false);
			}
		},
		threshold: 80,
		edgeThreshold: 60,
	});

	// Check if we're on legal pages (lighter background)
	const isLegalPage = location.pathname === "/terms" || location.pathname === "/privacy";

	const handleMenuItemClick = () => {
		setIsMenuOpen(false);
	};

	// Scroll to section handler
	const scrollToSection = (sectionId: string) => {
		setIsMenuOpen(false);
		if (location.pathname !== "/") {
			// Navigate to home first, then scroll
			window.location.href = `/#${sectionId}`;
		} else {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	const navItems = [
		{ id: "features", label: "Features" },
		{ id: "how-it-works", label: "How It Works" },
		{ id: "faq", label: "FAQ" },
	];

	return (
		<header
			className={`w-full m-0 p-0 fixed top-0 left-0 right-0 z-50 ${
				isLegalPage ? "bg-zinc-100" : "bg-transparent"
			}`}
		>
			<div className="w-full py-0">
				<div
					className={`max-w-7xl mx-auto ${isMobile ? "px-4" : "px-8"} flex h-20 items-center justify-between`}
				>
					{/* Left Section - Logo */}
					<div className="flex items-center gap-3">
						<Link to="/">
							<img
								src={isLegalPage ? viralclipsLogoDark : viralclipsLogo}
								alt="ViralClips Logo"
								className="h-8 w-auto cursor-pointer"
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					{!isMobile && (
						<div className="flex pl-8 items-center space-x-8">
							<nav className="flex items-center space-x-8">
								{navItems.map((item) => (
									<button
										key={item.id}
										type="button"
										onClick={() => scrollToSection(item.id)}
										className={`py-1 px-4 text-lg font-light transition-colors duration-200 border border-transparent rounded-3xl cursor-pointer ${
											isLegalPage
												? "text-zinc-800 hover:text-zinc-600"
												: "text-zinc-100 hover:text-white"
										}`}
									>
										{item.label}
									</button>
								))}

								<a
									href="https://app.viralclips.ai"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										variant="primary"
										size="md"
										className="flex items-center gap-2"
									>
										<span>Get Started</span>
										<ArrowRight className="w-4 h-4" />
									</Button>
								</a>
							</nav>
						</div>
					)}

					{/* Mobile Navigation */}
					{isMobile && (
						<div className="flex items-center space-x-4">
							<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="h-9 w-9"
										aria-label="Open menu"
									>
										<Menu
											className={`h-5 w-5 ${
												isLegalPage ? "text-zinc-800" : "text-white"
											}`}
										/>
									</Button>
								</SheetTrigger>
								<SheetContent
									side="right"
									padding="none"
									className="w-[280px] sm:w-[400px] flex flex-col bg-zinc-900"
									hideCloseButton={true}
								>
									<div className="p-6 flex flex-col h-full">
										<VisuallyHidden>
											<SheetTitle>Navigation Menu</SheetTitle>
											<SheetDescription>
												Main navigation menu with links to different sections
											</SheetDescription>
										</VisuallyHidden>

										<SheetHeader className="flex-shrink-0 pb-8">
											<div className="flex justify-start">
												<Link to="/" onClick={handleMenuItemClick}>
													<img
														src={viralclipsLogo}
														alt="ViralClips Logo"
														className="h-10 w-auto"
													/>
												</Link>
											</div>
										</SheetHeader>

										<nav className="flex-1 flex flex-col space-y-4">
											<Link
												to="/"
												onClick={handleMenuItemClick}
												className="py-4 text-left text-xl font-light text-zinc-100 transition-colors duration-200"
											>
												Home
											</Link>
											{navItems.map((item) => (
												<button
													key={item.id}
													type="button"
													onClick={() => scrollToSection(item.id)}
													className="py-4 text-left text-xl font-light text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
												>
													{item.label}
												</button>
											))}
										</nav>

										<div className="flex-shrink-0 flex flex-row items-center justify-between space-x-4 pb-8">
											<a
												href="https://app.viralclips.ai"
												target="_blank"
												rel="noopener noreferrer"
												onClick={handleMenuItemClick}
												className="flex-1"
											>
												<Button
													variant="primary"
													size="mobileContact"
													className="flex items-center justify-center gap-2 w-full"
												>
													<span>Get Started</span>
													<ArrowRight className="w-4 h-4" />
												</Button>
											</a>
										</div>
									</div>

									<SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
										<X className="h-4 w-4 text-zinc-100" />
										<span className="sr-only">Close</span>
									</SheetPrimitive.Close>
								</SheetContent>
							</Sheet>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
