import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section id="whoami" className="py-16 sm:py-20 space-y-6">
      <div className="font-mono text-xs text-neutral-500">$ ./whoami</div>

      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-mono font-bold text-neutral-100 tracking-tight">
          {portfolioData.profile.name.toLowerCase()}
        </h1>

        <p className="text-base text-neutral-300 max-w-lg leading-relaxed font-sans">
          {portfolioData.profile.bio}
        </p>

        <p className="text-xs text-neutral-500 font-mono">
          ics student &bull; lahore, pakistan
        </p>
      </div>

      {/* Direct links */}
      <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs text-neutral-400">
        <a
          href="#projects"
          className="text-cyan-400 hover:underline"
        >
          view projects &rarr;
        </a>
        <a
          href="https://github.com/arhamzkhan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-200 transition-colors"
        >
          github ↗
        </a>
        <a
          href="https://instagram.com/aka._arham"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-200 transition-colors"
        >
          instagram ↗
        </a>
        <a
          href="mailto:dev.arhamkhan@gmail.com"
          className="hover:text-neutral-200 transition-colors"
        >
          email
        </a>
      </div>
    </section>
  );
}
