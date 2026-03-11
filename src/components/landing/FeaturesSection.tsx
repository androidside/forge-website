import {
	Sparkles,
	Users,
	Crop,
	Type,
	MessageSquare,
	Share2,
	SlidersHorizontal,
	Bot,
} from "lucide-react";

const features = [
	{
		icon: Sparkles,
		title: "AI Clip Detection",
		description:
			"AI analyzes your videos and finds the most viral-worthy moments. Use custom prompts to select specific segments that match your content strategy.",
	},
	{
		icon: Crop,
		title: "Face Tracking & Reframing",
		description:
			"Automatic face tracking and smart cropping for vertical videos. Choose between 9:16 reframing, letterbox, and more layout options.",
	},
	{
		icon: Type,
		title: "Multiple Caption Styles",
		description:
			"Generate different types of animated captions. Choose from multiple styles that boost engagement and accessibility across platforms.",
	},
	{
		icon: Users,
		title: "Team Workspaces",
		description:
			"Create groups so your team can share accounts, review drafts before publishing, and manage content together from one place.",
	},
	{
		icon: MessageSquare,
		title: "Post from Anywhere",
		description:
			"Submit and review clips directly from WhatsApp, Telegram, or Slack. Your team can collaborate wherever they already work.",
	},
	{
		icon: Share2,
		title: "Multi-Platform Publishing",
		description:
			"Auto-generate titles and post messages, then publish to TikTok, Instagram, YouTube Shorts, X, Facebook, and LinkedIn in one click.",
	},
	{
		icon: SlidersHorizontal,
		title: "Built-in Clip Editor",
		description:
			"Fine-tune your clips with trim controls, transitions, and effects before publishing. Full control over the final output.",
	},
	{
		icon: Bot,
		title: "AI Agent",
		description:
			"Let an AI agent help manage your content workflow — from clip selection to scheduling and publishing. Coming soon.",
	},
];

export function FeaturesSection() {
	return (
		<section id="features" className="py-16 sm:py-24 px-4 bg-zinc-950">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-10 sm:mb-16">
					<span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
						Features
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
						Everything you need to go viral
					</h2>
					<p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
						AI-powered clipping, team collaboration, and multi-platform
						publishing — all in one place.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 transition-colors group"
						>
							<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-violet-500/20 transition-colors">
								<feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
							</div>
							<h3 className="text-lg sm:text-xl font-semibold text-zinc-100 mb-2">
								{feature.title}
							</h3>
							<p className="text-sm sm:text-base text-zinc-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
