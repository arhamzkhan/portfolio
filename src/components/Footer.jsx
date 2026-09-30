import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-900 font-mono text-xs text-neutral-600 flex items-center justify-between">
      <span>&copy; {new Date().getFullYear()} arham khan. lahore, pk.</span>
      <a href="#whoami" className="hover:text-neutral-400 transition-colors">
        top &uarr;
      </a>
    </footer>
  );
}
