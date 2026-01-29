// src/components/multi-select.tsx

import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { PlusCircle } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/**
 * Define variants similar to Button
 */
const MULTISELECT_VARIANTS = {
	default: "border border-input bg-transparent",
	outline:
		"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
	"dotted-outline": "border border-dashed border-input bg-transparent",
	ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
	secondary:
		"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
};

/**
 * Props for MultiSelect component
 */
interface MultiSelectProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * An array of option objects to be displayed in the multi-select component.
	 * Each option object has a label, value, and an optional icon.
	 */
	options: {
		/** The text to display for the option. */
		label: string;
		/** The unique value associated with the option. */
		value: string;
		/** Optional icon component to display alongside the option. */
		icon?: React.ComponentType<{ className?: string }>;
	}[];

	/**
	 * Callback function triggered when the selected values change.
	 * Receives an array of the new selected values.
	 */
	onValueChange: (value: string[]) => void;

	/** The default selected values when the component mounts. */
	defaultValue?: string[];

	/**
	 * Placeholder text to be displayed when no values are selected.
	 * Optional, defaults to "Select options".
	 */
	placeholder?: string;

	/**
	 * Animation duration in seconds for the visual effects (e.g., bouncing badges).
	 * Optional, defaults to 0 (no animation).
	 */
	animation?: number;

	/**
	 * Maximum number of items to display. Extra selected items will be summarized.
	 * Optional, defaults to 3.
	 */
	maxCount?: number;

	/**
	 * The modality of the popover. When set to true, interaction with outside elements
	 * will be disabled and only popover content will be visible to screen readers.
	 * Optional, defaults to false.
	 */
	modalPopover?: boolean;

	/**
	 * If true, renders the multi-select component as a child of another component.
	 * Optional, defaults to false.
	 */
	asChild?: boolean;

	/**
	 * Additional class names to apply custom styles to the multi-select component.
	 * Optional, can be used to add custom styles.
	 */
	className?: string;

	/**
	 * Variant for the multi-select component.
	 */
	variant?: keyof typeof MULTISELECT_VARIANTS;
}

export const MultiSelect = React.forwardRef<
	HTMLButtonElement,
	MultiSelectProps
>(
	(
		{
			options,
			onValueChange,
			variant = "default",
			defaultValue = [],
			placeholder = "Select options",
			animation = 0,
			maxCount = 3,
			modalPopover = false,
			asChild = false,
			className,
			...props
		},
		ref,
	) => {
		const [selectedValues, setSelectedValues] =
			React.useState<string[]>(defaultValue);

		React.useEffect(() => {
			setSelectedValues(defaultValue);
		}, [defaultValue]);

		const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
		const [isAnimating, setIsAnimating] = React.useState(false);

		function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
			if (event.key === "Enter") {
				setIsPopoverOpen(true);
			} else if (event.key === "Backspace" && !event.currentTarget.value) {
				const newSelectedValues = [...selectedValues];
				newSelectedValues.pop();
				setSelectedValues(newSelectedValues);
				onValueChange(newSelectedValues);
			}
		}

		function toggleOption(option: string) {
			const newSelectedValues = selectedValues.includes(option)
				? selectedValues.filter((value) => value !== option)
				: [...selectedValues, option];
			setSelectedValues(newSelectedValues);
			onValueChange(newSelectedValues);
		}

		function handleClear() {
			setSelectedValues([]);
			onValueChange([]);
		}

		function handleTogglePopover() {
			setIsPopoverOpen((prev) => !prev);
		}

		function clearExtraOptions() {
			const newSelectedValues = selectedValues.slice(0, maxCount);
			setSelectedValues(newSelectedValues);
			onValueChange(newSelectedValues);
		}

		function toggleAll() {
			if (selectedValues.length === options.length) {
				handleClear();
			} else {
				const allValues = options.map((option) => option.value);
				setSelectedValues(allValues);
				onValueChange(allValues);
			}
		}

		return (
			<Popover
				open={isPopoverOpen}
				onOpenChange={setIsPopoverOpen}
				modal={modalPopover}
			>
				<PopoverTrigger asChild>
					<Button
						ref={ref}
						{...props}
						variant="ghost"
						onClick={handleTogglePopover}
						className={cn(
							"flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 hover:bg-transparent hover:text-foreground",
							MULTISELECT_VARIANTS[variant],
							className,
						)}
					>
						<div className="flex items-center gap-2">
							<PlusCircle className="h-4 w-4" />
							<span className="text-sm font-normal">{placeholder}</span>
							{selectedValues.length > 0 && (
								<>
									<Separator orientation="vertical" className="h-4" />
									<div className="flex flex-wrap items-center gap-1">
										{selectedValues.slice(0, maxCount).map((value) => {
											// Find the corresponding label for the selected value
											const option = options.find((opt) => opt.value === value);
											const displayText = option?.label || value;

											return (
												<Badge
													key={value}
													variant="secondary"
													className="rounded-sm text-sm font-medium px-[5px] py-0.5 h-[20px] bg-accent text-accent-foreground"
												>
													{displayText}
												</Badge>
											);
										})}
										{selectedValues.length > maxCount && (
											<Badge
												variant="secondary"
												className="rounded-sm text-sm font-medium px-[5px] py-0.5 h-[20px] bg-accent text-accent-foreground"
											>
												{`+${selectedValues.length - maxCount}`}
											</Badge>
										)}
									</div>
								</>
							)}
						</div>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-auto p-0"
					align="start"
					onEscapeKeyDown={() => setIsPopoverOpen(false)}
				>
					<Command>
						<CommandInput
							placeholder="Search..."
							onKeyDown={handleInputKeyDown}
						/>
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup>
								<CommandItem
									key="all"
									onSelect={toggleAll}
									className="cursor-pointer"
								>
									<div
										className={cn(
											"mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-muted-foreground/30",
											selectedValues.length === options.length
												? "bg-accent text-accent-foreground"
												: "opacity-50 [&_svg]:invisible",
										)}
									>
										<CheckIcon className="h-4 w-4" />
									</div>
									<span>(Select All)</span>
								</CommandItem>
								{options.map((option) => {
									const isSelected = selectedValues.includes(option.value);
									return (
										<CommandItem
											key={option.value}
											onSelect={() => toggleOption(option.value)}
											className="cursor-pointer"
										>
											<div
												className={cn(
													"mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-muted-foreground/30",
													isSelected
														? "bg-accent text-accent-foreground"
														: "opacity-50 [&_svg]:invisible",
												)}
											>
												<CheckIcon className="h-4 w-4" />
											</div>
											{option.icon && (
												<option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
											)}
											<span>{option.label}</span>
										</CommandItem>
									);
								})}
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup>
								<div className="flex items-center justify-between">
									{selectedValues.length > 0 && (
										<>
											<CommandItem
												onSelect={handleClear}
												className="flex-1 justify-center cursor-pointer"
											>
												Clear
											</CommandItem>
											<Separator
												orientation="vertical"
												className="flex min-h-6 h-full"
											/>
										</>
									)}
									<CommandItem
										onSelect={() => setIsPopoverOpen(false)}
										className="flex-1 justify-center cursor-pointer max-w-full"
									>
										Close
									</CommandItem>
								</div>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
				{animation > 0 && selectedValues.length > 0 && (
					<Cross2Icon
						className={cn(
							"cursor-pointer my-2 text-foreground bg-background w-3 h-3",
							isAnimating ? "" : "text-muted-foreground",
						)}
						onClick={() => setIsAnimating(!isAnimating)}
					/>
				)}
			</Popover>
		);
	},
);

MultiSelect.displayName = "MultiSelect";
