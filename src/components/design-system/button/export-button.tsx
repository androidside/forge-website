import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UploadIcon } from "lucide-react";

interface ExportOption {
	label: string;
	onClick: () => void;
	disabled?: boolean;
}

interface ExportButtonProps {
	options: ExportOption[];
	isExporting?: boolean;
	className?: string;
	title?: string;
	container?: HTMLElement;
}

export function ExportButton({
	options,
	isExporting,
	className = "",
	title = "Export chart",
	container,
}: ExportButtonProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className={`px-3 h-8 ${className}`}
					disabled={isExporting}
				>
					<UploadIcon className="h-4 w-4 mr-2" />
					Export
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="w-[200px]"
				container={container}
			>
				<div className="px-2 py-2 text-sm font-semibold border-b">{title}</div>
				{options.map((option) => (
					<DropdownMenuItem
						key={option.label}
						onClick={option.onClick}
						disabled={option.disabled}
					>
						{option.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
