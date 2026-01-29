import type React from "react";
import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";

import { LogoCarousel } from "@/components/LogosCarousel";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/design-system/button/Button";

export function Landing() {
	const [videoUrl, setVideoUrl] = useState("");

	const handleGetStarted = () => {
		if (videoUrl) {
			window.open(
				`https://app.viralclips.ai?url=${encodeURIComponent(videoUrl)}`,
				"_blank"
			);
		} else {
			window.open("https://app.viralclips.ai", "_blank");
		}
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
							AI-Powered Video Clipping
						</span>
					</div>

					{/* Headline */}
					<h1
						className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
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
					<p className="text-xl sm:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
						Transform YouTube videos into TikTok, Reels, and Shorts in minutes
						with AI-powered editing.
					</p>

					{/* Video URL Input */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-8">
						<div className="relative flex-1 w-full">
							<input
								type="url"
								value={videoUrl}
								onChange={(e) => setVideoUrl(e.target.value)}
								placeholder="Paste a YouTube URL..."
								className="w-full px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
							/>
						</div>
						<Button
							variant="primary"
							size="lg"
							onClick={handleGetStarted}
							className="flex items-center gap-2 whitespace-nowrap px-8 py-4 text-lg"
						>
							<span>Get Started Free</span>
							<ArrowRight className="w-5 h-5" />
						</Button>
					</div>

					{/* Social Proof */}
					<p className="text-zinc-500 text-sm">
						Join <span className="text-zinc-300 font-medium">10,000+</span>{" "}
						creators already using ViralClips
					</p>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-2">
						<div className="w-1 h-2 bg-zinc-400 rounded-full" />
					</div>
				</div>
			</section>

			{/* Platform Logos Carousel */}
			<section className="py-12 bg-zinc-950 border-y border-zinc-800/50">
				<div className="max-w-7xl mx-auto">
					<p className="text-center text-zinc-500 text-sm mb-8">
						Create clips for all major platforms
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
			<section className="py-24 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-6">
						Ready to Go Viral?
					</h2>
					<p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
						Start creating scroll-stopping clips from your videos today. No
						credit card required.
					</p>
					<a
						href="https://app.viralclips.ai"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							variant="primary"
							size="lg"
							className="inline-flex items-center gap-2 px-10 py-5 text-lg"
						>
							<span>Start Creating Free</span>
							<ArrowRight className="w-5 h-5" />
						</Button>
					</a>
					<p className="text-zinc-500 text-sm mt-4">No credit card required</p>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
