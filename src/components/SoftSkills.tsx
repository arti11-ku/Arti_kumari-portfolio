import React from 'react';
import { MessageSquare, Lightbulb, Zap, Clock, Users } from 'lucide-react';
import { softSkills } from '../data/portfolioData';

const iconMapping: Record<string, React.ElementType> = {
  MessageSquare,
  Lightbulb,
  Zap,
  Clock,
  Users,
};

export const SoftSkills: React.FC = () => {
  return (
    <section id="soft-skills" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            Professional Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Soft Skills & Attributes
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
            Core interpersonal and problem-solving strengths underpinning engineering execution.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Soft Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {softSkills.map((skill, idx) => {
            const Icon = iconMapping[skill.icon] || Users;
            return (
              <div
                key={idx}
                id={`soft-skill-${idx}`}
                className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-indigo-500/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">
                    {skill.title}
                  </h4>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
