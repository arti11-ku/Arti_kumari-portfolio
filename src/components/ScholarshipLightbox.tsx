import React, { useEffect, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Upload, 
  ExternalLink,
  GraduationCap,
  Youtube,
  Github
} from 'lucide-react';
import { 
  SCHOLARSHIP_SCREENS, 
  SCHOLARSHIP_DEMO_VIDEO_URL,
  SCHOLARSHIP_GITHUB_URL
} from '../data/scholarshipSahayataScreens';
import { ScholarshipSahayataScreenMock } from './ScholarshipSahayataScreenMock';
import { resolveFirstValidImage } from '../utils/assetResolver';

interface ScholarshipLightboxProps {
  initialIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ScholarshipLightbox: React.FC<ScholarshipLightboxProps> = ({
  initialIndex,
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customImages, setCustomImages] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialIndex !== null) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex]);

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

    if (isOpen) {
      loadScreenshots();
    }

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen || initialIndex === null) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SCHOLARSHIP_SCREENS.length) % SCHOLARSHIP_SCREENS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SCHOLARSHIP_SCREENS.length);
  };

  const currentScreen = SCHOLARSHIP_SCREENS[currentIndex];
  const hasCustomImage = Boolean(customImages[currentScreen.storageKey]);

  return (
    <div
      id="scholarship-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-zinc-950 rounded-3xl border border-teal-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-lg bg-teal-500/20 text-teal-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span>Scholarship Sahayata</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Slide {currentIndex + 1} of 3
                </span>
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="scholarship-lightbox-github-btn"
              href={SCHOLARSHIP_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold shadow-xs border border-zinc-700 transition"
              title="View GitHub Repository"
            >
              <Github className="w-3.5 h-3.5 text-zinc-300" />
              <span className="hidden sm:inline">GitHub</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            <a
              href={SCHOLARSHIP_DEMO_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-xs transition"
            >
              <Youtube className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Watch Demo Video</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Screen Stage */}
        <div className="relative flex-1 bg-zinc-950 p-2 sm:p-4 flex items-center justify-center overflow-hidden min-h-[320px] sm:min-h-[480px]">
          <div className="w-full h-full max-w-4xl aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
            {hasCustomImage ? (
              <img
                src={customImages[currentScreen.storageKey]}
                alt={currentScreen.title}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <ScholarshipSahayataScreenMock screenIndex={currentIndex} isHighRes={true} />
            )}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition shadow-lg hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition shadow-lg hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Info & Thumbnail Strip */}
        <div className="px-5 sm:px-6 py-3 border-t border-zinc-800 bg-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left w-full sm:w-auto">
            <span className="text-[10px] uppercase font-bold tracking-wider text-teal-400 block">
              {currentScreen.badge}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-white">
              {currentScreen.subtitle}
            </p>
          </div>

          {/* Mini Thumbnails */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {SCHOLARSHIP_SCREENS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition border ${
                  currentIndex === idx
                    ? 'bg-teal-600 text-white border-teal-400'
                    : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-white'
                }`}
              >
                Screen {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
