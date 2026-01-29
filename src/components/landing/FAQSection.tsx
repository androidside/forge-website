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
			"ViralClips supports YouTube URLs directly. Simply paste any public YouTube video URL and we'll process it. We also support direct video uploads in MP4, MOV, and WebM formats up to 2GB in size.",
	},
	{
		question: "How long does processing take?",
		answer:
			"Processing time depends on your video length. Typically, a 10-minute video takes about 2-3 minutes to analyze and generate clips. You'll receive a notification when your clips are ready.",
	},
	{
		question: "Can I edit the clips after they're generated?",
		answer:
			"Yes! Our built-in clip editor lets you adjust trim points, change caption styles, modify aspect ratios, and add transitions. You have full control over the final output.",
	},
	{
		question: "Which platforms can I publish to?",
		answer:
			"ViralClips supports one-click publishing to TikTok, YouTube Shorts, Instagram Reels, X (Twitter), LinkedIn, and Facebook. You can also download clips in various formats for manual posting.",
	},
	{
		question: "Is there a free plan?",
		answer:
			"Yes! Our free plan includes 10 clips per month with basic features. Upgrade to Pro for unlimited clips, priority processing, advanced editing tools, and multi-platform publishing.",
	},
	{
		question: "How does ViralClips handle my data?",
		answer:
			"We take privacy seriously. Your videos are processed securely and deleted from our servers after 30 days. We never use your content to train AI models or share it with third parties. See our Privacy Policy for details.",
	},
];

export function FAQSection() {
	return (
		<section id="faq" className="py-24 px-4 bg-zinc-950">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-16">
					<span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
						FAQ
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
						Frequently asked questions
					</h2>
					<p className="text-xl text-zinc-400">
						Everything you need to know about ViralClips.
					</p>
				</div>

				<Accordion type="single" collapsible className="w-full space-y-4">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 data-[state=open]:border-violet-500/50"
						>
							<AccordionTrigger className="text-left text-lg font-medium text-zinc-100 hover:text-violet-400 py-6 hover:no-underline">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-zinc-400 pb-6 text-base">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
