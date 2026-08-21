import React, { useState, useEffect } from 'react';
import { Award, Eye, Upload, CheckCircle2, ShieldCheck, ExternalLink, X } from 'lucide-react';
import { resolveFirstValidImage, saveImageToServer } from '../utils/assetResolver';

interface OfficialCertificatePreviewProps {
  id: string;
  title: string;
  onImageClick?: (url: string) => void;
  className?: string;
}

export const OfficialCertificatePreview: React.FC<OfficialCertificatePreviewProps> = ({
  id,
  title,
  onImageClick,
  className = '',
}) => {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadCertificate() {
      const candidates = [
        `/certificates/${id}.png`,
        `/certificates/${id}.jpg`,
        `/certificates/${id}.jpeg`,
        `/certificates/${id}.webp`,
        `/certificates/${id}.svg`,
        `/images/${id}.png`,
        `/images/${id}.jpg`,
        `/images/${id}.jpeg`,
        `/images/${id}.webp`,
        `/assets/${id}.png`,
        `/assets/${id}.jpg`,
        `/${id}.png`,
        `/${id}.jpg`
      ];

      let saved: string | null = null;
      try {
        saved = localStorage.getItem(`portfolio_img_${id}`);
      } catch {}

      const resolved = await resolveFirstValidImage(candidates, saved, id);
      if (isMounted && resolved) {
        setCustomImage(resolved);
      }
    }

    loadCertificate();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setCustomImage(result);
        try {
          localStorage.setItem(`portfolio_img_${id}`, result);
        } catch {}
        saveImageToServer(id, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    localStorage.removeItem(`portfolio_img_${id}`);
  };

  // If user uploaded their scan, render the uploaded image directly with hover controls
  if (customImage) {
    return (
      <div
        className={`relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-teal-500/40 bg-zinc-900 group ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={customImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center gap-3 transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {onImageClick && (
            <button
              onClick={() => onImageClick(customImage)}
              className="px-3 py-1.5 rounded-lg bg-zinc-800/90 text-zinc-100 text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-700 transition"
            >
              <Eye className="w-3.5 h-3.5" />
              View Full
            </button>
          )}
          <button
            onClick={clearImage}
            className="px-3 py-1.5 rounded-lg bg-red-600/90 text-white text-xs font-medium flex items-center gap-1.5 hover:bg-red-500 transition"
          >
            <X className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>
    );
  }

  // Realistic Digital Vector Certificate Renderers
  if (id === 'cert-secr-railways') {
    return (
      <div className={`relative w-full aspect-[16/11] rounded-2xl overflow-hidden border-2 border-sky-300 dark:border-sky-800 bg-[#fdfbf7] dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md p-3 sm:p-4 select-none flex flex-col justify-between ${className}`}>
        {/* Certificate Decorative Border Pattern */}
        <div className="absolute inset-1.5 border border-dashed border-sky-400/60 dark:border-sky-600/60 rounded-xl pointer-events-none" />
        
        {/* Top Header */}
        <div className="relative z-10 text-center border-b border-sky-200 dark:border-zinc-800 pb-2">
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <div className="w-6 h-6 rounded-full bg-blue-900 text-amber-300 font-bold text-[9px] flex items-center justify-center border border-amber-400">
              IR
            </div>
            <span className="font-extrabold text-[12px] sm:text-xs tracking-wider text-red-700 dark:text-red-400 uppercase font-serif">
              South East Central Railway
            </span>
          </div>
          <p className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest">
            To Whom So Ever It May Concern
          </p>
        </div>

        {/* Certificate Body */}
        <div className="relative z-10 my-auto text-center px-1">
          <p className="text-[10px] sm:text-[11px] text-zinc-700 dark:text-zinc-300 leading-tight">
            Certified that <strong className="text-zinc-950 dark:text-white font-bold underline decoration-sky-500">Miss. ARTI KUMARI</strong> (Student of 4th Sem, CSE, Shri Shankaracharya Technical Campus, Bhilai) attended <strong>Bilaspur Division</strong> of SECR for Vocational Training (21/07/2025 to 09/08/2025):
          </p>

          {/* 8 Modules Grid */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 mt-2 bg-sky-50/80 dark:bg-sky-950/40 p-1.5 rounded-lg border border-sky-200/70 dark:border-sky-800/60 text-[9px] sm:text-[10px] font-mono text-zinc-800 dark:text-zinc-200 text-left">
            <div>1. UTS (Unreserved Ticketing)</div>
            <div>5. RAILNET</div>
            <div>2. PRS (Passenger Reservation)</div>
            <div>6. OFC (Optical Fiber)</div>
            <div>3. IPIS (Passenger Information)</div>
            <div>7. BATTERY MAINTENANCE</div>
            <div>4. TELEPHONE EXCHANGE</div>
            <div>8. IPS (Power Supplies)</div>
          </div>

          <p className="text-[9px] italic text-zinc-500 dark:text-zinc-400 mt-1.5">
            &ldquo;She was found sincere, laborious, and interested to the task given to her.&rdquo;
          </p>
        </div>

        {/* Footer & Signatures */}
        <div className="relative z-10 flex items-end justify-between pt-1 border-t border-sky-200 dark:border-zinc-800 text-[9px] text-zinc-600 dark:text-zinc-400">
          <div>
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Date: 12.08.2025</span>
            <span className="block text-[8px] text-zinc-400">Bilaspur Division</span>
          </div>
          <div className="text-right">
            <div className="font-serif italic text-[9px] font-bold text-blue-900 dark:text-sky-300 border-b border-zinc-400 dark:border-zinc-600 pb-0.5 inline-block">
              Sr. Div. Signal & Tele., Engg.(CO)
            </div>
            <p className="text-[8px] font-bold uppercase text-red-700 dark:text-red-400">SECR Bilaspur</p>
          </div>
        </div>

        {/* Upload Overlay action */}
        <label
          htmlFor={`file-input-${id}`}
          className="absolute inset-0 bg-transparent hover:bg-black/40 dark:hover:bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer z-20"
        >
          <span className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
            <Upload className="w-3.5 h-3.5" />
            Upload Physical Scan
          </span>
          <input
            id={`file-input-${id}`}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    );
  }

  if (id === 'cert-sih-2025-grand-finale' || id === 'sih-2025-photo') {
    return (
      <div className={`relative w-full aspect-[16/11] rounded-2xl overflow-hidden border-2 border-sky-400 dark:border-sky-700 bg-linear-to-br from-sky-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-sky-950 text-zinc-900 dark:text-zinc-100 shadow-md p-3 sm:p-4 select-none flex flex-col justify-between ${className}`}>
        {/* Certificate Outer Frame */}
        <div className="absolute inset-1 border-2 border-sky-500/40 rounded-xl pointer-events-none" />

        {/* SIH Header with Ministry & Partner Logos */}
        <div className="relative z-10 flex items-center justify-between border-b border-sky-200 dark:border-zinc-800 pb-1.5">
          <div className="text-left">
            <p className="text-[8px] font-bold text-zinc-800 dark:text-zinc-200 uppercase">Ministry of Education</p>
            <p className="text-[7px] text-zinc-500 dark:text-zinc-400">MoE Innovation Cell | AICTE</p>
          </div>
          <div className="flex items-center gap-1 text-[8px] font-mono font-bold text-sky-700 dark:text-sky-300">
            <span className="px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-900/60 border border-sky-300 dark:border-sky-700">
              #SIH 2025 Software Edition
            </span>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-bold text-amber-600 dark:text-amber-400">Grand Finale 2025</p>
            <p className="text-[7px] text-zinc-500">December 8-9</p>
          </div>
        </div>

        {/* Certificate Central Award */}
        <div className="relative z-10 text-center my-auto px-1">
          <div className="inline-block px-3 py-0.5 rounded-full bg-linear-to-r from-sky-600 to-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase mb-1 shadow-xs">
            Participation Certificate
          </div>
          <p className="text-[9px] text-zinc-600 dark:text-zinc-400 mt-0.5">This Certificate is awarded to</p>
          <h4 className="text-sm sm:text-base font-extrabold text-zinc-950 dark:text-white tracking-wide font-serif text-blue-950 dark:text-sky-200">
            Arti Kumari
          </h4>
          <p className="text-[10px] font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">
            for participating in <strong>Smart India Hackathon, 2025</strong>
          </p>
          <div className="flex items-center justify-center gap-2 mt-1.5 text-[8px] font-semibold text-zinc-500 dark:text-zinc-400">
            <span>Partners: SBI Foundation</span>
            <span>•</span>
            <span>Claude (Tech Partner)</span>
            <span>•</span>
            <span>TCS</span>
            <span>•</span>
            <span>Persistent</span>
          </div>
        </div>

        {/* Official Signatures Row */}
        <div className="relative z-10 grid grid-cols-4 gap-1 text-center pt-1 border-t border-sky-200 dark:border-zinc-800 text-[7px] text-zinc-600 dark:text-zinc-400">
          <div>
            <div className="italic font-serif font-bold text-zinc-800 dark:text-zinc-200">Sh. Vineet Joshi</div>
            <div className="text-[6.5px]">Secretary, Higher Ed.</div>
          </div>
          <div>
            <div className="italic font-serif font-bold text-zinc-800 dark:text-zinc-200">Prof. T. G. Sitharam</div>
            <div className="text-[6.5px]">Chairman, AICTE</div>
          </div>
          <div>
            <div className="italic font-serif font-bold text-zinc-800 dark:text-zinc-200">Dr. Abhay Jere</div>
            <div className="text-[6.5px]">Vice Chairman AICTE / CIO</div>
          </div>
          <div>
            <div className="italic font-serif font-bold text-zinc-800 dark:text-zinc-200">Dr. Adesh K. Pandey</div>
            <div className="text-[6.5px]">Director, KIET Univ.</div>
          </div>
        </div>

        {/* Upload Overlay */}
        <label
          htmlFor={`file-input-${id}`}
          className="absolute inset-0 bg-transparent hover:bg-black/40 dark:hover:bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer z-20"
        >
          <span className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
            <Upload className="w-3.5 h-3.5" />
            Upload Physical Scan
          </span>
          <input
            id={`file-input-${id}`}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    );
  }

  if (id === 'cert-iit-bhilai-uav') {
    return (
      <div className={`relative w-full aspect-[16/11] rounded-2xl overflow-hidden border-2 border-amber-300 dark:border-amber-700 bg-[#fdfbf7] dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md p-3 sm:p-4 select-none flex flex-col justify-between ${className}`}>
        {/* Certificate Gold Double Border */}
        <div className="absolute inset-1.5 border-2 border-amber-400/60 dark:border-amber-600/60 rounded-xl pointer-events-none" />

        {/* Header with MeitY and IIT Bhilai */}
        <div className="relative z-10 flex items-center justify-between border-b border-amber-200 dark:border-zinc-800 pb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-purple-900 text-white font-bold text-[8px] flex items-center justify-center">
              IIT
            </div>
            <div>
              <p className="text-[8px] font-bold text-zinc-900 dark:text-zinc-100 uppercase">IIT Bhilai</p>
              <p className="text-[6.5px] text-zinc-500">SwaYaan</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[9px] font-extrabold text-red-800 dark:text-red-400 uppercase tracking-wider">MeitY</p>
            <p className="text-[6.5px] text-zinc-500">Government of India</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-[7px] text-zinc-500 bg-amber-100 dark:bg-zinc-800 px-1 py-0.5 rounded border border-amber-300/50">
              BMCP/IITBH/026/23
            </span>
          </div>
        </div>

        {/* Central Content */}
        <div className="relative z-10 text-center my-auto px-1">
          <h4 className="text-[11px] sm:text-xs font-bold text-zinc-900 dark:text-zinc-100 font-serif leading-tight">
            Bootcamp on UAV Navigation, Control and its Applications
          </h4>
          <p className="text-[8px] text-zinc-600 dark:text-zinc-400 italic">
            Sponsored by MeitY, Govt. of India • Organized by IIT Bhilai
          </p>

          <div className="my-1.5">
            <span className="text-[10px] font-bold tracking-widest uppercase border-b border-amber-500 text-amber-700 dark:text-amber-400 pb-0.5">
              Certificate of Participation
            </span>
          </div>

          <p className="text-[9.5px] text-zinc-700 dark:text-zinc-300 leading-snug">
            This is to certify that <strong className="text-zinc-950 dark:text-white font-bold">Ms. Arti Kumari</strong> Participated in the Bootcamp on UAV Navigation, Control and its Applications held at Shri Shankaracharya Technical Campus, Bhilai, during <strong>13th - 17th February 2026</strong>.
          </p>
        </div>

        {/* Dual Signatures */}
        <div className="relative z-10 flex items-end justify-between pt-1 border-t border-amber-200 dark:border-zinc-800 text-[8px] text-zinc-600 dark:text-zinc-400">
          <div className="text-left">
            <div className="italic font-serif font-bold text-zinc-800 dark:text-zinc-200">Dr. Soumajit Pramanik</div>
            <div className="text-[7px]">Co-CI, IIT Bhilai, CBHRDUAS, MeitY Project</div>
          </div>
          <div className="text-right">
            <div className="italic font-serif font-bold text-zinc-800 dark:text-zinc-200">Dr. Avishek Adhikary</div>
            <div className="text-[7px]">CI, IIT Bhilai, CBHRDUAS, MeitY Project</div>
          </div>
        </div>

        {/* Upload Overlay */}
        <label
          htmlFor={`file-input-${id}`}
          className="absolute inset-0 bg-transparent hover:bg-black/40 dark:hover:bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer z-20"
        >
          <span className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
            <Upload className="w-3.5 h-3.5" />
            Upload Physical Scan
          </span>
          <input
            id={`file-input-${id}`}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    );
  }

  if (id === 'pw-skills-cert') {
    return (
      <div className={`relative w-full aspect-[16/11] rounded-2xl overflow-hidden border-2 border-amber-300/80 dark:border-amber-700/80 bg-linear-to-br from-amber-50/70 via-zinc-50 to-orange-50/60 dark:from-zinc-900 dark:via-zinc-900 dark:to-amber-950/40 text-zinc-900 dark:text-zinc-100 shadow-md p-4 select-none flex flex-col justify-between ${className}`}>
        {/* Subtle decorative inner border */}
        <div className="absolute inset-1.5 border border-dashed border-amber-400/40 dark:border-amber-600/40 rounded-xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-amber-200/80 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              PW Skills
            </span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-800">
            Active Learning
          </span>
        </div>

        {/* Central In Progress Badge */}
        <div className="relative z-10 text-center my-auto px-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-amber-500/20 mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>In Progress</span>
          </div>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1">
            Data Science with Generative AI
          </h4>
          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5 max-w-xs mx-auto">
            Upskilling in Machine Learning, Deep Learning, and GenAI Pipelines
          </p>
        </div>

        {/* Footer Note */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-amber-200/80 dark:border-zinc-800 text-[9px] text-zinc-500 dark:text-zinc-400">
          <span>Curriculum & Live Projects</span>
          <span className="font-semibold text-amber-600 dark:text-amber-400">Ongoing Coursework</span>
        </div>

        {/* Upload Overlay for future certificate */}
        <label
          htmlFor={`file-input-${id}`}
          className="absolute inset-0 bg-transparent hover:bg-black/40 dark:hover:bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer z-20"
        >
          <span className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
            <Upload className="w-3.5 h-3.5" />
            Upload Certificate When Ready
          </span>
          <input
            id={`file-input-${id}`}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    );
  }

  // Fallback for general certificates
  return (
    <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 flex flex-col items-center justify-center p-4 text-center ${className}`}>
      <Award className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-2" />
      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
        {title}
      </span>
    </div>
  );
};
