import type React from "react";
import { ArrowRight, Play } from "lucide-react";

import { LogoCarousel } from "@/components/LogosCarousel";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/design-system/button/Button";

export function Landing() {
	const scrollToWaitlist = () => {
		document
			.getElementById("waitlist")
			?.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	return (
		<div className="min-h-screen bg-zinc-950">
			{/* Hero Section */}
			<section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
				{/* Background gradient */}
				<div
					className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-zinc-950 to-zinc-950"
					style={{ zIndex: 0 }}
				/>

				{/* Animated gradient orbs */}
				<div
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
					style={{ zIndex: 0 }}
				/>
				<div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
					style={{ zIndex: 0, animationDelay: "1s" }}
				/>

				<div className="relative z-10 max-w-5xl mx-auto text-center">
					{/* Badge */}
					<div className="mb-6">
						<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium">
							<Play className="w-4 h-4" />
							AI-Powered Video Platform
						</span>
					</div>

					{/* Headline */}
					<h1
						className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
						style={{ letterSpacing: "-2px" }}
					>
						<span className="text-zinc-100">Turn Long Videos Into </span>
						<span
							className="font-bold"
							style={
								{
									color: "transparent",
									WebkitTextStroke: "2px #8b5cf6",
									textStroke: "2px #8b5cf6",
								} as React.CSSProperties
							}
						>
							Viral Clips
						</span>
					</h1>

					{/* Subheadline */}
					<p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
						Create clips, edit with AI, collaborate with your team, and publish
						everywhere — all from one platform.
					</p>

					{/* Waitlist Form */}
					<div className="mb-8">
						<WaitlistForm source="landing-hero" id="waitlist" />
					</div>

					{/* Social Proof */}
					<p className="text-zinc-500 text-sm">
						Be one of the first to try ViralClips when we launch.
					</p>
				</div>

				{/* Scroll indicator */}
				<button
					type="button"
					onClick={() => {
						document.getElementById("platforms")?.scrollIntoView({ behavior: "smooth" });
					}}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
					aria-label="Scroll down"
				>
					<div className="w-6 h-10 rounded-full border-2 border-zinc-600 hover:border-violet-500 transition-colors flex justify-center pt-2">
						<div className="w-1 h-2 bg-zinc-400 rounded-full" />
					</div>
				</button>
			</section>

			{/* Platform Logos Carousel */}
			<section id="platforms" className="py-12 bg-zinc-950 border-y border-zinc-800/50">
				<div className="max-w-7xl mx-auto">
					<p className="text-center text-zinc-500 text-sm mb-8">
						Publish to all major platforms in one click
					</p>
					<LogoCarousel speed={25} gap={60} logoWidth={140} logoHeight={40} />
				</div>
			</section>

			{/* Features Section */}
			<FeaturesSection />

			{/* How It Works Section */}
			<HowItWorksSection />

			{/* FAQ Section */}
			<FAQSection />

			{/* Final CTA Section */}
			<section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-6">
						Ready to Go Viral?
					</h2>
					<p className="text-lg sm:text-xl text-zinc-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
						We're launching soon. Drop your email to get early access the
						moment we open the doors.
					</p>
					<Button
						variant="primary"
						size="lg"
						onClick={scrollToWaitlist}
						className="inline-flex items-center gap-2 px-10 py-5 text-lg"
					>
						<span>Join the Waitlist</span>
						<ArrowRight className="w-5 h-5" />
					</Button>
					<p className="text-zinc-500 text-sm mt-4">
						No spam. One email at launch.
					</p>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
