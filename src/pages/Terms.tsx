import { Globe, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";

export function Terms() {
	const [isAnimating, setIsAnimating] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsAnimating(false);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className="min-h-screen flex flex-col pt-16 bg-zinc-100"
			style={{
				opacity: isAnimating ? 0 : 1,
				transform: isAnimating ? "translateY(80px)" : "translateY(0px)",
				transition: "opacity 0.6s ease, transform 0.6s ease",
			}}
		>
			<div className="w-full max-w-4xl mx-auto px-8 md:px-16">
				{/* Section 1: Terms of Service Headline */}
				<section className="flex flex-col items-start pt-24 pb-16">
					<h1
						className="text-5xl md:text-6xl font-regular text-zinc-900 mb-6 text-left"
						style={{ letterSpacing: "-1.25px" }}
					>
						Terms of Service
					</h1>
					<p className="text-lg md:text-xl text-zinc-600 max-w-4xl text-left">
						Welcome to ViralClips.ai. These Terms of Service govern your use of
						our website and services. By using ViralClips, you agree to these
						terms.
					</p>
					<p className="text-sm text-zinc-500 mt-4">
						Last updated: January 2026
					</p>
				</section>

				{/* Divider */}
				<div className="border-b border-zinc-300 mb-12" />

				{/* Section 2: Terms Content */}
				<section className="pb-16">
					{/* Acceptance of Terms */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							1. Acceptance of Terms
						</h2>
						<p className="text-zinc-600 mb-4">
							By accessing or using ViralClips.ai ("Service"), you agree to be
							bound by these Terms of Service and our Privacy Policy. If you do
							not agree to these terms, do not use our Service.
						</p>
						<p className="text-zinc-600">
							We reserve the right to modify these terms at any time. Continued
							use of the Service after changes constitutes acceptance of the
							modified terms.
						</p>
					</div>

					{/* Description of Service */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							2. Description of Service
						</h2>
						<p className="text-zinc-600 mb-4">
							ViralClips.ai provides AI-powered video clipping and editing
							services that allow users to:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• Extract clips from long-form video content
							</li>
							<li>
								• Generate transcriptions and captions
							</li>
							<li>
								• Reframe videos for different aspect ratios
							</li>
							<li>
								• Publish content to social media platforms
							</li>
						</ul>
					</div>

					{/* User Accounts */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							3. User Accounts
						</h2>
						<p className="text-zinc-600 mb-4">
							To use certain features of the Service, you must create an
							account. You agree to:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>• Provide accurate and complete registration information</li>
							<li>• Maintain the security of your account credentials</li>
							<li>
								• Notify us immediately of any unauthorized access to your
								account
							</li>
							<li>
								• Accept responsibility for all activities that occur under your
								account
							</li>
						</ul>
					</div>

					{/* User Content & Licenses */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							4. User Content & Licenses
						</h2>
						<p className="text-zinc-600 mb-4">
							You retain ownership of content you upload or create using our
							Service ("User Content"). By using our Service, you grant us a
							limited, non-exclusive license to process your content solely to
							provide the Service.
						</p>
						<p className="text-zinc-600 mb-4">
							You represent and warrant that:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• You own or have the necessary rights to use and authorize us
								to process your content
							</li>
							<li>
								• Your content does not infringe any third-party rights
							</li>
							<li>
								• Your use of third-party content complies with applicable terms
								and laws
							</li>
						</ul>
					</div>

					{/* Acceptable Use Policy */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							5. Acceptable Use Policy
						</h2>
						<p className="text-zinc-600 mb-4">You agree not to:</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• Upload content that infringes copyrights or other intellectual
								property rights
							</li>
							<li>
								• Use the Service to create harmful, illegal, or misleading
								content
							</li>
							<li>
								• Attempt to reverse-engineer or extract our AI models or
								algorithms
							</li>
							<li>
								• Use automated systems to access the Service in a manner that
								exceeds reasonable request limits
							</li>
							<li>
								• Violate any applicable laws or regulations
							</li>
						</ul>
					</div>

					{/* Third-Party Services */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							6. Third-Party Services
						</h2>
						<p className="text-zinc-600 mb-4">
							Our Service integrates with third-party platforms. By using these
							integrations, you agree to comply with their respective terms:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								•{" "}
								<strong>YouTube API Services:</strong> Our Service uses the
								YouTube API. By using our YouTube integration, you agree to be
								bound by the{" "}
								<a
									href="https://www.youtube.com/t/terms"
									target="_blank"
									rel="noopener noreferrer"
									className="text-violet-600 hover:underline"
								>
									YouTube Terms of Service
								</a>
							</li>
							<li>
								•{" "}
								<strong>TikTok:</strong> Publishing to TikTok requires
								compliance with TikTok's Terms of Service and Community
								Guidelines
							</li>
							<li>
								•{" "}
								<strong>Meta Platforms (Instagram, Facebook):</strong> Use of
								Instagram and Facebook publishing features requires compliance
								with Meta's Terms of Service
							</li>
						</ul>
						<p className="text-zinc-600 mt-4">
							You can revoke our access to your third-party accounts at any time
							through the respective platform's settings or our Service settings.
						</p>
					</div>

					{/* Payment Terms */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							7. Payment Terms
						</h2>
						<p className="text-zinc-600 mb-4">
							Some features require a paid subscription. By subscribing, you
							agree that:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>• Subscriptions are billed in advance on a recurring basis</li>
							<li>
								• You authorize us to charge your payment method for all
								applicable fees
							</li>
							<li>
								• Refunds are provided at our discretion and in accordance with
								our refund policy
							</li>
							<li>
								• We may change pricing with 30 days notice to existing
								subscribers
							</li>
						</ul>
					</div>

					{/* Termination */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							8. Termination
						</h2>
						<p className="text-zinc-600 mb-4">
							You may terminate your account at any time through your account
							settings. We may suspend or terminate your access if you violate
							these terms or engage in conduct that we determine is harmful to
							other users or our Service.
						</p>
						<p className="text-zinc-600">
							Upon termination, your right to use the Service will immediately
							cease. We will delete your User Content within 30 days of account
							termination.
						</p>
					</div>

					{/* Disclaimers */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							9. Disclaimers
						</h2>
						<p className="text-zinc-600 mb-4">
							THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
							WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
							WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR
							SECURE.
						</p>
						<p className="text-zinc-600">
							AI-generated content may contain errors or inaccuracies. You are
							responsible for reviewing and editing content before publishing.
						</p>
					</div>

					{/* Limitation of Liability */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							10. Limitation of Liability
						</h2>
						<p className="text-zinc-600">
							TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIRALCLIPS.AI SHALL NOT BE
							LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
							PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL
							LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE
							MONTHS PRECEDING THE CLAIM.
						</p>
					</div>

					{/* Governing Law */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							11. Governing Law
						</h2>
						<p className="text-zinc-600">
							These Terms shall be governed by the laws of the State of
							Delaware, without regard to conflict of law principles. Any
							disputes shall be resolved in the state or federal courts located
							in Delaware.
						</p>
					</div>

					{/* Contact Information */}
					<div className="mb-0">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							12. Contact Information
						</h2>
						<p className="text-zinc-600 mb-4">
							If you have questions about these Terms, please contact us:
						</p>
						<div className="text-zinc-700">
							<p className="mb-2 flex items-center gap-2">
								<Mail className="w-4 h-4 text-violet-600" />
								<a
									href="mailto:legal@viralclips.ai"
									className="text-violet-600 hover:underline"
								>
									legal@viralclips.ai
								</a>
							</p>
							<p className="flex items-center gap-2">
								<Globe className="w-4 h-4 text-violet-600" />
								<a
									href="https://viralclips.ai"
									className="text-violet-600 hover:underline"
								>
									viralclips.ai
								</a>
							</p>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
}
