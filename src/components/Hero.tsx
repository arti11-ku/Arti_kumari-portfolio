import React from 'react';
import { ArrowDown, Send, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface HeroProps {
  onViewProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewProjects,
  onContactClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-teal-500/10 dark:bg-teal-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[320px] h-[320px] bg-emerald-500/10 dark:bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Name */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.12]"
            >
              Hi, I'm{' '}
              <span className="text-teal-600 dark:text-teal-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Professional Headline */}
            <h2
              id="hero-subtitle"
              className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mt-4 tracking-tight"
            >
              Computer Science Engineering Student
              <span className="block text-teal-600 dark:text-teal-400 text-lg sm:text-xl font-medium mt-1">
                Building with Python, Web Technologies & Generative AI
              </span>
            </h2>

            {/* Summary */}
            <p
              id="hero-bio"
              className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed max-w-2xl"
            >
              Equipped with a solid foundation in programming and core CS concepts, with active domain focus in Data Science, AI, and practical full-stack solutions. Eager to solve real-world engineering problems through team collaboration and disciplined innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto">
              <button
                id="hero-btn-projects"
                onClick={onViewProjects}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-btn-contact"
                onClick={onContactClick}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-semibold transition flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700"
              >
                <Send className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Direct Social / Fast Links */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  id="hero-link-github"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-link-linkedin"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="hero-link-email"
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                  aria-label="Email Arti"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Frame Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Profile Image Frame Card */}
              <div className="p-3.5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xl shadow-indigo-500/5">
                <ImagePlaceholder
                  id="profile-hero-photo"
                  title="ARTI KUMARI"
                  subtitle="Computer Science Engineering Student"
                  defaultImage={personalInfo.avatarUrl}
                  aspectRatio="1:1"
                  className="rounded-2xl"
                />

                <div className="mt-3.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1">
                  <span>{personalInfo.college.split(',')[0]}</span>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">2023 - 2027</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
