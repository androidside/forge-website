"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { cn } from "@/lib/utils";
import {
	ChevronLeft,
	ChevronRight,
	Download,
	Minus,
	Plus,
	Share2,
	X,
} from "lucide-react";
import * as React from "react";

interface Image {
	src: string;
	alt: string;
}

interface ImageLightboxProps {
	images: Image[];
	initialIndex: number;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function ImageLightbox({
	images,
	initialIndex,
	open,
	onOpenChange,
}: ImageLightboxProps) {
	const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
	const [scale, setScale] = React.useState(1);
	const [showControls, setShowControls] = React.useState(true);
	const controlsTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

	React.useEffect(() => {
		setCurrentIndex(initialIndex);
	}, [initialIndex]);

	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				handlePrevious();
			} else if (e.key === "ArrowRight") {
				handleNext();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	React.useEffect(() => {
		const handleMouseMove = () => {
			setShowControls(true);
			if (controlsTimeoutRef.current) {
				clearTimeout(controlsTimeoutRef.current);
			}
			controlsTimeoutRef.current = setTimeout(() => {
				setShowControls(false);
			}, 3000);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const currentImage = images[currentIndex] || { src: "", alt: "" };
	const fileName = currentImage.src
		? currentImage.src.split("/").pop() || "image"
		: "No image";

	const handlePrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
		setScale(1);
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
		setScale(1);
	};

	const handleZoomIn = () => {
		setScale((prev) => Math.min(prev + 0.1, 3));
	};

	const handleZoomOut = () => {
		setScale((prev) => Math.max(prev - 0.1, 0.1));
	};

	const handleThumbnailClick = (index: number) => {
		setCurrentIndex(index);
		setScale(1);
	};

	async function downloadImage(imageUrl: string, fileName: string) {
		try {
			const response = await fetch(imageUrl);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const blob = await response.blob();

			const blobUrl = window.URL.createObjectURL(blob);

			const link = document.createElement("a");
			link.href = blobUrl;

			link.download = fileName || "image";

			document.body.appendChild(link);

			link.click();

			document.body.removeChild(link);
		} catch (error) {
			console.error("Error downloading image:", error);
		}
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				className="max-w-[100vw] max-h-[100vh] h-[100vh] p-0 border-none bg-black/90"
				style={{ zIndex: 1400 }}
			>
				<DialogTitle>
					<VisuallyHidden>Image Lightbox</VisuallyHidden>
				</DialogTitle>
				<div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-background/80 backdrop-blur-sm z-50">
					<div className="text-sm text-muted-foreground">{fileName}</div>
					<div className="flex items-center gap-2">
						<span className="text-sm text-muted-foreground">
							{Math.round(scale * 100)}%
						</span>
						<Button
							variant="ghost"
							size="icon"
							onClick={handleZoomOut}
							disabled={scale <= 0.1}
						>
							<Minus className="h-4 w-4" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={handleZoomIn}
							disabled={scale >= 3}
						>
							<Plus className="h-4 w-4" />
						</Button>
					</div>
					<div className="flex items-center gap-2">
						<Button variant="ghost" size="icon" onClick={() => {}}>
							<Share2 className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" asChild>
							<a
								href={currentImage.src}
								download={fileName}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									downloadImage(currentImage.src, fileName);
								}}
							>
								<Download className="h-4 w-4" />
							</a>
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => onOpenChange(false)}
						>
							<X className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div className="absolute inset-0 flex items-center justify-center mt-12 mb-20">
					<div className="relative w-full h-full flex items-center justify-center">
						<Button
							variant="ghost"
							size="icon"
							className={cn(
								"absolute left-4 z-10 bg-background/80 hover:bg-background/90 transition-opacity duration-300",
								showControls ? "opacity-100" : "opacity-0",
							)}
							onClick={handlePrevious}
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>

						<div className="relative max-w-full max-h-full flex items-center justify-center">
							<img
								src={currentImage.src}
								alt={currentImage.alt}
								className={cn(
									"max-w-full max-h-[calc(100vh-8rem)] object-contain transition-transform duration-200",
									scale !== 1 && "cursor-grab active:cursor-grabbing",
								)}
								style={{
									transform: `scale(${scale})`,
								}}
							/>
						</div>

						<Button
							variant="ghost"
							size="icon"
							className={cn(
								"absolute right-4 z-10 bg-background/80 hover:bg-background/90 transition-opacity duration-300",
								showControls ? "opacity-100" : "opacity-0",
							)}
							onClick={handleNext}
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 bg-background-transparent backdrop-blur-sm">
					<div className="flex space-x-2 overflow-x-auto">
						{images.map((image, index) => (
							<Button
								key={image.src}
								variant="ghost"
								className={cn(
									"w-16 h-16 p-0 overflow-hidden",
									index === currentIndex
										? "opacity-100 ring-2"
										: "opacity-50 hover:opacity-75",
								)}
								onClick={() => handleThumbnailClick(index)}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="w-full h-full object-cover"
								/>
							</Button>
						))}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
