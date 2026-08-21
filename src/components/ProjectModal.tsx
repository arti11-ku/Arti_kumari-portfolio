import React from 'react';
import { X, CheckCircle, Trophy, Layers, Play, ExternalLink, Youtube, GraduationCap, Github } from 'lucide-react';
import { Project } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { DEMO_VIDEO_URL, RESOURCE_CONNECT_GITHUB_URL } from '../data/resourceAllocationScreenshots';
import { SCHOLARSHIP_DEMO_VIDEO_URL, SCHOLARSHIP_GITHUB_URL } from '../data/scholarshipSahayataScreens';
import { ScholarshipSahayataCarousel } from './ScholarshipSahayataCarousel';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onImageClick?: (url: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onImageClick,
}) => {
  if (!project) return null;

  const isSmartResource = project.id === 'smart-resource-allocation' || project.title.toLowerCase().includes('resource');
  const isScholarship = project.id === 'scholarship-sahayata' || project.title.toLowerCase().includes('scholarship');

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/70">
          <div className="flex items-center gap-2">
            {project.hackathonBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-semibold">
                <Trophy className="w-3.5 h-3.5" />
                SIH 2025 Finalist
              </span>
            )}
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              PROJECT DETAIL
            </span>
          </div>

          <button
            id="close-project-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm sm:text-base font-medium text-teal-600 dark:text-teal-400 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Large Image / Carousel preview */}
          {isScholarship ? (
            <div className="rounded-2xl overflow-hidden">
              <ScholarshipSahayataCarousel onImageClick={onImageClick} />
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <ImagePlaceholder
                id={project.imagePlaceholderId}
                title={project.placeholderTitle}
                subtitle="Drop or upload the actual project screenshot here"
                aspectRatio="16:10"
                onImageClick={onImageClick}
              />
            </div>
          )}

          {/* Watch Demo CTA for Scholarship Sahayata (YouTube & GitHub) */}
          {isScholarship && (
            <div className="p-4 rounded-2xl bg-linear-to-r from-red-500/10 via-amber-500/10 to-teal-500/10 border border-red-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h5 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-red-600 fill-current" />
                  YouTube Video Demonstration & GitHub Repository
                </h5>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                  Watch the full walkthrough of Scholarship Sahayata on YouTube or browse the SIH codebase.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={SCHOLARSHIP_DEMO_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition shrink-0"
                >
                  <Youtube className="w-3.5 h-3.5 fill-current" />
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={SCHOLARSHIP_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold text-xs shadow-md transition shrink-0"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>
          )}

          {/* Watch Demo CTA if Smart Resource Allocation */}
          {isSmartResource && (
            <div className="p-4 rounded-2xl bg-linear-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h5 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <Play className="w-4 h-4 text-orange-500 fill-current" />
                  Live System Demonstration & Source Code
                </h5>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                  Watch the walkthrough video on Google Drive or explore the source repository on GitHub.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={DEMO_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition"
                >
                  <span>▶ Watch Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={RESOURCE_CONNECT_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold text-xs shadow-md transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Overview & Objectives
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features List from Resume */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
              Key Features & Architectural Capabilities
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Technologies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200/60 dark:border-teal-800/60 text-teal-700 dark:text-teal-300 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer note regarding links */}
          <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/40 text-xs text-zinc-500 dark:text-zinc-400">
            <strong>Note:</strong> Built as part of academic and hackathon engineering portfolios. Real-world project demonstrations and source repositories can be viewed via GitHub and YouTube.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <a
            href={SCHOLARSHIP_DEMO_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
          >
            <Youtube className="w-3.5 h-3.5 fill-current" />
            <span>Watch Demo on YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
