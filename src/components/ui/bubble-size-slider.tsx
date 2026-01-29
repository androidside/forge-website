import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface BubbleSizeSliderProps {
	value: number;
	onValueChange: (value: number) => void;
}

export function BubbleSizeSlider({
	value,
	onValueChange,
}: BubbleSizeSliderProps) {
	return (
		<div className="flex items-center gap-4">
			<Label htmlFor="bubble-size" className="text-sm text-gray-600">
				Bin Size
			</Label>
			<div className="flex items-center gap-2 w-[200px]">
				<Slider
					id="bubble-size"
					value={[value]}
					onValueChange={([newValue]) => onValueChange(newValue)}
					min={0}
					max={10}
					step={1}
					className="w-full"
				/>
				<span className="text-sm text-gray-600 min-w-[2rem] text-right">
					{value}
				</span>
			</div>
		</div>
	);
}
