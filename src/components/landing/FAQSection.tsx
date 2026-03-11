import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "What video formats are supported?",
		answer:
			"ViralClips supports YouTube URLs directly — just paste any public video URL. You can also upload videos in MP4, MOV, and WebM formats up to 2GB, or submit them from WhatsApp, Telegram, or Slack.",
	},
	{
		question: "How does team collaboration work?",
		answer:
			"Create a workspace and invite your team. Multiple people can share connected social accounts, submit videos for clipping, review drafts before they go live, and manage publishing — all from one place.",
	},
	{
		question: "Can I edit the clips after they're generated?",
		answer:
			"Yes! Our built-in editor lets you adjust trim points, change caption styles, switch between vertical reframing and letterbox layouts, and add transitions. You have full control over the final output.",
	},
	{
		question: "Which platforms can I publish to?",
		answer:
			"ViralClips supports publishing to TikTok, YouTube Shorts, Instagram Reels, X (Twitter), LinkedIn, and Facebook. We auto-generate titles and post messages for each platform, and you can also download clips for manual posting.",
	},
	{
		question: "Can I control how AI selects clips?",
		answer:
			"Absolutely. You can use custom prompts to guide the AI toward specific segments — for example, focusing on key takeaways, funny moments, or product mentions. The AI adapts to your content strategy.",
	},
	{
		question: "Is there a free plan?",
		answer:
			"Yes! Our free plan includes 10 clips per month with core features. Upgrade to Pro for unlimited clips, priority processing, team workspaces, and multi-platform publishing.",
	},
	{
		question: "How does ViralClips handle my data?",
		answer:
			"We take privacy seriously. Your videos are processed securely and deleted from our servers after 30 days. We never use your content to train AI models or share it with third parties. See our Privacy Policy for details.",
	},
];

export function FAQSection() {
	return (
		<section id="faq" className="py-16 sm:py-24 px-4 bg-zinc-950">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-10 sm:mb-16">
					<span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
						FAQ
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
						Frequently asked questions
					</h2>
					<p className="text-lg sm:text-xl text-zinc-400">
						Everything you need to know about ViralClips.
					</p>
				</div>

				<Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 sm:px-6 data-[state=open]:border-violet-500/50"
						>
							<AccordionTrigger className="text-left text-base sm:text-lg font-medium text-zinc-100 hover:text-violet-400 py-5 sm:py-6 hover:no-underline">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-zinc-400 pb-5 sm:pb-6 text-sm sm:text-base">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
