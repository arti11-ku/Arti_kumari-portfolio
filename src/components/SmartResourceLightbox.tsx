import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Play, ZoomIn, Github } from 'lucide-react';
import { ScreenshotItem, DEMO_VIDEO_URL, RESOURCE_CONNECT_GITHUB_URL } from '../data/resourceAllocationScreenshots';
import { SmartResourceScreenMock } from './SmartResourceScreenMock';

interface SmartResourceLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ScreenshotItem[];
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
}

export const SmartResourceLightbox: React.FC<SmartResourceLightboxProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onIndexChange,
}) => {
  const currentScreenshot = screenshots[currentIndex] || screenshots[0];

  const handleNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % screenshots.length);
  }, [currentIndex, screenshots.length, onIndexChange]);

  const handlePrev = useCallback(() => {
    onIndexChange((currentIndex - 1 + screenshots.length) % screenshots.length);
  }, [currentIndex, screenshots.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="smart-resource-lightbox"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in select-none"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div
          className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Screenshot Title & Index */}
          <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-700/60 rounded-xl px-4 py-2 text-white pointer-events-auto backdrop-blur-md shadow-lg">
            <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-xs font-bold">
              {currentIndex + 1} / {screenshots.length}
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-xs sm:text-sm tracking-tight">{currentScreenshot.title}</span>
              <span className="text-[10px] text-zinc-400 font-medium">{currentScreenshot.category}</span>
            </div>
          </div>

          {/* Actions: Demo Video, GitHub & Close */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <a
              id="lightbox-github-btn"
              href={RESOURCE_CONNECT_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition shadow-lg border border-zinc-700/80"
              title="View Source on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              id="lightbox-demo-btn"
              href={DEMO_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition shadow-lg"
              title="Watch Demo Video on Google Drive"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Watch Demo</span>
            </a>

            <button
              id="btn-close-lightbox"
              onClick={onClose}
              className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-700/60 text-zinc-200 hover:text-white hover:bg-zinc-800 transition backdrop-blur-md"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Button */}
        <button
          id="btn-lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-indigo-600 text-white border border-zinc-700/80 hover:border-indigo-500 transition shadow-xl group"
          aria-label="Previous Screenshot"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          id="btn-lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-indigo-600 text-white border border-zinc-700/80 hover:border-indigo-500 transition shadow-xl group"
          aria-label="Next Screenshot"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Main High-Res Screen Stage */}
        <motion.div
          key={currentScreenshot.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative max-w-6xl w-full max-h-[80vh] aspect-[16/10] bg-zinc-900 rounded-2xl border border-zinc-700/80 shadow-2xl overflow-hidden flex items-center justify-center p-1 sm:p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full h-full rounded-xl overflow-hidden border border-zinc-800">
            <SmartResourceScreenMock screenshot={currentScreenshot} isHighRes={true} />
          </div>
        </motion.div>

        {/* Bottom Navigation Strip & Description */}
        <div
          className="absolute bottom-4 left-4 right-4 z-50 flex flex-col items-center gap-2 pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Caption text */}
          <div className="max-w-2xl text-center px-4 py-2 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-zinc-300 text-xs sm:text-sm font-medium backdrop-blur-md pointer-events-auto">
            {currentScreenshot.description}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-700/60 pointer-events-auto backdrop-blur-md">
            {screenshots.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => onIndexChange(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-6 bg-indigo-500'
                    : 'w-2 bg-zinc-600 hover:bg-zinc-400'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
