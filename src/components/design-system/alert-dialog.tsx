import {
	BUTTON_VARIANTS,
	Button,
} from "@/components/design-system/button/Button";
import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	AlertDialog as ShadcnAlertDialog,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

type DialogVariant = "alert" | "warning";

const iconVariants = {
	alert:
		"shrink-0 grow-0 self-start rounded-full bg-red-50 p-3 dark:bg-red-900",
	warning:
		"shrink-0 grow-0 self-start rounded-full bg-alert-10 text-alert p-3 dark:bg-red-900",
};

type AlertDialogProps = {
	className?: string;
	variant: DialogVariant;
	title: string;
	description?: string;
	open?: boolean;
	onOpenChange?: () => void;
	onCancel?: () => void;
	onConfirm: () => void;
	cancelLabel?: string;
	confirmLabel?: string;
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	children?: React.ReactNode;
};

export function AlertDialog({
	className,
	variant,
	title,
	description,
	open,
	onOpenChange,
	onConfirm,
	onCancel,
	icon: Icon,
	cancelLabel = "Cancel",
	confirmLabel = "Continue",
	children,
}: AlertDialogProps) {
	return (
		<ShadcnAlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent className={className}>
				<AlertDialogHeader>
					{Icon && (
						<div aria-hidden="true" className={iconVariants[variant]}>
							<Icon className="size-6 text-red-600 dark:text-red-200" />
						</div>
					)}
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="mt-4 flex items-center gap-x-2">
					<AlertDialogCancel className="cursor-pointer grow" onClick={onCancel}>
						{cancelLabel}
					</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirm} asChild>
						<Button
							className={cn(
								BUTTON_VARIANTS[
									variant === "alert" ? "destructive" : "primary"
								],
								"grow",
							)}
						>
							{confirmLabel}
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</ShadcnAlertDialog>
	);
}
