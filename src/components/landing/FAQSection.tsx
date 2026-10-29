import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "What videos can I clip?",
		answer:
			"Paste a link to a public YouTube video. If your team connects Slack or Telegram, you can also post YouTube links there to start clipping.",
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
		question: "Is ViralClips free?",
		answer:
			"ViralClips is currently free to use. If we add paid features, we will update our Terms of Service before we charge for them.",
	},
	{
		question: "How does ViralClips handle my data?",
		answer:
			"We keep your videos and clips until you delete them or your account is deleted. We never sell your content or use it to train AI models. We share it with your team, the social accounts you publish to, and the service providers that run ViralClips, such as Amazon Web Services and our AI providers. See our Privacy Policy for the full details.",
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
