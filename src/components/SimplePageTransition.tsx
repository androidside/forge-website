import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SimplePageTransitionProps {
	children: ReactNode;
	className?: string;
}

export function SimplePageTransition({
	children,
	className = "",
}: SimplePageTransitionProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
