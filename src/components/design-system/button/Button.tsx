import { Loader2 } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "../../ui/button";

type ButtonVariant =
	| "primary"
	| "ghost"
	| "destructive"
	| "outline"
	| "success"
	| "secondary"
	| "link"
	| "linkSecondary";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "icon" | "mobileContact";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	type?: "button" | "submit";
	onClick?: () => void;
	variant?: ButtonVariant;
	size?: ButtonSize;
	isLoading?: boolean;
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
	asChild?: boolean;
}

export const BUTTON_VARIANTS = {
	primary:
		"bg-button-primary-bg text-button-primary-fg  hover:bg-button-primary-bg-hover enabled:cursor-pointer",
	destructive:
		"bg-destructive text-destructive-foreground hover:bg-destructive-60 enabled:cursor-pointer",
	outline:
		"border border-input bg-background  hover:bg-accent hover:text-accent-foreground text-black enabled:cursor-pointer",
	success:
		"bg-success hover:bg-success-hover dark:bg-success dark:hover:bg-success-hover enabled:cursor-pointer",
	secondary:
		"bg-secondary text-secondary-foreground  hover:bg-secondary/80 enabled:cursor-pointer",
	ghost:
		"hover:bg-accent hover:text-accent-foreground bg-transparent enabled:cursor-pointer",
	link: "text-primary underline-offset-4 hover:underline enabled:cursor-pointer",
	// TODO: linkSecondary not looking like the design system yet
	linkSecondary:
		"text-secondary-foreground underline-offset-4 hover:underline bg-background hover:bg-background hover:text-secondary-foreground text-accent-foreground hover:text-accent-foreground enabled:cursor-pointer",
};

const BUTTON_SIZES = {
	xs: "py-0.5 px-1",
	sm: "py-1.5 px-2",
	md: "py-2 px-3",
	lg: "py-3 px-4",
	icon: "p-1",
	mobileContact: "h-10 w-[105px]", // 40px height (h-10) and 105px width for mobile contact button
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			label,
			type = "button",
			onClick = () => {},
			variant = "primary",
			size = "md",
			isLoading = false,
			className = "",
			children,
			disabled = false,
			asChild = false,
			...rest
		},
		ref,
	) => {
		const buttonVariant = BUTTON_VARIANTS[variant];
		const buttonSize = BUTTON_SIZES[size];

		return (
			<ShadcnButton
				{...rest}
				ref={ref}
				type={type}
				onClick={onClick}
				disabled={disabled}
				className={cn(buttonSize, buttonVariant, className)}
				variant={variant as unknown as undefined}
				asChild={asChild}
			>
				{isLoading ? <Loader2 className="animate-spin" /> : null}
				{label || children}
			</ShadcnButton>
		);
	},
);
