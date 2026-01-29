import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface DaysSliderProps {
	value: number;
	onValueChange: (value: number) => void;
	min: number;
	max: number;
}

const MARKERS = [
	{ value: 7, label: "7d" },
	{ value: 30, label: "30d" },
	{ value: 60, label: "60d" },
];

export function DaysSlider({
	value,
	onValueChange,
	min,
	max,
}: DaysSliderProps) {
	const getMarkerPosition = (markerValue: number) => {
		return `${((markerValue - min) / (max - min)) * 100}%`;
	};

	return (
		<div className="flex items-center gap-4 relative z-10">
			<Label
				htmlFor="days-window"
				className="text-sm text-muted-foreground w-8"
			>
				{min}d
			</Label>
			<div className="flex flex-col gap-1 w-[200px]">
				<div className="relative">
					<Slider
						id="days-window"
						value={[value]}
						onValueChange={([newValue]) => onValueChange(newValue)}
						min={min}
						max={max}
						step={1}
						className={cn(
							"w-full relative z-20",
							"[&_.relative]:z-20 [&_[role=slider]]:z-20",
						)}
					/>
					<div className="absolute inset-x-0 bottom-[-4px] h-1.5 z-10 pointer-events-none">
						{MARKERS.map((marker) => (
							<div
								key={marker.value}
								className="absolute"
								style={{
									left: getMarkerPosition(marker.value),
									transform: "translateX(-50%)",
								}}
							>
								<div className="w-0.5 h-full bg-muted-foreground/50" />
							</div>
						))}
					</div>
				</div>
				<div className="relative w-full h-4 mt-[-2px]">
					{MARKERS.map((marker) => (
						<div
							key={marker.value}
							className="absolute flex flex-col items-center cursor-pointer hover:text-foreground"
							style={{
								left: getMarkerPosition(marker.value),
								transform: "translateX(-50%)",
							}}
							onClick={() => onValueChange(marker.value)}
						>
							<span className="text-[10px] text-muted-foreground">
								{marker.label}
							</span>
						</div>
					))}
				</div>
			</div>
			<Label
				htmlFor="days-window"
				className="text-sm text-muted-foreground w-8"
			>
				{max}d
			</Label>
		</div>
	);
}
