import React, { useState } from 'react';
import {
  Code2,
  Database,
  FileCode,
  Palette,
  Sparkles,
  GitBranch,
  Terminal,
  Bot,
  Cpu,
  Layers,
  GraduationCap
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Database,
  FileCode,
  Palette,
  Sparkles,
  GitBranch,
  Terminal,
  Bot,
  Cpu
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'web' | 'tools' | 'ai'>('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.categoryKey === activeTab);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            Technical Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Skills & Technologies
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
            Core programming languages, web technologies, developer tooling, and applied AI workflows.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            id="skill-filter-all"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            All Skills
          </button>
          <button
            id="skill-filter-programming"
            onClick={() => setActiveTab('programming')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'programming'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Programming
          </button>
          <button
            id="skill-filter-web"
            onClick={() => setActiveTab('web')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'web'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Web Technologies
          </button>
          <button
            id="skill-filter-tools"
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'tools'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Tools & Platforms
          </button>
          <button
            id="skill-filter-ai"
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'ai'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            AI & Automation
          </button>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.categoryKey}
              id={`skill-group-${group.categoryKey}`}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100">
                  {group.title}
                </h4>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, idx) => {
                  const IconComp = iconMap[skill.iconName] || Code2;
                  return (
                    <div
                      key={idx}
                      id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="group p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500/50 hover:bg-indigo-50/20 dark:hover:bg-indigo-950/20 transition-all duration-200 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-110 group-hover:border-indigo-400 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 tracking-tight">
                          {skill.name}
                        </h5>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey Banner */}
        <div
          id="additional-learning-banner"
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-indigo-900 via-indigo-950 to-zinc-950 text-white border border-indigo-800/50 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                Continuous Learning & Expansion
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                Data Science with Generative AI — PW Skills
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
                Currently pursuing in-depth coursework covering Python for data analysis, machine learning foundations, and modern Generative AI paradigms.
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold whitespace-nowrap self-start sm:self-center">
            In Progress
          </div>
        </div>

      </div>
    </section>
  );
};
