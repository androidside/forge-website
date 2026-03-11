import { Link2, Wand2, Upload } from "lucide-react";

const steps = [
	{
		number: "01",
		icon: Link2,
		title: "Paste a URL or Upload",
		description:
			"Paste any YouTube video URL or upload your own footage. Your team can even submit videos from WhatsApp, Telegram, or Slack.",
	},
	{
		number: "02",
		icon: Wand2,
		title: "AI Creates Your Clips",
		description:
			"AI detects the best moments, applies face tracking, generates captions, and creates ready-to-post clips automatically.",
	},
	{
		number: "03",
		icon: Upload,
		title: "Review & Publish Everywhere",
		description:
			"Review drafts with your team, fine-tune in the editor, then publish to TikTok, Instagram, YouTube, X, LinkedIn, and Facebook.",
	},
];

export function HowItWorksSection() {
	return (
		<section id="how-it-works" className="py-16 sm:py-24 px-4 bg-zinc-900">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-10 sm:mb-16">
					<span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
						How It Works
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
						From long video to viral clips in 3 steps
					</h2>
					<p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
						No editing skills required. Upload, let AI do the work, and publish
						with your team.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<div key={step.number} className="relative">
							{/* Connecting line (hidden on last item) */}
							{index < steps.length - 1 && (
								<div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
							)}

							<div className="text-center">
								{/* Step number badge */}
								<div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-zinc-800 border border-zinc-700 mb-6 relative">
									<step.icon className="w-10 h-10 text-violet-400" />
									<span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-violet-500 text-white text-sm font-bold flex items-center justify-center">
										{step.number}
									</span>
								</div>

								<h3 className="text-2xl font-semibold text-zinc-100 mb-3">
									{step.title}
								</h3>
								<p className="text-zinc-400 max-w-sm mx-auto">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
