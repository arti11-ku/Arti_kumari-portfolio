import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { SmartResourceAllocationSection } from './components/SmartResourceAllocationSection';
import { Projects } from './components/Projects';
import { EducationTimeline } from './components/EducationTimeline';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { SoftSkills } from './components/SoftSkills';
import { Contact } from './components/Contact';
import { ImageLightbox } from './components/ImageLightbox';
import { autoSyncLocalImagesToServer, fetchServerManifest } from './utils/assetResolver';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ak_portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch permanent assets from server & sync any local user uploads to permanent storage
    fetchServerManifest();
    autoSyncLocalImagesToServer();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('ak_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ak_portfolio_theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-teal-500 selection:text-white transition-colors duration-200 font-sans">
      
      {/* Sticky Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Area */}
      <main className="relative">
        <Hero
          onViewProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        <About />

        <Skills />

        {/* Featured Smart Resource Allocation Interactive Showcase */}
        <SmartResourceAllocationSection onCustomImageClick={(url) => setLightboxImage(url)} />

        <Projects onImageClick={(url) => setLightboxImage(url)} />

        <EducationTimeline />

        <Certifications onImageClick={(url) => setLightboxImage(url)} />

        <Achievements onImageClick={(url) => setLightboxImage(url)} />

        <SoftSkills />

        <Contact />
      </main>

      {/* Global Image Lightbox */}
      <ImageLightbox
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
