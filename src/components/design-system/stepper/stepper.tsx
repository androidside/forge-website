import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Circle } from "lucide-react";

interface Step {
	title: string;
}

interface StepperProps {
	steps: Step[];
	currentStep?: number;
	orientation?: "horizontal" | "vertical";
}

export function Stepper({
	steps,
	currentStep = 0,
	orientation = "horizontal",
}: StepperProps) {
	const isVertical = orientation === "vertical";

	return (
		<div className={cn("w-full max-w-3xl mx-auto")}>
			{isVertical ? (
				<div className="flex flex-col">
					{steps.map((step, index) => {
						const stepStatus =
							index < currentStep
								? "completed"
								: index === currentStep
									? "current"
									: "upcoming";

						return (
							<div key={step.title} className="flex items-start relative mb-6">
								{/* Step Circle */}
								<div className="flex items-center">
									<motion.div
										initial={{ scale: 0.8, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ duration: 0.3 }}
										className={cn(
											"w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 bg-white",
											stepStatus === "completed" &&
												"border-primary bg-primary text-primary-foreground",
											stepStatus === "current" && "border-primary bg-primary",
											stepStatus === "upcoming" && "border-muted",
										)}
									>
										{stepStatus === "completed" ? (
											<Check className="w-5 h-5" />
										) : stepStatus === "current" ? (
											<Circle className="w-7 h-7 fill-primary stroke-[1.5] stroke-white" />
										) : (
											<Circle className="w-1 h-1 fill-primary stroke-none" />
										)}
									</motion.div>
									<span
										className={cn(
											"ml-4 text-base",
											stepStatus === "completed" &&
												"text-muted-foreground font-medium",
											stepStatus === "current" && "font-medium",
											stepStatus === "upcoming" && "text-muted-foreground",
										)}
									>
										{step.title}
									</span>
								</div>
								{/* Connector Line Vertical */}
								{index < steps.length - 1 && (
									<div className="absolute left-[13px] top-8 w-[2px] h-14">
										<motion.div
											initial={{ height: 0 }}
											animate={{
												height: index < currentStep ? "100%" : "0%",
											}}
											transition={{
												duration: 0.4,
												ease: "easeInOut",
											}}
											className="absolute top-0 left-0 w-full bg-primary origin-top z-10"
										/>
										<div className="absolute top-0 left-0 w-full h-full bg-muted" />
									</div>
								)}
							</div>
						);
					})}
				</div>
			) : (
				<div
					className="grid"
					style={{
						gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
						columnGap: "20px",
					}}
				>
					{steps.map((step, index) => {
						const stepStatus =
							index < currentStep
								? "completed"
								: index === currentStep
									? "current"
									: "upcoming";

						return (
							<div
								key={step.title}
								className="flex flex-col items-center relative"
							>
								{/* Connector lines */}
								{index > 0 && (
									<div
										className={cn(
											"absolute top-3.5 h-[2px] -left-[calc(50%+10px)] w-[calc(100%-20px)]",
											index <= currentStep ? "bg-primary" : "bg-muted",
										)}
									/>
								)}

								{/* Step Circle */}
								<motion.div
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.3 }}
									className={cn(
										"w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 bg-background",
										stepStatus === "completed" &&
											"border-primary bg-primary text-primary-foreground",
										stepStatus === "current" && "border-primary bg-primary",
										stepStatus === "upcoming" && "border-muted",
									)}
								>
									{stepStatus === "completed" ? (
										<Check className="w-5 h-5" />
									) : stepStatus === "current" ? (
										<Circle className="w-7 h-7 fill-primary stroke-[1.5] stroke-white" />
									) : (
										<Circle className="w-1 h-1 fill-primary stroke-none" />
									)}
								</motion.div>

								{/* Step Title */}
								<span
									className={cn(
										"mt-2 text-sm text-center",
										stepStatus === "completed" &&
											"text-muted-foreground font-medium",
										stepStatus === "current" && "font-medium",
										stepStatus === "upcoming" && "text-muted-foreground",
									)}
								>
									{step.title}
								</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
