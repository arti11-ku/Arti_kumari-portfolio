import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { 
  SCHOLARSHIP_SCREENS
} from '../data/scholarshipSahayataScreens';
import { ScholarshipSahayataScreenMock } from './ScholarshipSahayataScreenMock';
import { resolveFirstValidImage, saveImageToServer } from '../utils/assetResolver';

interface ScholarshipSahayataCarouselProps {
  onImageClick?: (url: string) => void;
  onOpenLightbox?: (screenIndex: number) => void;
}

export const ScholarshipSahayataCarousel: React.FC<ScholarshipSahayataCarouselProps> = ({
  onImageClick,
  onOpenLightbox
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<number>(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Load custom user uploads & static assets
  useEffect(() => {
    let isMounted = true;

    async function loadScreenshots() {
      const loaded: Record<string, string> = {};

      for (let i = 0; i < SCHOLARSHIP_SCREENS.length; i++) {
        const screen = SCHOLARSHIP_SCREENS[i];
        const screenNum = i + 1;
        const candidates = [
          `/screenshots/${screen.storageKey}.png`,
          `/screenshots/${screen.storageKey}.jpg`,
          `/screenshots/${screen.storageKey}.jpeg`,
          `/screenshots/${screen.storageKey}.webp`,
          `/screenshots/scholarship-${screenNum}.png`,
          `/screenshots/scholarship-${screenNum}.jpg`,
          `/screenshots/scholarship-${screenNum}.jpeg`,
          `/screenshots/scholarship-${screenNum}.webp`,
          `/screenshots/scholarship-${screen.id}.png`,
          `/screenshots/scholarship-${screen.id}.jpg`,
          `/images/scholarship-${screenNum}.png`,
          `/images/scholarship-${screenNum}.jpg`,
          `/images/${screen.storageKey}.png`,
          `/images/${screen.storageKey}.jpg`,
          `/assets/scholarship-${screenNum}.png`,
          `/assets/scholarship-${screenNum}.jpg`,
          `/${screen.storageKey}.png`,
          `/${screen.storageKey}.jpg`
        ];

        let saved: string | null = null;
        try {
          saved = localStorage.getItem(`custom_${screen.storageKey}`);
        } catch {
          // fallback
        }

        const resolved = await resolveFirstValidImage(candidates, saved, screen.storageKey);
        if (resolved) {
          loaded[screen.storageKey] = resolved;
        }
      }

      if (isMounted) {
        setCustomImages(loaded);
      }
    }

    loadScreenshots();

    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-advance timer (every 4 seconds) when not paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % SCHOLARSHIP_SCREENS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SCHOLARSHIP_SCREENS.length) % SCHOLARSHIP_SCREENS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SCHOLARSHIP_SCREENS.length);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const currentScreen = SCHOLARSHIP_SCREENS[currentIndex];
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCustomImages((prev) => ({
        ...prev,
        [currentScreen.storageKey]: result
      }));
      try {
        localStorage.setItem(`custom_${currentScreen.storageKey}`, result);
      } catch {
        // Fallback in memory
      }
      saveImageToServer(currentScreen.storageKey, result);
    };
    reader.readAsDataURL(file);
  };

  const clearCurrentCustomImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentScreen = SCHOLARSHIP_SCREENS[currentIndex];
    setCustomImages((prev) => {
      const updated = { ...prev };
      delete updated[currentScreen.storageKey];
      return updated;
    });
    localStorage.removeItem(`custom_${currentScreen.storageKey}`);
  };

  const currentScreen = SCHOLARSHIP_SCREENS[currentIndex];
  const hasCustomImage = Boolean(customImages[currentScreen.storageKey]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <div 
      id="scholarship-sahayata-carousel-wrapper"
      className="w-full flex flex-col space-y-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hidden File Input for Screen Uploads */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Main Slide Stage */}
      <div
        className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden bg-zinc-900 border border-teal-500/30 shadow-xl group/stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Slide Container */}
        <div className="w-full h-full relative cursor-pointer" onClick={() => onOpenLightbox ? onOpenLightbox(currentIndex) : null}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {hasCustomImage ? (
                <img
                  src={customImages[currentScreen.storageKey]}
                  alt={currentScreen.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <ScholarshipSahayataScreenMock screenIndex={currentIndex} isHighRes={false} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous screen"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white border border-white/10 flex items-center justify-center transition opacity-80 group-hover/stage:opacity-100 hover:scale-110 shadow-lg z-20 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next screen"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white border border-white/10 flex items-center justify-center transition opacity-80 group-hover/stage:opacity-100 hover:scale-110 shadow-lg z-20 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Pagination Dots */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-20">
          {SCHOLARSHIP_SCREENS.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-6 bg-teal-400'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
