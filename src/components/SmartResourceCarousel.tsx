import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight,
  Check
} from 'lucide-react';
import { ScreenshotItem, defaultScreenshots } from '../data/resourceAllocationScreenshots';
import { SmartResourceScreenMock } from './SmartResourceScreenMock';
import { resolveFirstValidImage } from '../utils/assetResolver';

interface SmartResourceCarouselProps {
  onOpenLightbox: (index: number) => void;
  isLightboxOpen?: boolean;
}

export const SmartResourceCarousel: React.FC<SmartResourceCarouselProps> = ({
  onOpenLightbox,
  isLightboxOpen = false,
}) => {
  // Screenshots state initialized from localStorage or defaults
  const [screenshots, setScreenshots] = useState<ScreenshotItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('smart_resource_screenshots');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch {
        // Fallback
      }
    }
    return defaultScreenshots;
  });

  // Resolve static uploaded screenshot assets if available
  useEffect(() => {
    let isMounted = true;

    async function loadStaticScreenshots() {
      const updatedScreenshots = await Promise.all(
        defaultScreenshots.map(async (item, idx) => {
          const indexNum = idx + 1;
          const candidates = [
            `/screenshots/${item.id}.png`,
            `/screenshots/${item.id}.jpg`,
            `/screenshots/${item.id}.jpeg`,
            `/screenshots/${item.id}.webp`,
            `/screenshots/${indexNum}.png`,
            `/screenshots/${indexNum}.jpg`,
            `/screenshots/${indexNum}.jpeg`,
            `/screenshots/${indexNum}.webp`,
            `/screenshots/smart-resource-${indexNum}.png`,
            `/screenshots/smart-resource-${indexNum}.jpg`,
            `/screenshots/resource-${indexNum}.png`,
            `/screenshots/resource-${indexNum}.jpg`,
            `/images/${item.id}.png`,
            `/images/${item.id}.jpg`,
            `/images/${indexNum}.png`,
            `/images/${indexNum}.jpg`,
            `/images/smart-resource-${indexNum}.png`,
            `/images/smart-resource-${indexNum}.jpg`,
            `/assets/${item.id}.png`,
            `/assets/${item.id}.jpg`,
            `/assets/${indexNum}.png`,
            `/assets/${indexNum}.jpg`,
          ];

          let savedFromStorage: string | null = null;
          try {
            const saved = localStorage.getItem('smart_resource_screenshots');
            if (saved) {
              const parsed = JSON.parse(saved);
              const found = parsed.find((p: any) => p.id === item.id);
              if (found?.customImageUrl) savedFromStorage = found.customImageUrl;
            }
          } catch {
            // fallback
          }

          const resolved = await resolveFirstValidImage(candidates, item.customImageUrl || savedFromStorage, item.id);
          if (resolved) {
            return { ...item, customImageUrl: resolved };
          }
          return item;
        })
      );

      if (isMounted) {
        setScreenshots(updatedScreenshots);
      }
    }

    loadStaticScreenshots();

    return () => {
      isMounted = false;
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false);
  const [isManualPause, setIsManualPause] = useState(false);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  // Touch Swipe coordinates
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play timer (3.5 seconds)
  useEffect(() => {
    if (isPaused || isManualPause || isLightboxOpen || screenshots.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, isManualPause, isLightboxOpen, screenshots.length, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle uploading additional or custom project screenshots
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      const newScreenshot: ScreenshotItem = {
        id: `custom-screen-${Date.now()}`,
        title: `Uploaded Screenshot (${screenshots.length + 1})`,
        category: 'Custom Upload',
        description: 'User-uploaded screenshot of the Smart Resource Allocation System.',
        tags: ['Custom Upload', 'Resource Allocation'],
        customImageUrl: base64,
        screenType: 'ngo-dashboard'
      };

      const updated = [...screenshots, newScreenshot];
      setScreenshots(updated);
      setCurrentIndex(updated.length - 1);
      setUploadNotice('Screenshot added to carousel!');
      setTimeout(() => setUploadNotice(null), 3000);

      try {
        localStorage.setItem('smart_resource_screenshots', JSON.stringify(updated));
      } catch {
        // Storage limit protection
      }
    };
    reader.readAsDataURL(file);
  };

  // Reset screenshots back to original 8
  const handleReset = () => {
    setScreenshots(defaultScreenshots);
    setCurrentIndex(0);
    localStorage.removeItem('smart_resource_screenshots');
    setUploadNotice('Reset to original screenshots');
    setTimeout(() => setUploadNotice(null), 3000);
  };

  const currentScreenshot = screenshots[currentIndex] || screenshots[0];

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.35 }
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
      }
    })
  };

  return (
    <div
      id="smart-resource-carousel-container"
      className="relative w-full flex flex-col group/carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Upload Notification Banner */}
      {uploadNotice && (
        <div className="mb-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <Check className="w-3.5 h-3.5" />
          <span>{uploadNotice}</span>
        </div>
      )}

      {/* Main Showcase Frame */}
      <div
        id="carousel-viewport"
        className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-900 shadow-xl shadow-indigo-500/5 overflow-hidden select-none cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => onOpenLightbox(currentIndex)}
      >
        {/* Animated Slide Content */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentScreenshot.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <SmartResourceScreenMock screenshot={currentScreenshot} />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Gradient Overlays for Controls */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />

        {/* Previous Arrow Button */}
        <button
          id="btn-carousel-prev"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-zinc-900/80 hover:bg-indigo-600 text-white border border-zinc-700/80 hover:border-indigo-500 transition-all shadow-lg hover:scale-105 opacity-80 group-hover/carousel:opacity-100"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Arrow Button */}
        <button
          id="btn-carousel-next"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-zinc-900/80 hover:bg-indigo-600 text-white border border-zinc-700/80 hover:border-indigo-500 transition-all shadow-lg hover:scale-105 opacity-80 group-hover/carousel:opacity-100"
          aria-label="Next screenshot"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Bottom Bar: Title & Index */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <div className="max-w-[75%] px-3 py-1.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 text-white shadow-md">
            <h4 className="font-bold text-xs sm:text-sm tracking-tight truncate">
              {currentScreenshot.title}
            </h4>
            <p className="text-[10px] text-zinc-400 truncate hidden sm:block">
              {currentScreenshot.description}
            </p>
          </div>

          <div className="px-2.5 py-1 rounded-lg bg-zinc-900/85 backdrop-blur-md border border-zinc-700/60 text-white text-[11px] font-bold">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </div>
      </div>

      {/* Controls & Pagination Area */}
      <div className="mt-4 flex items-center justify-center gap-3 px-1">
        {/* Pagination Dots */}
        <div
          id="carousel-pagination-dots"
          className="flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800"
        >
          {screenshots.map((item, idx) => (
            <button
              key={item.id}
              id={`carousel-dot-${idx}`}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-7 bg-indigo-600 dark:bg-indigo-500 shadow-xs'
                  : 'w-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-indigo-400'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${item.title}`}
              title={item.title}
            />
          ))}
        </div>
      </div>

      {/* Mini Thumbnail Ribbon */}
      <div className="mt-3.5 flex items-center gap-2 overflow-x-auto pb-1 px-1 scrollbar-thin">
        {screenshots.map((s, idx) => (
          <div
            key={s.id}
            role="button"
            tabIndex={0}
            id={`thumbnail-btn-${idx}`}
            onClick={() => goToSlide(idx)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToSlide(idx);
              }
            }}
            className={`relative shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
              idx === currentIndex
                ? 'border-indigo-600 dark:border-indigo-400 scale-105 shadow-md shadow-indigo-500/20'
                : 'border-transparent opacity-60 hover:opacity-100 hover:border-zinc-400'
            }`}
            title={s.title}
          >
            <SmartResourceScreenMock screenshot={s} className="pointer-events-none scale-75 origin-top-left w-[133%] h-[133%]" />
          </div>
        ))}
      </div>
    </div>
  );
};
