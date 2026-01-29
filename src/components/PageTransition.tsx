import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
	children: ReactNode;
	className?: string;
}

export function PageTransition({
	children,
	className = "",
}: PageTransitionProps) {
	console.log("PageTransition rendering"); // Debug log

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				duration: 0.5,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
