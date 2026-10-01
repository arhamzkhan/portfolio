import React, { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SocialsSection from './components/SocialsSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import TerminalDrawer from './components/TerminalDrawer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (path === currentPath) {
      if (path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <HeaderNav onOpenTerminal={() => setTerminalOpen(true)} onNavigate={navigateTo} />

      <main className="max-w-2xl mx-auto px-6 space-y-12 pb-16">
        {currentPath === '/privacy' ? (
          <PrivacyPolicy onNavigate={navigateTo} />
        ) : currentPath === '/terms' ? (
          <TermsOfUse onNavigate={navigateTo} />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
            <SocialsSection />
          </>
        )}
        <Footer onNavigate={navigateTo} />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <TerminalDrawer isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}
