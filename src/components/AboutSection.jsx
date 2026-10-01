import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 border-t border-neutral-900 space-y-4">
      <div className="font-mono text-xs text-neutral-500">$ cat about.txt</div>

      <div className="space-y-3 font-sans text-sm text-neutral-400 leading-relaxed">
        <p>
          ics student in lahore, building practical software with a focus on web development, cybersecurity, and ai-assisted development.
        </p>
        <p className="font-mono text-xs text-neutral-500">
          stack: {portfolioData.profile.skillsSummary}
        </p>
      </div>
    </section>
  );
}
