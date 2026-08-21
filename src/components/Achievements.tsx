import React from 'react';
import { Trophy, Mic, Train, Sparkles, Plane, ExternalLink, ShieldCheck } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { OfficialCertificatePreview } from './OfficialCertificatePreview';

interface AchievementsProps {
  onImageClick?: (url: string) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onImageClick }) => {
  const getIcon = (id: string) => {
    if (id.includes('sih')) return <Trophy className="w-5 h-5 text-amber-500" />;
    if (id.includes('uav')) return <Plane className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    if (id.includes('devfest')) return <Mic className="w-5 h-5 text-indigo-500" />;
    return <Train className="w-5 h-5 text-emerald-500" />;
  };

  const isOfficialRendered = (id?: string) => {
    if (!id) return false;
    return (
      id === 'cert-secr-railways' ||
      id === 'cert-sih-2025-grand-finale' ||
      id === 'cert-iit-bhilai-uav'
    );
  };

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
            Hackathons & Industrial Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Extracurricular & Achievements
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
            National hackathon milestones, Government/IIT bootcamps, and industrial vocational training.
          </p>
          <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs overflow-hidden flex flex-col justify-between hover:border-teal-500/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Visual Certificate Frame (only if hideImage is false) */}
                {!item.hideImage && item.imagePlaceholderId && (
                  <div className="p-4 sm:p-5 pb-0">
                    {isOfficialRendered(item.imagePlaceholderId) ? (
                      <OfficialCertificatePreview
                        id={item.imagePlaceholderId}
                        title={item.placeholderTitle || item.title}
                        onImageClick={onImageClick}
                      />
                    ) : (
                      <ImagePlaceholder
                        id={item.imagePlaceholderId}
                        title={item.placeholderTitle || item.title}
                        subtitle="Drop or upload photo/certificate"
                        aspectRatio="16:10"
                        onImageClick={onImageClick}
                      />
                    )}
                  </div>
                )}

                {/* Top header accent for cards without images */}
                {item.hideImage && (
                  <div className="p-6 sm:p-8 pb-0 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80">
                    <div className="flex items-center gap-3 pb-4">
                      <div className="p-2.5 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200/60 dark:border-teal-800/50">
                        {getIcon(item.id)}
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400 block">
                          {item.category}
                        </span>
                        <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 flex items-center gap-1 mt-0.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                          Authenticated Document
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-md">
                      <Sparkles className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    {!item.hideImage && (
                      <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                        {getIcon(item.id)}
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    {item.description}
                  </p>

                  {/* Open Credential Button Action Row */}
                  {item.credentialUrl && (
                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        Certificate Document
                      </span>
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`open-credential-achievement-${item.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-98 text-white text-xs font-bold shadow-xs hover:shadow-md hover:shadow-teal-600/20 transition-all duration-200 cursor-pointer"
                      >
                        <span>Open Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Badge Footer */}
              <div className="px-6 sm:px-8 py-3.5 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
