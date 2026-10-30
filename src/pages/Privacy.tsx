import { Globe, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const DATA_DELETION_URL = "https://api.viralclips.ai/social/meta/data-deletion";

export function Privacy() {
	return (
		<div className="min-h-screen flex flex-col pt-16 bg-zinc-100 motion-safe:animate-page-enter">
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
						Welcome to ViralClips.ai. J3D Labs, Inc., a Delaware corporation
						(&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operates
						ViralClips.ai. This Privacy Policy explains how we collect, use,
						protect, and disclose information when you use our AI-powered video
						clipping service.
					</p>
					<p className="text-sm text-zinc-500 mt-4">
						Last updated: October 29, 2026
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
									• <strong>Account Information:</strong> Your name, email
									address, and profile picture from your Google account when you
									sign in with Google
								</li>
								<li>
									• <strong>Video Content:</strong> Links to videos you submit,
									files you upload (such as watermarks and outro videos), and
									the clips, transcripts, and captions we create from them
								</li>
								<li>
									• <strong>Connected Accounts:</strong> Account details and
									access tokens for the social media accounts you connect, as
									described below
								</li>
								<li>
									• <strong>Waitlist:</strong> Your email address, if you join
									our waitlist on viralclips.ai
								</li>
								<li>
									• <strong>Communications:</strong> Support requests, feedback,
									and messages you send us
								</li>
							</ul>
						</div>

						<div className="mb-8">
							<h3 className="text-xl text-zinc-700 mb-3 font-semibold">
								b. Information Collected Automatically
							</h3>
							<ul className="text-zinc-600 space-y-2 ml-4">
								<li>
									• <strong>Sign-in Information:</strong> Your IP address and
									browser details, which show your browser type and operating
									system, each time you sign in
								</li>
								<li>
									• <strong>Usage Data:</strong> The projects and clips you
									create, the posts you publish or schedule, timestamps, and
									error logs
								</li>
								<li>
									• <strong>Cookies and Local Storage:</strong> To keep you
									signed in and remember your preferences, as described under
									Cookies and Local Storage below
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
								• We copy each video you submit to our servers to process it
							</li>
							<li>
								• We store the clips, transcripts, and other files we create in
								your account
							</li>
							<li>
								• We keep your videos, clips, and related files until you delete
								them or your account is deleted. We do not delete them
								automatically.
							</li>
							<li>
								• You can delete a clip, or a whole project with its source
								video and clips, at any time in the app. This removes the files
								from active storage right away. Copies can remain in our storage
								backups, as described under Data Retention below.
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
								We do not use your videos or personal content to train AI
								models.
							</strong>
						</p>
						<p className="text-zinc-600 mb-4">
							We transcribe audio on our own servers with Whisper, an
							open-source speech recognition model. For other steps, we send
							data to these AI providers:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• <strong>OpenAI:</strong> Analyzes video transcripts to find,
								refine, and review clips
							</li>
							<li>
								• <strong>Google Gemini:</strong> Analyzes a video&rsquo;s audio
								to tell speakers apart. We can also use it in place of OpenAI to
								analyze transcripts.
							</li>
							<li>
								• <strong>Anthropic (Claude):</strong> We can use it in place of
								OpenAI to analyze transcripts.
							</li>
						</ul>
						<p className="text-zinc-600 mt-4">
							We do not send your account details, such as your name or email
							address, or data from your connected social media accounts to
							these providers. Each provider processes the data we send under
							its own API terms.
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
								Services to find new videos on the YouTube channels you ask us
								to watch, and to publish clips to the YouTube channels you
								connect. By using our YouTube integration, you are also agreeing
								to be bound by the{" "}
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
								<strong>TikTok API:</strong> To publish clips to the TikTok
								accounts you connect.
							</li>
							<li>
								<strong>LinkedIn and X:</strong> To publish clips to the
								LinkedIn and X accounts you connect.
							</li>
							<li>
								<strong>Meta (Instagram/Facebook):</strong> To publish clips as
								Instagram Reels and Facebook Page videos. The next section
								explains what Facebook and Instagram data we use.
							</li>
						</ul>
					</div>

					{/* Facebook and Instagram Data */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Facebook and Instagram Data
						</h2>
						<p className="text-zinc-600 mb-4">
							When you connect, we read the list of Facebook Pages and Instagram
							professional accounts you manage so you can choose which ones to
							connect. For each account you connect, we store:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• <strong>Account Details:</strong> The Page&rsquo;s ID and
								name; the Instagram account&rsquo;s ID, username, name, profile
								link, and profile picture URL; and the user ID that Facebook
								assigns you for ViralClips
							</li>
							<li>
								• <strong>Access Tokens:</strong> The tokens that let ViralClips
								act for the account. We encrypt them with AES-256-GCM before we
								store them.
							</li>
							<li>
								• <strong>Posts:</strong> For each post you publish through
								ViralClips, its ID, link, and caption, plus its views, likes,
								comments, and shares
							</li>
						</ul>
						<p className="text-zinc-600 mt-4">
							We use this data only to show the accounts you connected, publish
							and schedule your clips, edit or delete posts you published
							through ViralClips when you ask us to, and show how your posts
							perform. To show a post in the app, we may also read its text,
							link, and publish date from Facebook or Instagram. We do not sell
							this data, use it for advertising, or send it to our AI providers.
							We comply with Meta&rsquo;s Platform Terms and Developer Policies.
						</p>
						<p className="text-zinc-600 mt-4">
							Disconnecting an account in the app deletes its access tokens
							right away. After that, we keep only the account&rsquo;s ID, its
							name or username, and the user ID that Facebook assigns you for
							ViralClips. Your team&rsquo;s post history uses the ID and the
							name or username to show where each post went, and we use your
							user ID to match a later deletion request from Meta. We keep these
							details until you ask us to delete them, and we keep post records
							until you delete the project that contains the clip or ask us to
							delete them. While you choose which accounts to connect, we hold
							an encrypted copy of your access token in a temporary record. We
							delete it when you finish connecting, or after 10 minutes if you
							do not finish. To delete your Facebook and Instagram data, follow
							the steps at{" "}
							<a
								href={DATA_DELETION_URL}
								className="text-violet-600 hover:underline break-all"
							>
								{DATA_DELETION_URL}
							</a>{" "}
							or email{" "}
							<a
								href="mailto:privacy@viralclips.ai"
								className="text-violet-600 hover:underline"
							>
								privacy@viralclips.ai
							</a>
							.
						</p>
						<p className="text-zinc-600 mt-4">
							When Meta asks us to delete your data, we use the user ID that
							Facebook assigns you for ViralClips to find the Facebook Pages and
							Instagram accounts you connected. For each one, we delete the
							account details, access tokens, and post records. We also delete
							any connection you started but did not finish, within about 10
							minutes of Facebook sending you back to ViralClips. The request
							cannot find an account that someone else connected again after
							you, or any account once we have deleted your ViralClips account,
							because we no longer link it to your user ID. Email{" "}
							<a
								href="mailto:privacy@viralclips.ai"
								className="text-violet-600 hover:underline"
							>
								privacy@viralclips.ai
							</a>{" "}
							to have that data deleted. For each request, we keep only a
							confirmation code, the result, the times we received and processed
							the request, how many accounts and post records we deleted, a
							one-way hash of your user ID, and, if processing fails, the latest
							error message, without your user ID. A one-way hash is a scrambled
							code made from the ID, not the ID itself. A successful retry
							deletes the error message. You can check the request&rsquo;s
							status with its confirmation code. Deleted data can remain in our
							database backups for up to 7 days and in our server logs for up to
							30 days, until they expire.
						</p>
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
								• We encrypt access tokens with AES-256-GCM before we store them
							</li>
							<li>
								• You can disconnect an account at any time in the app, which
								deletes its access tokens
							</li>
							<li>
								• We post to your accounts only when you publish or schedule a
								clip, or when Autopilot posts for you
							</li>
							<li>
								• Autopilot is off until you turn it on and choose the accounts
								it may post to. It then posts clips that you or our AI review
								mark for posting, on the schedule you set.
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
							<li>• Publish clips to the social media accounts you connect</li>
							<li>• Manage your account and provide customer support</li>
							<li>
								• Reply to your messages and tell you about important changes to
								the Service
							</li>
							<li>• Find and fix errors</li>
							<li>• Prevent fraud and ensure platform security</li>
							<li>• Comply with legal obligations</li>
						</ul>
					</div>

					{/* Cookies and Local Storage */}
					<div className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-regular text-zinc-900 mb-6"
							style={{ letterSpacing: "-0.5px" }}
						>
							Cookies and Local Storage
						</h2>
						<p className="text-zinc-600 mb-4">
							We do not use advertising or analytics cookies. We use:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• <strong>Local Storage for Sign-in:</strong> The app keeps your
								sign-in session in your browser&rsquo;s local storage
							</li>
							<li>
								• <strong>A Preference Cookie:</strong> The app sets one cookie
								to remember whether its sidebar is open or collapsed
							</li>
							<li>
								• <strong>Bot Protection:</strong> Our waitlist form uses
								Cloudflare Turnstile to check that a person, not a bot, is
								signing up
							</li>
						</ul>
						<p className="text-zinc-600 mt-4">
							You can clear cookies and local storage in your browser settings.
							Clearing local storage signs you out of the app.
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
							We do not sell your personal information. We share data only with:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>
								• Other members of your team, who can see the team&rsquo;s
								projects, clips, and connected accounts
							</li>
							<li>
								• Service providers that run parts of the Service for us: Amazon
								Web Services (hosting, file storage, and databases), Vercel
								(hosting for this website), Google (sign-in and the spreadsheet
								that holds our waitlist), Cloudflare (bot protection), and the
								AI providers listed above
							</li>
							<li>
								• Social media platforms you connect, when you publish or
								schedule a post or Autopilot posts for you
							</li>
							<li>• Law enforcement when required by valid legal process</li>
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
								• We keep your account information while your account is open
							</li>
							<li>
								• We keep your videos, clips, transcripts, and related files
								until you delete them or your account is deleted. We do not
								delete them automatically.
							</li>
							<li>
								• When you delete files in the app, we remove them from active
								storage right away, but copies can remain in our storage backups
								until we remove them. To have those copies removed, email{" "}
								<a
									href="mailto:privacy@viralclips.ai"
									className="text-violet-600 hover:underline"
								>
									privacy@viralclips.ai
								</a>
								.
							</li>
							<li>
								• Projects belong to your team. If other members remain on the
								team, its projects stay with them after you leave or your
								account is deleted. When we delete your account, we disconnect
								every Facebook Page and Instagram account you connected, in
								every team, and delete their access tokens and the user ID that
								Facebook assigns you for ViralClips. In a team where you were
								the only member, we also delete those accounts and their post
								records. In a team with other members, each account&rsquo;s ID,
								its name or username, and its post records stay with the team
								until you or a team member asks us to delete them. We still
								delete the records of posts made from clips in a team where you
								were the only member, because we delete those clips.
							</li>
							<li>• We keep server logs for 30 days</li>
							<li>
								• To delete your account or other data, email{" "}
								<a
									href="mailto:privacy@viralclips.ai"
									className="text-violet-600 hover:underline"
								>
									privacy@viralclips.ai
								</a>
								. Within 30 days of your request, we delete or anonymize your
								account and sign-in information and delete the files you asked
								us to delete.
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
							We protect your data with these measures:
						</p>
						<ul className="text-zinc-600 space-y-2 ml-4">
							<li>• We encrypt data in transit with HTTPS</li>
							<li>
								• We encrypt social media access tokens with AES-256-GCM before
								we store them
							</li>
							<li>
								• Amazon Web Services encrypts our file storage and database at
								rest
							</li>
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
							</a>
							. You can also delete clips and projects, and disconnect social
							media accounts, yourself in the app.
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
						<p className="mb-2">J3D Labs, Inc. (ViralClips.ai Privacy Team)</p>
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
