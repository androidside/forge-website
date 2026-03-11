import type React from "react";
import { Link } from "react-router-dom";
import viralclipsLogo from "../assets/viralclips-logo.svg";

export const Footer: React.FC = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="w-full py-12 sm:py-16 px-4 sm:px-8 bg-zinc-950 border-t border-zinc-800">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Logo and Description */}
					<div>
						<Link to="/" className="hover:opacity-75 transition-opacity">
							<img
								src={viralclipsLogo}
								alt="ViralClips Logo"
								className="h-8 mb-4"
							/>
						</Link>
						<p className="text-zinc-400 text-sm">
							Turn long videos into viral clips. Edit, collaborate, and publish everywhere.
						</p>
					</div>

					{/* Product Links */}
					<div>
						<h3 className="text-zinc-100 font-medium mb-4">Product</h3>
						<ul className="space-y-2">
							<li>
								<button
									type="button"
									onClick={() => scrollToSection("features")}
									className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors cursor-pointer"
								>
									Features
								</button>
							</li>
							<li>
								<button
									type="button"
									onClick={() => scrollToSection("how-it-works")}
									className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors cursor-pointer"
								>
									How It Works
								</button>
							</li>
							<li>
								<button
									type="button"
									onClick={() => scrollToSection("faq")}
									className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors cursor-pointer"
								>
									FAQ
								</button>
							</li>
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h3 className="text-zinc-100 font-medium mb-4">Legal</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/privacy"
									className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>

				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
					<p className="text-zinc-500 text-sm">
						&copy; {new Date().getFullYear()} ViralClips.ai. All rights reserved.
					</p>
					<div className="flex items-center space-x-4 mt-4 md:mt-0">
						<a
							href="https://app.viralclips.ai"
							target="_blank"
							rel="noopener noreferrer"
							className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
						>
							Launch App &rarr;
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
