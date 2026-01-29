import {
	Sparkles,
	Mic,
	Crop,
	Type,
	SlidersHorizontal,
	Share2,
} from "lucide-react";

const features = [
	{
		icon: Sparkles,
		title: "AI Clip Detection",
		description:
			"GPT-4 powered analysis finds the most viral-worthy moments in your videos automatically.",
	},
	{
		icon: Mic,
		title: "Smart Transcription",
		description:
			"Whisper-powered transcription with speaker diarization for accurate captions.",
	},
	{
		icon: Crop,
		title: "Intelligent Reframing",
		description:
			"Automatic face tracking and smart cropping for perfect 9:16 vertical videos.",
	},
	{
		icon: Type,
		title: "Professional Subtitles",
		description:
			"Animated captions with customizable styles that boost engagement and accessibility.",
	},
	{
		icon: SlidersHorizontal,
		title: "Clip Editor",
		description:
			"Fine-tune your clips with trim controls, transitions, and effects.",
	},
	{
		icon: Share2,
		title: "One-Click Publishing",
		description:
			"Post directly to TikTok, YouTube Shorts, Instagram Reels, and more.",
	},
];

export function FeaturesSection() {
	return (
		<section id="features" className="py-24 px-4 bg-zinc-950">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
						Features
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
						Everything you need to go viral
					</h2>
					<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
						Powerful AI tools that transform long-form content into
						scroll-stopping clips.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 transition-colors group"
						>
							<div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
								<feature.icon className="w-6 h-6 text-violet-400" />
							</div>
							<h3 className="text-xl font-semibold text-zinc-100 mb-2">
								{feature.title}
							</h3>
							<p className="text-zinc-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
