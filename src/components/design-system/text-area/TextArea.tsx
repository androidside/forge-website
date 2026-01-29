import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface TextAreaProps {
	placeholder?: string;
	icon?: React.ReactNode;
	buttonText: string;
	value: string;
	onIconClick: () => void;
	onChange: (value: string) => void;
	onClickButton: () => void;
}

export function TextArea({
	placeholder,
	icon,
	buttonText,
	value,
	onIconClick,
	onChange,
	onClickButton,
}: TextAreaProps) {
	return (
		<div className="relative w-full">
			<Textarea
				placeholder={placeholder}
				className="min-h-[96px] resize-y w-full"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			<div className="mt-2 flex justify-between items-center px-3">
				{icon && (
					<Button
						variant="ghost"
						size="icon"
						className="h-8 w-8"
						onClick={onIconClick}
					>
						{icon}
					</Button>
				)}
				<div className="ml-auto">
					<Button
						className="bg-violet-500 hover:bg-violet-600"
						onClick={onClickButton}
					>
						{buttonText}
					</Button>
				</div>
			</div>
		</div>
	);
}

export default TextArea;
