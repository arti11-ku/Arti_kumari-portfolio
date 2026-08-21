import React from 'react';
import { Cloud, BookCheck, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { OfficialCertificatePreview } from './OfficialCertificatePreview';

interface CertificationsProps {
  onImageClick?: (url: string) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onImageClick }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cloud':
        return <Cloud className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'ai':
      case 'learning':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      default:
        return <BookCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  const isOfficialRendered = (id?: string) => {
    if (!id) return false;
    return (
      id === 'cert-secr-railways' ||
      id === 'cert-sih-2025-grand-finale' ||
      id === 'cert-iit-bhilai-uav' ||
      id === 'pw-skills-cert'
    );
  };

  return (
    <section id="certifications" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
            Credentials & Upskilling
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Certifications & Learning
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
            Government credentials, national training certifications, cloud badges, and specialized coursework.
          </p>
          <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs overflow-hidden flex flex-col justify-between hover:border-teal-500/50 transition-all duration-300 group"
            >
              <div>
                {/* Certificate Frame or Credential Header */}
                {!cert.hideImage && cert.imagePlaceholderId && (
                  <div className="p-4 sm:p-5 pb-0">
                    {isOfficialRendered(cert.imagePlaceholderId) ? (
                      <OfficialCertificatePreview
                        id={cert.imagePlaceholderId}
                        title={cert.placeholderTitle || cert.title}
                        onImageClick={onImageClick}
                      />
                    ) : (
                      <ImagePlaceholder
                        id={cert.imagePlaceholderId}
                        title={cert.placeholderTitle || cert.title}
                        subtitle="Drop or upload certificate image"
                        aspectRatio="16:10"
                        onImageClick={onImageClick}
                      />
                    )}
                  </div>
                )}

                {/* Top header accent for cards without images */}
                {cert.hideImage && (
                  <div className="p-6 sm:p-8 pb-0 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80">
                    <div className="flex items-center gap-3 pb-4">
                      <div className="p-2.5 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200/60 dark:border-teal-800/50 text-teal-600 dark:text-teal-400">
                        {getCategoryIcon(cert.category)}
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400 block">
                          {cert.issuer} Verified
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
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    {cert.status === 'pursuing' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 text-amber-700 dark:text-amber-400 text-[11px] font-bold">
                        In Progress
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3">
                    {!cert.hideImage && (
                      <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0 mt-0.5">
                        {getCategoryIcon(cert.category)}
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                        {cert.title}
                      </h4>
                      {cert.badgeCount && (
                        <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-1">
                          {cert.badgeCount}
                        </p>
                      )}
                    </div>
                  </div>

                  {cert.highlights && (
                    <div className="mt-4 space-y-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      {cert.highlights.map((h, i) => (
                        <p key={i} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Open Credential Button Action Row */}
                  {cert.credentialUrl && (
                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        Certificate Document
                      </span>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`open-credential-btn-${cert.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-98 text-white text-xs font-bold shadow-xs hover:shadow-md hover:shadow-teal-600/20 transition-all duration-200 cursor-pointer"
                      >
                        <span>Open Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
