import React from "react";
import "../index.css";

import youtubeLogo from "@/assets/platforms/youtube.svg";
import tiktokLogo from "@/assets/platforms/tiktok.svg";
import instagramLogo from "@/assets/platforms/instagram.svg";
import xLogo from "@/assets/platforms/x.svg";
import linkedinLogo from "@/assets/platforms/linkedin.svg";
import facebookLogo from "@/assets/platforms/facebook.svg";

interface LogoCarouselProps {
	speed?: number;
	gap?: number;
	logoWidth?: number;
	logoHeight?: number;
}

const platforms = [
	{ name: "YouTube", logo: youtubeLogo },
	{ name: "TikTok", logo: tiktokLogo },
	{ name: "Instagram", logo: instagramLogo },
	{ name: "X", logo: xLogo },
	{ name: "LinkedIn", logo: linkedinLogo },
	{ name: "Facebook", logo: facebookLogo },
];

export function LogoCarousel({
	speed = 20,
	gap = 60,
	logoWidth = 140,
	logoHeight = 40,
}: LogoCarouselProps) {
	// Triple the platforms for seamless infinite loop
	const triplePlatforms = [...platforms, ...platforms, ...platforms];

	const containerWidth = logoWidth + 48;
	const oneSetWidth = platforms.length * (containerWidth + gap);

	const carouselStyles = {
		"--logo-width": `${logoWidth}px`,
		"--logo-height": `${logoHeight}px`,
		"--container-width": `${containerWidth}px`,
		"--gap": `${gap}px`,
		"--animation-duration": `${speed}s`,
		"--one-set-width": `${oneSetWidth}px`,
	} as React.CSSProperties;

	return (
		<div className="w-full md:max-w-7xl md:mx-auto md:px-8">
			<div className="css-logo-carousel" style={carouselStyles}>
				<div className="css-logo-track">
					{triplePlatforms.map((platform, index) => (
						<div key={`${platform.name}-${index}`} className="css-logo-item">
							<div className="css-logo-container flex flex-col items-center justify-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
								<img
									src={platform.logo}
									alt={platform.name}
									className="w-7 h-7 opacity-50 brightness-0 invert"
								/>
								<span className="text-sm font-medium">{platform.name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
