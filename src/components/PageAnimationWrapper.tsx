import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageAnimationWrapperProps {
	children: ReactNode;
}

export function PageAnimationWrapper({ children }: PageAnimationWrapperProps) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				transform: "translateY(80px)",
			}}
			animate={{
				opacity: 1,
				transform: "translateY(0px)",
			}}
			transition={{
				delay: 0.1,
				type: "spring",
				stiffness: 100,
				damping: 15,
				mass: 1,
			}}
			style={{
				width: "100%",
				minHeight: "100vh",
			}}
		>
			{children}
		</motion.div>
	);
}
