import React, { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SocialsSection from './components/SocialsSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import TerminalDrawer from './components/TerminalDrawer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut Ctrl+K to toggle CLI Terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-300 selection:bg-cyan-500/20 selection:text-cyan-200">
      <HeaderNav onOpenTerminal={() => setTerminalOpen(true)} />

      <main className="max-w-2xl mx-auto px-6 space-y-12 pb-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <SocialsSection />
        <Footer />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <TerminalDrawer isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}
