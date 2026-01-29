import { useEffect, useRef } from "react";

interface SwipeConfig {
	onSwipeLeft?: () => void;
	onSwipeRight?: () => void;
	threshold?: number;
	edgeThreshold?: number;
	preventDefaultTouchmove?: boolean;
}

export const useSwipe = (config: SwipeConfig) => {
	const {
		onSwipeLeft,
		onSwipeRight,
		threshold = 100,
		edgeThreshold = 50,
		preventDefaultTouchmove = false,
	} = config;

	const touchStart = useRef<{ x: number; y: number; time: number } | null>(
		null,
	);
	const touchEnd = useRef<{ x: number; y: number; time: number } | null>(null);

	useEffect(() => {
		const handleTouchStart = (e: TouchEvent) => {
			const touch = e.touches[0];
			touchStart.current = {
				x: touch.clientX,
				y: touch.clientY,
				time: Date.now(),
			};
			touchEnd.current = null;
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (preventDefaultTouchmove) {
				e.preventDefault();
			}
		};

		const handleTouchEnd = (e: TouchEvent) => {
			if (!touchStart.current) return;

			const touch = e.changedTouches[0];
			touchEnd.current = {
				x: touch.clientX,
				y: touch.clientY,
				time: Date.now(),
			};

			const deltaX = touchEnd.current.x - touchStart.current.x;
			const deltaY = touchEnd.current.y - touchStart.current.y;
			const deltaTime = touchEnd.current.time - touchStart.current.time;

			// Check if the gesture is primarily horizontal and fast enough
			const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
			const isSwipeFastEnough = deltaTime < 500; // Max 500ms for swipe
			const isSwipeLongEnough = Math.abs(deltaX) > threshold;

			// Check if swipe started from the right edge (for opening menu)
			const screenWidth = window.innerWidth;
			const startedFromRightEdge =
				touchStart.current.x > screenWidth - edgeThreshold;

			if (isHorizontalSwipe && isSwipeFastEnough && isSwipeLongEnough) {
				if (deltaX > 0 && onSwipeRight) {
					// Swiping right (left to right)
					onSwipeRight();
				} else if (deltaX < 0 && onSwipeLeft && startedFromRightEdge) {
					// Swiping left from right edge (right to left) - this opens the menu
					onSwipeLeft();
				}
			}

			touchStart.current = null;
			touchEnd.current = null;
		};

		// Add event listeners
		document.addEventListener("touchstart", handleTouchStart, {
			passive: true,
		});
		document.addEventListener("touchmove", handleTouchMove, {
			passive: !preventDefaultTouchmove,
		});
		document.addEventListener("touchend", handleTouchEnd, { passive: true });

		// Cleanup
		return () => {
			document.removeEventListener("touchstart", handleTouchStart);
			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("touchend", handleTouchEnd);
		};
	}, [
		onSwipeLeft,
		onSwipeRight,
		threshold,
		edgeThreshold,
		preventDefaultTouchmove,
	]);
};
