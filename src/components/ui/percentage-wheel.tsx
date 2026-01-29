interface PercentageWheelProps {
	value: number;
	size?: "sm" | "md" | "lg";
	label: string;
	trackColor?: string;
	progressColor?: string;
	textColor?: string;
}

export function PercentageWheel({
	value,
	label,
	trackColor,
	progressColor = "#10B981",
	textColor,
}: PercentageWheelProps) {
	const radius = 26;
	const circumference = 2 * Math.PI * radius;
	const progress = ((100 - value) / 100) * circumference;

	return (
		<div className="flex items-center gap-6 h-[64px]">
			<div className="relative w-[56px] h-[56px]">
				<svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
					<circle
						className={trackColor ? "" : "text-muted stroke-current"}
						strokeWidth="5"
						stroke={trackColor || "currentColor"}
						fill="transparent"
						r={radius}
						cx="32"
						cy="32"
					/>
					<circle
						className={
							progressColor ? `stroke-[${progressColor}]` : "stroke-[#10B981]"
						}
						strokeWidth="5"
						strokeDasharray={circumference}
						strokeDashoffset={progress}
						strokeLinecap="round"
						stroke={progressColor || "currentColor"}
						fill="transparent"
						r={radius}
						cx="32"
						cy="32"
					/>
				</svg>
			</div>
			<div className="flex flex-col gap-2">
				<span
					className={`text-sm ${textColor ? "" : "text-muted-foreground"}`}
					style={textColor ? { color: textColor } : {}}
				>
					{label}
				</span>
				<span
					className={`text-2xl font-bold ${textColor ? "" : ""}`}
					style={textColor ? { color: textColor } : {}}
				>
					{value}%
				</span>
			</div>
		</div>
	);
}
