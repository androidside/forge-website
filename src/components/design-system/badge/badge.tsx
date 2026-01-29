import { cn } from "@/lib/utils";
import { Badge as ShadcnBadge } from "../../ui/badge";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	label: string;
	className?: string;
	variant?:
		| "default"
		| "secondary"
		| "muted"
		| "outline"
		| "destructive"
		| "warning"
		| "success"
		| "destructiveLight"
		| "warningLight"
		| "successLight";
	onClick?: () => void;
	hasRing?: boolean;
	popoverContent?: string;
}

export const BADGE_VARIANTS = {
	default:
		"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
	secondary:
		"border-transparent bg-button-secondary-bg text-button-secondary-fg hover:bg-secondary/80",
	muted:
		"border-transparent bg-secondary font-normal text-button-secondary-fg hover:bg-secondary/80 px-1 py-0.5",
	outline:
		"border border-input text-bg bg-background hover:bg-accent hover:text-accent-foreground",
	destructive:
		"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive-hover",
	warning: "bg-alert hover:bg-alert-hover text-alert-foreground border-none",
	success:
		"bg-success hover:bg-success-hover text-success-foreground border-none",
	destructiveLight:
		"border-transparent bg-destructive-60 text-destructive-foreground hover:bg-destructive-hover",
	warningLight:
		"border-transparent bg-alert-10 text-alert hover:bg-alert-hover",
	successLight:
		"border-transparent bg-success-10 text-success hover:bg-success-hover",
};

const RING_VARIANTS = {
	default: "bg-primary",
	secondary: "bg-secondary",
	muted: "",
	outline: "bg-input",
	destructive: "bg-destructive",
	warning: "bg-alert",
	success: "bg-success",
	destructiveLight: "bg-destructive",
	warningLight: "bg-alert",
	successLight: "bg-success",
};

export function Badge({
	label,
	variant = "default",
	className = "",
	onClick,
	hasRing = false,
	...props
}: BadgeProps) {
	const badgeVariant = BADGE_VARIANTS[variant];
	const ringVariant = RING_VARIANTS[variant];

	if (hasRing) {
		return (
			<div className="relative inline-flex items-center justify-center w-3 h-3">
				<div
					className={cn(
						"absolute w-4 h-4 rounded-full opacity-30",
						ringVariant,
					)}
				/>
				<ShadcnBadge
					onClick={onClick}
					className={cn(
						badgeVariant,
						"absolute w-2 h-2 p-0 rounded-full",
						className,
					)}
					variant={variant as any}
					{...props}
				>
					{label}
				</ShadcnBadge>
			</div>
		);
	}

	return (
		<ShadcnBadge onClick={onClick} className={cn(badgeVariant, className)}>
			{label}
		</ShadcnBadge>
	);
}
