import React, { useState, useEffect } from 'react';
import { Upload, Image as ImageIcon, X, Eye } from 'lucide-react';
import { resolveFirstValidImage, saveImageToServer } from '../utils/assetResolver';

interface ImagePlaceholderProps {
  id: string;
  title: string;
  subtitle?: string;
  defaultImage?: string;
  aspectRatio?: '1:1' | '16:9' | '16:10' | '4:3' | '3:2' | 'auto';
  className?: string;
  onImageClick?: (url: string) => void;
  allowUpload?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  id,
  title,
  subtitle = "Click or drag to test preview with local image",
  defaultImage,
  aspectRatio = '16:10',
  className = '',
  onImageClick,
  allowUpload = true,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadAsset() {
      // Build candidate asset paths based on element id
      const candidates: string[] = [];

      if (defaultImage) {
        candidates.push(defaultImage);
      }

      if (id === 'profile-hero-photo') {
        candidates.push(
          'https://i.ibb.co/Ng9z2XPw/Arti.jpg',
          '/uploads/profile-hero-photo.jpg',
          '/images/arti.jpg',
          '/profile.jpg',
          '/profile.png',
          '/images/profile.jpg',
          '/images/profile.png',
          '/assets/profile.jpg',
          '/assets/profile.png',
          '/photo.jpg',
          '/photo.png'
        );
      } else {
        candidates.push(
          `/certificates/${id}.png`,
          `/certificates/${id}.jpg`,
          `/certificates/${id}.jpeg`,
          `/certificates/${id}.webp`,
          `/images/${id}.png`,
          `/images/${id}.jpg`,
          `/images/${id}.jpeg`,
          `/images/${id}.webp`,
          `/assets/${id}.png`,
          `/assets/${id}.jpg`,
          `/${id}.png`,
          `/${id}.jpg`
        );
      }

      let savedFromStorage: string | null = null;
      try {
        savedFromStorage = localStorage.getItem(`portfolio_img_${id}`);
      } catch {
        // Safe fallback
      }

      const resolved = await resolveFirstValidImage(candidates, savedFromStorage, id);
      if (isMounted && resolved) {
        setImageSrc(resolved);
      }
    }

    loadAsset();

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
        setImageSrc(result);
        try {
          localStorage.setItem(`portfolio_img_${id}`, result);
        } catch {
          // If storage limit exceeded, keeps in memory
        }
        saveImageToServer(id, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImageSrc(result);
        try {
          localStorage.setItem(`portfolio_img_${id}`, result);
        } catch {
          // Storage fallback
        }
        saveImageToServer(id, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageSrc(null);
    localStorage.removeItem(`portfolio_img_${id}`);
  };

  const aspectClasses: Record<string, string> = {
    '1:1': 'aspect-square',
    '16:9': 'aspect-video',
    '16:10': 'aspect-[16/10]',
    '4:3': 'aspect-[4/3]',
    '3:2': 'aspect-[3/2]',
    'auto': 'h-full min-h-[220px]',
  };

  return (
    <div
      id={`placeholder-container-${id}`}
      className={`relative w-full overflow-hidden rounded-2xl border border-dashed transition-all duration-300 group ${
        imageSrc
          ? 'border-indigo-500/40 bg-zinc-900/40'
          : 'border-zinc-300 dark:border-zinc-700/80 bg-zinc-100/70 dark:bg-zinc-900/60 hover:border-indigo-500/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/40'
      } ${aspectClasses[aspectRatio] || 'aspect-[16/10]'} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {imageSrc ? (
        <div className="relative w-full h-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Overlay controls */}
          <div className={`absolute inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center gap-3 transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            {onImageClick && (
              <button
                id={`btn-view-${id}`}
                onClick={() => onImageClick(imageSrc)}
                className="px-3 py-1.5 rounded-lg bg-zinc-800/90 text-zinc-100 text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-700 transition"
              >
                <Eye className="w-3.5 h-3.5" />
                View Full
              </button>
            )}
            <button
              id={`btn-remove-${id}`}
              onClick={clearImage}
              className="px-3 py-1.5 rounded-lg bg-red-600/90 text-white text-xs font-medium flex items-center gap-1.5 hover:bg-red-500 transition"
            >
              <X className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>
      ) : (
        <label
          htmlFor={`file-input-${id}`}
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer select-none"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300 shadow-xs">
            <ImageIcon className="w-6 h-6" />
          </div>
          
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-1 px-2.5 py-1 rounded bg-zinc-200/70 dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700">
            [{title}]
          </span>
          
          {allowUpload && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
              <Upload className="w-3 h-3 text-indigo-500" />
              {subtitle}
            </p>
          )}

          {allowUpload && (
            <input
              id={`file-input-${id}`}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          )}
        </label>
      )}
    </div>
  );
};
