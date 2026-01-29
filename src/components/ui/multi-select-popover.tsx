import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Loader2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface MultiSelectPopoverProps {
	value: string[];
	onChange: (value: string[]) => void;
	options: string[];
	placeholder?: string;
	label?: string;
	isLoading?: boolean;
	className?: string;
}

export function MultiSelectPopover({
	value,
	onChange,
	options,
	placeholder = "Select...",
	label,
	isLoading = false,
	className,
}: MultiSelectPopoverProps) {
	const [open, setOpen] = useState(false);
	const [tempValue, setTempValue] = useState<string[]>(value);
	const [search, setSearch] = useState("");
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Reset tempValue when value changes
	useEffect(() => {
		setTempValue(value);
	}, [value]);

	const filteredOptions = options.filter((option) =>
		option.toLowerCase().includes(search.toLowerCase()),
	);

	function handleToggle(option: string) {
		setTempValue((prev) =>
			prev.includes(option)
				? prev.filter((item) => item !== option)
				: [...prev, option],
		);
	}

	function handleApply() {
		onChange(tempValue);
		setOpen(false);
	}

	function handleClear() {
		setTempValue([]);
		onChange([]);
		setOpen(false);
	}

	return (
		<div className={cn("flex flex-col gap-2", className)}>
			{label && <label className="text-sm font-medium">{label}</label>}
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className={cn(
							"min-w-[200px] max-w-[300px] justify-between h-9 bg-background",
							className,
						)}
					>
						{value.length > 0 ? `${value.length} selected` : placeholder}
						{isLoading ? (
							<Loader2 className="ml-2 h-4 w-4 animate-spin" />
						) : (
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					align="start"
					className="min-w-[200px] max-w-[400px] p-0"
				>
					<div className="p-2">
						<input
							type="text"
							placeholder="Search..."
							className="w-full px-2 py-1 text-sm border rounded-md"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					<div
						ref={scrollContainerRef}
						className="max-h-[300px] overflow-y-auto"
					>
						{isLoading ? (
							<div className="py-6 text-center text-sm text-muted-foreground">
								<Loader2 className="mx-auto h-4 w-4 animate-spin" />
								<p className="mt-2">Loading values...</p>
							</div>
						) : (
							<div className="py-1">
								<button
									className="w-full px-2 py-1.5 text-sm flex items-center hover:bg-accent text-left"
									onClick={() => setTempValue([])}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4 shrink-0",
											tempValue.length === 0 ? "opacity-100" : "opacity-0",
										)}
									/>
									<span>All</span>
								</button>
								{filteredOptions.map((option) => (
									<button
										key={option}
										className="w-full px-2 py-1.5 text-sm flex items-center hover:bg-accent text-left whitespace-normal break-words"
										onClick={() => handleToggle(option)}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4 shrink-0",
												tempValue.includes(option)
													? "opacity-100"
													: "opacity-0",
											)}
										/>
										<span>{option}</span>
									</button>
								))}
							</div>
						)}
					</div>
					<div className="flex justify-end gap-2 p-2 border-t">
						<Button variant="outline" size="sm" onClick={handleClear}>
							Clear
						</Button>
						<Button size="sm" onClick={handleApply}>
							Apply
						</Button>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
