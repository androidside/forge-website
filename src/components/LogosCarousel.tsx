import React from "react";
import "../index.css";

interface LogoCarouselProps {
	speed?: number;
	gap?: number;
	logoWidth?: number;
	logoHeight?: number;
}

// Platform logos as inline SVG components for the carousel
const platforms = [
	{
		name: "YouTube",
		svg: (
			<svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
				<path d="M47.5 20.1c0-1.5-.5-2.7-1.5-3.6-1-.9-2.2-1.3-3.7-1.3h-.1c-1.5 0-2.8.4-3.8 1.3-1 .9-1.5 2.1-1.5 3.6v6.2c0 1.5.5 2.7 1.5 3.6 1 .9 2.3 1.4 3.8 1.4h.1c1.5 0 2.7-.5 3.7-1.4 1-.9 1.5-2.1 1.5-3.6v-6.2zm-3 6.4c0 .6-.2 1.1-.5 1.5-.3.4-.8.6-1.3.6-.6 0-1-.2-1.3-.6-.3-.4-.5-.9-.5-1.5v-6.6c0-.6.2-1.1.5-1.5.3-.4.8-.6 1.3-.6.6 0 1 .2 1.3.6.3.4.5.9.5 1.5v6.6zM59.8 31h3v-10.2c0-.6.1-1 .4-1.4.3-.3.6-.5 1.1-.5.4 0 .8.2 1 .5.2.3.4.8.4 1.4V31h3v-10.2c0-.6.1-1 .4-1.4.3-.3.6-.5 1.1-.5.4 0 .8.2 1 .5.2.3.4.8.4 1.4V31h3V20.5c0-1.3-.3-2.3-1-3-.7-.7-1.6-1-2.7-1-.6 0-1.2.1-1.7.4-.5.3-.9.6-1.3 1.1-.2-.5-.6-.9-1.1-1.1-.5-.3-1-.4-1.6-.4-.6 0-1.1.1-1.6.4-.5.2-.9.6-1.2 1v-1.1h-2.6V31zM89.2 20.8h-6.4v-5.3h-3v16.6h3v-8.3h6.4v8.3h3V15.5h-3v5.3zM99.3 19.5c.3-.3.6-.5 1.1-.5.4 0 .8.2 1 .5.2.3.4.7.4 1.1h3c0-1.2-.4-2.2-1.1-2.9-.7-.7-1.8-1.1-3.1-1.1-1.4 0-2.5.4-3.4 1.3-.9.9-1.3 2-1.3 3.5v5.9c0 1.4.4 2.6 1.3 3.5.9.9 2 1.3 3.4 1.3 1.3 0 2.4-.4 3.1-1.1.7-.7 1.1-1.7 1.1-2.9h-3c0 .5-.1.9-.4 1.1-.2.3-.6.5-1 .5-.5 0-.8-.2-1.1-.5-.3-.3-.4-.8-.4-1.4v-6.1c0-.5.1-.9.4-1.2zM113 15.5h-3v16.6h10.4v-3h-7.4v-13.6z" />
				<path d="M27.3 6H12.7C7.7 6 3.6 10.1 3.6 15.1v9.8c0 5 4.1 9.1 9.1 9.1h14.6c5 0 9.1-4.1 9.1-9.1v-9.8c0-5-4.1-9.1-9.1-9.1zm-5.4 18.3l-6.4-3.7V12.9l6.4 3.7v7.7z" />
			</svg>
		),
	},
	{
		name: "TikTok",
		svg: (
			<svg viewBox="0 0 100 40" fill="currentColor" className="w-full h-full">
				<path d="M34.1 16.8V14c-.8.1-1.6.1-2.4 0-2.6-.5-4.7-2.3-5.6-4.7h-2.7v17.1c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2c.4 0 .9.1 1.3.2v-2.8c-.4-.1-.9-.1-1.3-.1-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V18c1.8 1.3 3.9 2 6.1 2h.1v-3.2h-.3z" />
				<path d="M50.4 10.3h-7.2V31h2.9V22.5h4.3c3.4 0 6.2-2.8 6.2-6.1 0-3.4-2.8-6.1-6.2-6.1zm0 9.3h-4.3v-6.4h4.3c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zM60.1 10.3h2.9V31h-2.9zM67.5 10.3h2.9V31h-2.9zM84.9 20.7c0-5.9-4.8-10.7-10.7-10.7S63.5 14.8 63.5 20.7s4.8 10.7 10.7 10.7 10.7-4.8 10.7-10.7zm-10.7 7.8c-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8 7.8 3.5 7.8 7.8-3.5 7.8-7.8 7.8z" />
			</svg>
		),
	},
	{
		name: "Instagram",
		svg: (
			<svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
				<path d="M20 10c-2.7 0-3 0-4.1.1-1.1 0-1.8.2-2.4.4-.7.3-1.2.6-1.8 1.2-.6.6-.9 1.1-1.2 1.8-.2.6-.4 1.4-.4 2.4C10 17 10 17.3 10 20s0 3 .1 4.1c0 1.1.2 1.8.4 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.2 1.4.4 2.4.4 1.1 0 1.4.1 4.1.1s3 0 4.1-.1c1.1 0 1.8-.2 2.4-.4.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.2-.6.4-1.4.4-2.4.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c0-1.1-.2-1.8-.4-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.2-1.4-.4-2.4-.4C23 10 22.7 10 20 10zm0 1.8c2.7 0 3 0 4 .1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.7.3.3.5.7.7 1.1.1.4.3.9.3 1.9.1 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.5-1.1.7-.4.1-.9.3-1.9.3-1 .1-1.3.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.7-.7-1.1-.1-.4-.3-.9-.3-1.9-.1-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.5.3-1.9.2-.5.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.1.9-.3 1.9-.3 1-.1 1.3-.1 4-.1zm0 3.1c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm6.5-8.6c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.5 1.2 1.2z" />
				<text x="35" y="25" fontSize="14" fontWeight="500">Instagram</text>
			</svg>
		),
	},
	{
		name: "X",
		svg: (
			<svg viewBox="0 0 60 40" fill="currentColor" className="w-full h-full">
				<path d="M25.8 10l-5.2 6.2L15.1 10h-6l8.5 10.7L8 30h4.2l5.8-6.9 6 6.9h6l-9-11.2L30 10h-4.2z" />
				<text x="35" y="24" fontSize="14" fontWeight="500">X</text>
			</svg>
		),
	},
	{
		name: "LinkedIn",
		svg: (
			<svg viewBox="0 0 100 40" fill="currentColor" className="w-full h-full">
				<path d="M15.9 10h-5.8c-.6 0-1.1.5-1.1 1.1v17.8c0 .6.5 1.1 1.1 1.1h17.8c.6 0 1.1-.5 1.1-1.1V11.1c0-.6-.5-1.1-1.1-1.1h-12zm-4.8 5.3c.9 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7-1.7-.8-1.7-1.7.8-1.7 1.7-1.7zm1.4 11.9h-2.8v-8.9h2.8v8.9zm10.5 0h-2.8v-4.9c0-1.2 0-2.7-1.6-2.7-1.6 0-1.9 1.3-1.9 2.6v5h-2.8v-8.9h2.7v1.2c.4-.7 1.3-1.6 2.7-1.6 2.9 0 3.4 1.9 3.4 4.4v4.9z" />
				<text x="35" y="24" fontSize="12" fontWeight="500">LinkedIn</text>
			</svg>
		),
	},
	{
		name: "Facebook",
		svg: (
			<svg viewBox="0 0 100 40" fill="currentColor" className="w-full h-full">
				<path d="M20 10c-5.5 0-10 4.5-10 10 0 5 3.7 9.1 8.4 9.9v-7h-2.5v-2.9h2.5v-2.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.3v7C26.3 29.1 30 25 30 20c0-5.5-4.5-10-10-10z" />
				<text x="35" y="24" fontSize="11" fontWeight="500">Facebook</text>
			</svg>
		),
	},
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
							<div className="css-logo-container text-zinc-400 hover:text-zinc-200 transition-colors">
								{platform.svg}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
