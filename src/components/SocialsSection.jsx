import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function SocialsSection() {
  return (
    <section id="socials" className="py-12 border-t border-neutral-900 space-y-4 font-mono text-xs">
      <div className="text-neutral-500">$ cat socials.txt</div>

      <div className="space-y-2">
        {portfolioData.socials.map((social, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-neutral-500 w-20">{social.platform}:</span>
            <a
              href={social.url}
              target={social.platform === 'email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-cyan-400 transition-colors"
            >
              {social.username} ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
