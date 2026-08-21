import React, { useState } from 'react';
import { 
  Trophy, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2,
  Github,
  Youtube
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ScholarshipSahayataCarousel } from './ScholarshipSahayataCarousel';
import { ScholarshipLightbox } from './ScholarshipLightbox';
import { SCHOLARSHIP_GITHUB_URL, SCHOLARSHIP_DEMO_VIDEO_URL } from '../data/scholarshipSahayataScreens';

interface ProjectsProps {
  onImageClick?: (url: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onImageClick }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scholarshipLightboxIndex, setScholarshipLightboxIndex] = useState<number | null>(null);

  const scholarshipProject = projects.find(p => p.id === 'scholarship-sahayata') || projects[0];

  return (
    <section id="scholarship-sahayata-project" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold mb-3 shadow-xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>Smart India Hackathon (SIH) 2025 Finalist</span>
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
            Featured Innovation & Hackathon Project
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Scholarship Sahayata
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
            An AI-powered Direct Benefit Transfer (DBT) awareness and scholarship assistance platform built to simplify educational funding navigation for students nationwide.
          </p>
          <div className="w-12 h-1 bg-teal-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Main Showcase Card (Two-column layout) */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Interactive Screenshot Carousel (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-zinc-50/70 dark:bg-zinc-950/60 border-b lg:border-b-0 lg:border-r border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between">
              <div>
                {/* 3-Screen Carousel */}
                <ScholarshipSahayataCarousel
                  onImageClick={onImageClick}
                  onOpenLightbox={(idx) => setScholarshipLightboxIndex(idx)}
                />
              </div>

              {/* Quick Actions & Demo Links */}
              <div className="pt-5 mt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    id="scholarship-github-btn"
                    href={SCHOLARSHIP_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white text-xs font-bold border border-zinc-800 dark:border-zinc-700 shadow-md transition group cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-zinc-300" />
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition" />
                  </a>

                  <a
                    id="scholarship-video-btn"
                    href={SCHOLARSHIP_DEMO_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md shadow-red-600/20 transition group cursor-pointer"
                  >
                    <Youtube className="w-4 h-4 fill-current" />
                    <span>Watch Video</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Project Specifications & Resume Details (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Title */}
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {scholarshipProject.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1">
                    {scholarshipProject.subtitle}
                  </p>
                </div>

                {/* Resume Summary */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {scholarshipProject.description}
                </p>

                {/* Core Capabilities */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                    Core Platform Capabilities
                  </h5>
                  <div className="space-y-2">
                    {scholarshipProject.keyFeatures.slice(0, 4).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Technology Stack
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {scholarshipProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Full Specs Action */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-start">
                <button
                  id="btn-open-modal-scholarship-sahayata"
                  onClick={() => setSelectedProject(scholarshipProject)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold hover:bg-zinc-800 dark:hover:bg-white transition cursor-pointer"
                >
                  <span>View Full System Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onImageClick={onImageClick}
      />

      {/* Scholarship Lightbox */}
      <ScholarshipLightbox
        initialIndex={scholarshipLightboxIndex}
        isOpen={scholarshipLightboxIndex !== null}
        onClose={() => setScholarshipLightboxIndex(null)}
      />
    </section>
  );
};

