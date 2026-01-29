import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { type RefObject, useRef, useState } from "react";
import { useDebounceCallback, useResizeObserver } from "usehooks-ts";
import { ImageLightbox } from "../lightbox/lightbox";

interface ImageCarouselProps {
	images: string[];
	onDelete?: (index: number) => void;
	onAdd?: (files: File[]) => void;
}

export function ImageCarousel({ images, onDelete, onAdd }: ImageCarouselProps) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [visibleImageCount, setVisibleImageCount] = useState(images.length);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const imageWidth = 72 + 8; // 72px (image) + 8px (gap) = 80px total

	const updateVisibleImages = useDebounceCallback(() => {
		if (containerRef.current) {
			const containerWidth = containerRef.current.offsetWidth;
			const maxImages = Math.floor(containerWidth / imageWidth);
			setVisibleImageCount(maxImages);
		}
	}, 100);

	useResizeObserver({
		ref: containerRef as RefObject<HTMLElement>,
		onResize: updateVisibleImages,
	});

	const hasOverflow = images.length > visibleImageCount;
	const visibleImages = hasOverflow
		? images.slice(0, visibleImageCount - 1)
		: images;

	function handleImageClick(index: number) {
		setCurrentImageIndex(index);
		setLightboxOpen(true);
	}

	function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
		const files = Array.from(event.target.files || []);
		if (files.length > 0 && onAdd) {
			onAdd(files);
			event.target.value = "";
		}
	}

	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="relative w-full" ref={containerRef}>
				<div className="flex overflow-x-auto pb-2 gap-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
					{visibleImages.map((image, index) => (
						<div
							key={image}
							className="relative flex-none cursor-pointer"
							onClick={() => handleImageClick(index)}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleImageClick(index);
								}
							}}
						>
							<div className="w-[72px] h-[72px] bg-white rounded-lg border border-[#ECECF3] overflow-hidden group">
								<img
									src={image}
									alt={`Carousel item ${index + 1}`}
									className="w-full h-full object-cover"
								/>
								{onDelete && (
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											onDelete(index);
										}}
										className="absolute top-1 right-1 w-4 h-4 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
									>
										<X className="w-3 h-3 text-white" />
									</button>
								)}
							</div>
						</div>
					))}
					{hasOverflow && (
						<div
							className="relative flex-none w-[72px] h-[72px] bg-white rounded-lg border border-[#ECECF3] flex items-center justify-center text-sm font-medium cursor-pointer"
							onClick={() => handleImageClick(visibleImageCount - 1)}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleImageClick(visibleImageCount - 1);
								}
							}}
						>
							+{images.length - visibleImageCount + 1}
						</div>
					)}
				</div>
			</div>

			{onAdd && (
				<div className="flex justify-end">
					<input
						ref={fileInputRef}
						type="file"
						accept="image/*"
						multiple
						className="hidden"
						onChange={handleFileSelect}
					/>
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={() => fileInputRef.current?.click()}
						className="text-primary hover:bg-primary/10 hover:text-primary"
					>
						<Plus className="w-4 h-4 mr-1" />
						Add image
					</Button>
				</div>
			)}

			<ImageLightbox
				images={images.map((src) => ({ src, alt: "Carousel item" }))}
				initialIndex={currentImageIndex}
				open={lightboxOpen}
				onOpenChange={setLightboxOpen}
			/>
		</div>
	);
}
