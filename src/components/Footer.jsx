import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-900 font-mono text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span>&copy; {new Date().getFullYear()} arham khan. lahore, pk.</span>
      <div className="flex items-center gap-4 text-[11px] text-neutral-600">
        <span>privacy &amp; terms ready</span>
        <a href="#whoami" className="hover:text-neutral-400 transition-colors">
          top &uarr;
        </a>
      </div>
    </footer>
  );
}
