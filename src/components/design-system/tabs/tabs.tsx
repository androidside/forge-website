import {
	Tabs as ShadcnTabs,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";

interface TabItem {
	label: string;
	value: string;
}

interface TabsProps {
	value: string;
	onChange: (value: string) => void;
	tabs: TabItem[];
}

export function Tabs({ value, onChange, tabs }: TabsProps) {
	return (
		<ShadcnTabs value={value} onValueChange={onChange}>
			<TabsList className="bg-secondary/50 rounded-lg p-1 h-8">
				{tabs.map((tab) => (
					<TabsTrigger
						key={tab.value}
						value={tab.value}
						className="rounded-md px-3 h-6 data-[state=active]:bg-background data-[state=active]:text-foreground text-muted-foreground shadow-none data-[state=active]:shadow-none focus-visible:ring-0"
					>
						{tab.label}
					</TabsTrigger>
				))}
			</TabsList>
		</ShadcnTabs>
	);
}
