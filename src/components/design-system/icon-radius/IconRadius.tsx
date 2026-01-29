import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type IconRadiusVariant = "destructive" | "alert" | "success";
type IconRadiusShape = "round" | "square";

interface IconRadiusProps {
	children: ReactNode;
	variant?: IconRadiusVariant;
	shape?: IconRadiusShape;
	className?: string;
}

const VARIANT_STYLES = {
	destructive: {
		background: "bg-destructive-10",
		icon: "text-destructive",
		ring: "bg-destructive",
	},
	alert: {
		background: "bg-alert-10",
		icon: "text-alert",
		ring: "bg-alert",
	},
	success: {
		background: "bg-success-10",
		icon: "text-success",
		ring: "bg-success",
	},
};

export function IconRadius({
	children,
	variant = "destructive",
	shape = "round",
	className,
}: IconRadiusProps) {
	const variantStyle = VARIANT_STYLES[variant];

	return (
		<div className="relative w-14 h-14 flex items-center justify-center">
			{/* Outer ring with opacity */}
			<div
				className={cn(
					"absolute w-14 h-14 opacity-10",
					variantStyle.ring,
					shape === "round" ? "rounded-full" : "rounded-lg",
				)}
			/>
			{/* Main container */}
			<div
				className={cn(
					"w-10 h-10 inline-flex items-center justify-center relative",
					variantStyle.background,
					shape === "round" ? "rounded-full" : "rounded-lg",
					className,
				)}
			>
				<div
					className={cn("flex items-center justify-center", variantStyle.icon)}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
