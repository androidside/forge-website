import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface MonthPickerProps {
	currentMonth: Date | null;
	onMonthChange: (newMonth: Date) => void;
}

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export function MonthPicker({ currentMonth, onMonthChange }: MonthPickerProps) {
	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

	const selectedMonth = currentMonth?.getMonth() || 0;
	const selectedYear = currentMonth?.getFullYear() || currentYear;

	const handleMonthChange = (monthIndex: string) => {
		const newDate = new Date(selectedYear, Number.parseInt(monthIndex));
		onMonthChange(newDate);
	};

	const handleYearChange = (year: string) => {
		const newDate = new Date(Number.parseInt(year), selectedMonth);
		onMonthChange(newDate);
	};

	return (
		<div className="flex gap-2">
			<Select
				value={selectedMonth.toString()}
				onValueChange={handleMonthChange}
			>
				<SelectTrigger className="w-[140px]">
					<SelectValue placeholder="Month" />
				</SelectTrigger>
				<SelectContent>
					{MONTHS.map((month, index) => (
						<SelectItem key={month} value={index.toString()}>
							{month}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<Select value={selectedYear.toString()} onValueChange={handleYearChange}>
				<SelectTrigger className="w-[100px]">
					<SelectValue placeholder="Year" />
				</SelectTrigger>
				<SelectContent>
					{years.map((year) => (
						<SelectItem key={year} value={year.toString()}>
							{year}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
