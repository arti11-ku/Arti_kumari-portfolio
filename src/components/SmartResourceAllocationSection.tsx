import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  ExternalLink, 
  CheckCircle2, 
  Share2, 
  Activity, 
  CheckSquare, 
  BarChart3, 
  Clock, 
  Sliders, 
  Flame, 
  TrendingUp, 
  Layers, 
  Code2, 
  Database, 
  Sparkles,
  Maximize2,
  Github
} from 'lucide-react';
import { SmartResourceCarousel } from './SmartResourceCarousel';
import { SmartResourceLightbox } from './SmartResourceLightbox';
import { 
  DEMO_VIDEO_URL, 
  RESOURCE_CONNECT_GITHUB_URL,
  RESUME_KEY_AREAS, 
  defaultScreenshots, 
  ScreenshotItem 
} from '../data/resourceAllocationScreenshots';
import { resolveFirstValidImage } from '../utils/assetResolver';

interface SmartResourceAllocationSectionProps {
  onCustomImageClick?: (url: string) => void;
}

export const SmartResourceAllocationSection: React.FC<SmartResourceAllocationSectionProps> = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [activeScreenshots, setActiveScreenshots] = useState<ScreenshotItem[]>(() => {
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
        setActiveScreenshots(updatedScreenshots);
      }
    }

    loadStaticScreenshots();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleOpenLightbox = (index: number) => {
    // Refresh screenshots list from storage if modified
    try {
      const saved = localStorage.getItem('smart_resource_screenshots');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setActiveScreenshots(parsed);
        }
      }
    } catch {
      // Fallback
    }
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Share2':
        return <Share2 className="w-4 h-4 text-indigo-500" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-emerald-500" />;
      case 'CheckSquare':
        return <CheckSquare className="w-4 h-4 text-blue-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4 text-purple-500" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-amber-500" />;
      case 'Sliders':
        return <Sliders className="w-4 h-4 text-cyan-500" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-rose-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-teal-500" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-b from-white via-zinc-50/70 to-white dark:from-zinc-950 dark:via-zinc-900/40 dark:to-zinc-950 border-y border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-zinc-50 tracking-tight">
            Smart Resource Allocation System
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            A web-based system engineered to efficiently allocate and manage organizational resources based on availability, requirements, and priorities.
          </p>

          <div className="w-16 h-1 bg-linear-to-r from-indigo-600 to-amber-500 mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Main Presentation Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-4 sm:p-7 lg:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xl shadow-zinc-900/5 hover:border-indigo-500/40 transition-all duration-300"
        >
          {/* Mobile Title (shown only on mobile before the carousel) */}
          <div className="block lg:hidden mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 text-xs font-bold">
                Resource & Task Platform
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-50">
              Smart Resource Allocation System
            </h3>
          </div>

          {/* Responsive 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Side: Screenshot Carousel Area */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Carousel Component */}
              <SmartResourceCarousel
                onOpenLightbox={handleOpenLightbox}
                isLightboxOpen={lightboxOpen}
              />
            </div>

            {/* Right Side: Project Information & Resume-Supported Content */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Header Badges & Title (Desktop) */}
              <div>
                <div className="hidden lg:flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 text-xs font-bold shadow-2xs">
                    <Layers className="w-3.5 h-3.5" />
                    Resource & Task Platform
                  </span>
                </div>

                <h3 className="hidden lg:block text-2xl xl:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight">
                  Smart Resource Allocation System
                </h3>

                {/* Short Resume Description */}
                <blockquote className="mt-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border-l-4 border-indigo-600 dark:border-indigo-500 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  "Developed a web-based system to efficiently allocate and manage organizational resources based on availability, requirements, and priorities."
                </blockquote>

                <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  "Designed dashboards for resource tracking, task management, and monitoring allocation status to improve utilization and operational efficiency."
                </p>
              </div>

              {/* Key Resume-Supported Areas (8 Areas) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Core Functional Pillars (Resume Supported)
                  </h4>
                  <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                    8 Key Areas
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {RESUME_KEY_AREAS.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-500/40 transition-colors flex items-start gap-2.5 group"
                    >
                      <div className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                        {getIcon(area.iconName)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {area.title}
                        </div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 leading-snug">
                          {area.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                  Technology Stack
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                    <Code2 className="w-3.5 h-3.5" />
                    Python
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                    <Database className="w-3.5 h-3.5" />
                    MySQL / SQL
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    Web Technologies (HTML, CSS, JS)
                  </span>
                </div>
              </div>

              {/* Call-to-Action & Demo Video Area */}
              <div className="pt-5 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary Watch Demo Button */}
                <a
                  id="btn-watch-smart-resource-demo"
                  href={DEMO_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-linear-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white text-sm font-extrabold shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
                  title="Watch Smart Resource Allocation System Demo Video on Google Drive"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 text-white fill-current translate-x-0.5" />
                  </div>
                  <span>▶ Watch Demo</span>
                </a>

                {/* GitHub Repository Link Button */}
                <a
                  id="btn-smart-resource-github"
                  href={RESOURCE_CONNECT_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white text-xs sm:text-sm font-bold border border-zinc-800 dark:border-zinc-700 shadow-md hover:-translate-y-0.5 transition-all"
                  title="View Resource-Connect Source Code on GitHub"
                >
                  <Github className="w-4 h-4 text-zinc-200" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                {/* Lightbox Trigger */}
                <button
                  id="btn-open-lightbox-cta"
                  onClick={() => handleOpenLightbox(0)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-bold border border-indigo-200 dark:border-indigo-800 transition"
                  title="Explore all 8 screenshots in fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Gallery</span>
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <SmartResourceLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={activeScreenshots}
        currentIndex={lightboxIndex}
        onIndexChange={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
