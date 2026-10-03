import React from 'react';

const STORAGE_KEY = 'analytics-consent';

export default function Footer({ onNavigate }) {
  const handleNav = (e, path) => {
    e.preventDefault();
    onNavigate(path);
  };

  const resetConsent = (e) => {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    // Reload so ConsentGate re-runs its logic and shows the banner
    window.location.reload();
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
          href="#"
          onClick={resetConsent}
          className="hover:text-neutral-400 transition-colors"
          title="Change your analytics cookie preference"
        >
          Cookie settings
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
