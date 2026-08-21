import React from 'react';
import { BookOpen, Code, BrainCircuit, Users, CheckCircle2, TrendingUp } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Strong Technical Core",
      desc: "Grounded in Python programming, relational SQL database structures, and semantic web development."
    },
    {
      icon: BrainCircuit,
      title: "Data Science & GenAI",
      desc: "Actively pursuing Data Science with Generative AI via PW Skills and 20+ Google Cloud skill badges."
    },
    {
      icon: Users,
      title: "Team-Driven Innovation",
      desc: "Proven execution in high-stakes collaborative environments, notably as a Smart India Hackathon 2025 Finalist."
    },
    {
      icon: TrendingUp,
      title: "Continuous Industry Awareness",
      desc: "Engaged participant in DevFest 2025, Indian Railways vocational training, and proactive GitHub code sharing."
    }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            Background & Profile
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            About Arti Kumari
          </h3>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Summary Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Engineering Journey & Focus
              </h4>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              I am an aspiring Computer Science engineer currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering at <strong>Shri Shankaracharya Technical Campus, Bhilai</strong> (2023–2027), maintaining a consistent academic record of <strong>8+ CGPA</strong>.
            </p>

            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              My technical foundation is built on programming fundamentals in <strong>Python</strong> and <strong>SQL</strong>, complemented by modern web technologies. I have a deep interest in exploring <strong>Data Science</strong> and <strong>Generative Artificial Intelligence</strong>, constantly building practical solutions and sharing my learning through GitHub and tech communities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Class XII (AISSCE): <strong>88.4%</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Class X (AISSE): <strong>89%</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>SIH 2025 National Finalist</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>20+ Google Cloud Skill Badges</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                id={`stat-card-${idx}`}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-indigo-500/50 transition-colors"
              >
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </span>
                <div className="my-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={`about-pillar-${idx}`}
                className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/60 hover:-translate-y-0.5 transition-all duration-300 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h5>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
