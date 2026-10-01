import React from 'react';

export default function TermsOfUse({ onNavigate }) {
  return (
    <div className="py-12 space-y-8 font-sans text-sm text-neutral-300 leading-relaxed">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-900 font-mono text-xs">
        <span className="text-neutral-500">$ cat terms.txt</span>
        <button
          onClick={() => onNavigate('/')}
          className="text-cyan-400 hover:underline"
        >
          &larr; back to portfolio
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-mono font-bold text-neutral-100 mb-2">Terms of Use</h1>
          <p className="text-xs font-mono text-neutral-500">
            last updated: September 30, 2026
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./nature-of-site</h2>
          <p className="text-neutral-400">
            This website is a personal developer portfolio operated by Arham Khan. Project descriptions, previews, and technical notes published here are provided for informational and demonstration purposes.
          </p>
          <p className="text-neutral-400">
            Listed projects may represent active live applications, demonstration builds, archived projects, private projects, or works in progress.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./availability-and-links</h2>
          <p className="text-neutral-400">
            No guarantee is made that every linked project, live demonstration deployment, or source code repository will permanently remain online, available, or uninterrupted.
          </p>
          <p className="text-neutral-400">
            External linked projects or services may maintain their own distinct terms of use and privacy policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./acceptable-use</h2>
          <p className="text-neutral-400">
            Visitors should not misuse, attack, scrape, launch automated denial of service, or attempt unauthorized access to this website, its underlying infrastructure, or linked services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./no-contract</h2>
          <p className="text-neutral-400">
            Nothing on this website creates a binding contractual relationship, commercial warranty, or formal service agreement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./contact</h2>
          <p className="text-neutral-400">
            For inquiries regarding this portfolio or listed software projects, contact{' '}
            <a href="mailto:dev.arhamkhan@gmail.com" className="text-cyan-400 hover:underline">
              dev.arhamkhan@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
