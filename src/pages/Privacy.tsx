import { Globe, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";

export function Privacy() {
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
				{/* Section 1: Privacy Policy Headline */}
				<section className="flex flex-col items-start pt-24 pb-16">
					<h1
						className="text-5xl md:text-6xl font-regular text-zinc-900 mb-6 text-left"
						style={{ letterSpacing: "-1.25px" }}
					>
						Privacy Policy
					</h1>
					<p className="text-lg md:text-xl text-zinc-600 max-w-4xl text-left">
						Welcome to ViralClips.ai. This Privacy Policy explains how we
						collect, use, protect, and disclose information when you use our
						AI-powered video clipping service.
					</p>
					<p className="text-sm text-zinc-500 mt-4">
						Last updated: January 2026
					</p>
				</section>

				{/* Divider */}
				<div className="border-b border-zinc-300 mb-12" />

				{/* Section 2: Privacy Policy Content */}
				<section className="pb-16">
					{/* Information We Collect */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Information We Collect
						</h2>

						<div className="mb-6">
							<h3 className="text-xl text-zinc-700 mb-3 font-semibold">
								a. Information You Provide
							</h3>
							<ul className="text-zinc-600 space-y-2 ml-4">
								<li>
									• <strong>Account Information:</strong> Email address, name,
									profile picture (when using social login)
								</li>
								<li>
									• <strong>Video Content:</strong> URLs you submit, videos you
									upload, and clips you create
								</li>
								<li>
									• <strong>Communications:</strong> Support requests, feedback,
									and messages you send us
								</li>
								<li>
									• <strong>Payment Information:</strong> Billing details
									processed securely by our payment provider (Stripe)
								</li>
							</ul>
						</div>

						<div className="mb-8">
							<h3 className="text-xl text-zinc-700 mb-3 font-semibold">
								b. Information Collected Automatically
							</h3>
							<ul className="text-zinc-600 space-y-2 ml-4">
								<li>
									• <strong>Usage Data:</strong> Features used, clips created,
									timestamps, error logs
								</li>
								<li>
									• <strong>Device Information:</strong> IP address, browser
									type, operating system
								</li>
								<li>
									• <strong>Cookies:</strong> For session management, analytics,
									and preferences
								</li>
							</ul>
						</div>
					</div>

					{/* Video Content Processing */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Video Content Processing
						</h2>
						<p className="text-zinc-600 mb-4">
							When you use our Service to process videos:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• Videos are temporarily stored on our secure servers during
								processing
							</li>
							<li>
								• Generated clips and transcriptions are stored in your account
							</li>
							<li>
								• All video content is automatically deleted 30 days after
								processing unless you save it to your library
							</li>
							<li>
								• You can manually delete your content at any time from your
								dashboard
							</li>
						</ul>
					</div>

					{/* AI and Machine Learning */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							AI and Machine Learning
						</h2>
						<p className="text-zinc-600 mb-4">
							<strong>
								We do not use your videos or personal content to train our AI
								models.
							</strong>
						</p>
						<p className="text-zinc-600 mb-4">
							Our AI processing uses third-party services including:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• <strong>OpenAI (GPT-4):</strong> For clip detection and content
								analysis
							</li>
							<li>
								• <strong>OpenAI (Whisper):</strong> For transcription services
							</li>
						</ul>
						<p className="text-zinc-600 mt-4">
							These providers process your content under strict data processing
							agreements and do not use your content for training their models.
						</p>
					</div>

					{/* Third-Party API Usage */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Third-Party API Usage
						</h2>
						<p className="text-zinc-600 mb-4">
							Our Service integrates with the following platforms:
						</p>
						<ul className="text-zinc-600 space-y-4 ml-4">
							<li>
								<strong>YouTube API Services:</strong> We use YouTube API
								Services to fetch video content. By using our YouTube
								integration, you are also agreeing to be bound by the{" "}
								<a
									href="https://policies.google.com/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="text-violet-600 hover:underline"
								>
									Google Privacy Policy
								</a>
								. You can revoke our access via{" "}
								<a
									href="https://security.google.com/settings/security/permissions"
									target="_blank"
									rel="noopener noreferrer"
									className="text-violet-600 hover:underline"
								>
									Google Security Settings
								</a>
								.
							</li>
							<li>
								<strong>TikTok API:</strong> For publishing clips directly to
								TikTok. We only access data necessary for posting content you
								explicitly authorize.
							</li>
							<li>
								<strong>Meta (Instagram/Facebook):</strong> For publishing to
								Instagram Reels and Facebook. We comply with Meta's Platform
								Terms and data usage policies.
							</li>
						</ul>
					</div>

					{/* OAuth Data Handling */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							OAuth Data Handling
						</h2>
						<p className="text-zinc-600 mb-4">
							When you connect social media accounts:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• We only request permissions necessary for the features you use
							</li>
							<li>
								• Access tokens are stored securely and encrypted at rest
							</li>
							<li>
								• You can disconnect accounts at any time from your settings
							</li>
							<li>
								• We never post content without your explicit action
							</li>
						</ul>
					</div>

					{/* How We Use Your Information */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							How We Use Your Information
						</h2>
						<p className="text-zinc-600 mb-3">We use collected data to:</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>• Provide and improve our video clipping services</li>
							<li>• Process your videos and generate clips</li>
							<li>• Manage your account and provide customer support</li>
							<li>• Send service updates and transactional emails</li>
							<li>• Analyze usage patterns to improve our Service</li>
							<li>• Prevent fraud and ensure platform security</li>
							<li>• Comply with legal obligations</li>
						</ul>
					</div>

					{/* Cookie Policy */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Cookie Policy
						</h2>
						<p className="text-zinc-600 mb-4">We use cookies for:</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• <strong>Essential Cookies:</strong> Required for the Service
								to function (authentication, security)
							</li>
							<li>
								• <strong>Analytics Cookies:</strong> To understand how you use
								our Service (can be disabled)
							</li>
							<li>
								• <strong>Preference Cookies:</strong> To remember your settings
								and preferences
							</li>
						</ul>
						<p className="text-zinc-600 mt-4">
							You can manage cookie preferences in your browser settings.
						</p>
					</div>

					{/* Data Sharing */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Data Sharing and Disclosure
						</h2>
						<p className="text-zinc-600 mb-4">
							We do not sell your personal information. We may share data with:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• Service providers under confidentiality agreements (hosting,
								payment processing, analytics)
							</li>
							<li>
								• Social media platforms when you explicitly choose to publish
								content
							</li>
							<li>
								• Law enforcement when required by valid legal process
							</li>
							<li>
								• Business successors in the event of a merger or acquisition
							</li>
						</ul>
					</div>

					{/* Data Retention */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Data Retention
						</h2>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• Account information is retained while your account is active
							</li>
							<li>
								• Processed videos are deleted 30 days after processing
							</li>
							<li>
								• Saved clips are retained until you delete them or close your
								account
							</li>
							<li>
								• Usage logs are retained for 90 days for security purposes
							</li>
							<li>
								• Upon account deletion, all data is removed within 30 days
							</li>
						</ul>
					</div>

					{/* Data Security */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Data Security
						</h2>
						<p className="text-zinc-600 mb-3">
							We implement industry-standard security measures:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>• Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
							<li>• Secure cloud infrastructure with SOC 2 compliance</li>
							<li>• Regular security audits and penetration testing</li>
							<li>• Access controls and employee security training</li>
						</ul>
					</div>

					{/* GDPR/CCPA Compliance */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Your Rights (GDPR/CCPA)
						</h2>
						<p className="text-zinc-600 mb-3">
							Depending on your location, you have the right to:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>• Access your personal data</li>
							<li>• Correct inaccurate information</li>
							<li>• Delete your data ("right to be forgotten")</li>
							<li>• Export your data in a portable format</li>
							<li>• Object to certain processing activities</li>
							<li>• Withdraw consent at any time</li>
							<li>
								• Opt out of the sale of personal information (California
								residents)
							</li>
						</ul>
						<p className="text-zinc-600 mt-4">
							To exercise these rights, email{" "}
							<a
								href="mailto:privacy@viralclips.ai"
								className="text-violet-600 hover:underline"
							>
								privacy@viralclips.ai
							</a>{" "}
							or use the settings in your account dashboard.
						</p>
					</div>

					{/* International Transfers */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							International Data Transfers
						</h2>
						<p className="text-zinc-600">
							We process data primarily in the United States. For users in the
							EU/EEA, we rely on Standard Contractual Clauses approved by the
							European Commission to ensure adequate protection for
							international data transfers.
						</p>
					</div>

					{/* Changes to Policy */}
					<div className="mb-0">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Changes to This Policy
						</h2>
						<p className="text-zinc-600">
							We may update this Privacy Policy periodically. We will notify you
							of material changes via email or a prominent notice on our
							Service. Continued use after changes constitutes acceptance.
						</p>
					</div>
				</section>

				{/* Divider */}
				<div className="border-b border-zinc-300 mb-16" />

				{/* Section 3: Contact Us */}
				<section className="pb-16">
					<h2
						className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
						style={{ letterSpacing: "-0.5px" }}
					>
						Contact Us
					</h2>
					<p className="text-zinc-600 mb-4">
						For privacy-related questions or requests:
					</p>
					<div className="text-zinc-700">
						<p className="mb-2">ViralClips.ai Privacy Team</p>
						<p className="mb-2 flex items-center gap-2">
							<Mail className="w-4 h-4 text-violet-600" />
							<a
								href="mailto:privacy@viralclips.ai"
								className="text-violet-600 hover:underline"
							>
								privacy@viralclips.ai
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
				</section>
			</div>

			<Footer />
		</div>
	);
}
