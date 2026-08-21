import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div
      id="global-image-lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition z-50"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Full size preview"
          className="w-auto h-auto max-h-[85vh] max-w-full object-contain rounded-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
