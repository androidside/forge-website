import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { CirclePlus } from "lucide-react";
import { useCallback, useState } from "react";

type MultiSelectProps<T> = {
	value: T[];
	onChange: (value: T[], item: T) => void;
	options: T[];
	label: string;
	noResultsMsg?: string;
	renderSelected: (value: T[]) => React.ReactNode;
	children: (args: {
		item: T;
		selected: boolean;
		onSelect: () => void;
	}) => React.ReactNode;
};

export function MultiSelect<T>({
	value,
	onChange,
	options,
	label,
	noResultsMsg = "No results found",
	renderSelected,
	children,
}: MultiSelectProps<T>) {
	const [open, setOpen] = useState(false);

	const toggleValue = useCallback(
		(item: T) => {
			const newValue = value.includes(item)
				? value.filter((v) => v !== item)
				: [...value, item];
			onChange(newValue, item);
		},
		[onChange, value],
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<div className="w-full flex items-center gap-4 border border-dashed rounded-md px-3 py-2 cursor-pointer hover:bg-secondary">
					<span className="text-sm inline-flex shrink-0 gap-2 justify-center items-center">
						<CirclePlus className="h-4 w-4" />
						<span>{label}</span>
					</span>
					{value.length > 0 && (
						<div className="pl-4 border-l flex flex-wrap gap-1">
							{renderSelected(value)}
						</div>
					)}
				</div>
			</PopoverTrigger>
			<PopoverContent
				align="start"
				className="w-(--radix-popover-trigger-width)"
				onWheel={(e) => e.stopPropagation()}
			>
				<Command>
					<CommandInput placeholder="Search units" className="h-9" />
					<CommandList>
						<CommandEmpty>{noResultsMsg}</CommandEmpty>
						<CommandGroup>
							{options.map((option) =>
								children({
									item: option,
									selected: value.includes(option),
									onSelect: () => toggleValue(option),
								}),
							)}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
