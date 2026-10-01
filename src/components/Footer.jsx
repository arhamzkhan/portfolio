import React from 'react';

export default function Footer({ onNavigate }) {
  const handleNav = (e, path) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="py-8 border-t border-neutral-900 font-mono text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span>&copy; {new Date().getFullYear()} arham khan. lahore, pk.</span>
      <div className="flex items-center gap-3 text-[11px] text-neutral-600">
        <a
          href="/privacy"
          onClick={(e) => handleNav(e, '/privacy')}
          className="hover:text-neutral-400 transition-colors"
        >
          Privacy
        </a>
        <span>&middot;</span>
        <a
          href="/terms"
          onClick={(e) => handleNav(e, '/terms')}
          className="hover:text-neutral-400 transition-colors"
        >
          Terms
        </a>
        <span>&middot;</span>
        <a
          href="#whoami"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          className="hover:text-neutral-400 transition-colors"
        >
          top &uarr;
        </a>
      </div>
    </footer>
  );
}
