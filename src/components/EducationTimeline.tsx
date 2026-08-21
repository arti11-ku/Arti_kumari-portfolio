import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            Academic Background
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Education Timeline
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
            Academic qualifications and scholastic milestones in Computer Science & Engineering.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Component */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central bar */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-linear-to-b from-indigo-500 via-indigo-300 to-zinc-300 dark:from-indigo-500 dark:via-indigo-800 dark:to-zinc-800" />

          <div className="space-y-8">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                id={`education-card-${idx}`}
                className="relative flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Milestone Node */}
                <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-indigo-500 items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md shadow-indigo-500/10 shrink-0 z-10 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-indigo-500/50 transition-all duration-200">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold w-fit">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.scoreLabel}: {edu.score}</span>
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {edu.degree}
                  </h4>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {edu.institution}
                    </span>
                    <span className="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
