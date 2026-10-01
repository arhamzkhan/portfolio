import React from 'react';

export default function HeaderNav({ onOpenTerminal, onNavigate }) {
  const handleSectionClick = (e, hash) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-8 border-b border-neutral-900 font-mono text-xs text-neutral-500">
      <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#whoami"
          onClick={(e) => handleSectionClick(e, '#whoami')}
          className="text-neutral-300 hover:text-cyan-400 transition-colors"
        >
          $ arham
        </a>

        <nav className="flex items-center gap-5">
          <a
            href="#about"
            onClick={(e) => handleSectionClick(e, '#about')}
            className="hover:text-neutral-300 transition-colors"
          >
            about
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSectionClick(e, '#projects')}
            className="hover:text-neutral-300 transition-colors"
          >
            projects
          </a>
          <a
            href="#socials"
            onClick={(e) => handleSectionClick(e, '#socials')}
            className="hover:text-neutral-300 transition-colors"
          >
            connect
          </a>
          <button
            onClick={onOpenTerminal}
            className="hover:text-cyan-400 transition-colors"
            title="Press Ctrl+K for CLI"
          >
            cli
          </button>
        </nav>
      </div>
    </header>
  );
}
