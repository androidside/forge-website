import * as VisuallyHiddenComponent from "@radix-ui/react-visually-hidden";

interface VisuallyHiddenProps {
	children: React.ReactNode;
}

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
	return (
		<VisuallyHiddenComponent.Root>{children}</VisuallyHiddenComponent.Root>
	);
}
