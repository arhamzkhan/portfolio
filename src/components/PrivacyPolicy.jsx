import React from 'react';

const STORAGE_KEY = 'analytics-consent';

export default function PrivacyPolicy({ onNavigate }) {
  const resetConsent = (e) => {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  return (
    <div className="py-12 space-y-8 font-sans text-sm text-neutral-300 leading-relaxed">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-900 font-mono text-xs">
        <span className="text-neutral-500">$ cat privacy.txt</span>
        <button
          onClick={() => onNavigate('/')}
          className="text-cyan-400 hover:underline"
        >
          &larr; back to portfolio
        </button>
      </div>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-mono font-bold text-neutral-100 mb-2">Privacy Policy</h1>
          <p className="text-xs font-mono text-neutral-500">last updated: October 3, 2026</p>
        </div>

        {/* Who I am */}
        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./whoami</h2>
          <p className="text-neutral-400">
            This is a personal developer portfolio run by <strong className="text-neutral-300">Arham Khan</strong>, based in Lahore, Pakistan.
            If you have any privacy-related questions, email me at{' '}
            <a href="mailto:dev.arhamkhan@gmail.com" className="text-cyan-400 hover:underline">
              dev.arhamkhan@gmail.com
            </a>.
          </p>
        </section>

        {/* What I collect */}
        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./what-i-collect</h2>
          <p className="text-neutral-400">
            I use two analytics tools, neither of which touches anything personally identifiable:
          </p>
          <ul className="list-none space-y-3 text-neutral-400">
            <li className="pl-4 border-l border-neutral-800">
              <span className="font-mono text-neutral-300">Cloudflare Web Analytics</span> —
              cookieless, privacy-first aggregate stats. It collects page views, referring sources,
              approximate country-level location, browser type, device category, and page-load timing.
              It doesn't track you across sites or set cookies.
            </li>
            <li className="pl-4 border-l border-neutral-800">
              <span className="font-mono text-neutral-300">Microsoft Clarity</span> —
              session recordings and heatmaps. It records mouse movements, clicks, scrolls, and pages
              visited so I can see how the site is being used. It also collects device/browser type and
              approximate country. <strong className="text-neutral-300">Clarity masks all sensitive text by default</strong> —
              I haven't disabled that, and I don't intend to. This site has no forms and I don't collect
              names, emails, or anything typed by visitors.
            </li>
          </ul>
        </section>

        {/* When Clarity loads */}
        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./consent</h2>
          <p className="text-neutral-400">
            Clarity uses cookies to link page views into sessions. For visitors from the EU, UK, and
            Switzerland, I only load Clarity after you explicitly accept. If you're visiting from
            somewhere else, it loads automatically, which is standard practice where cookie consent laws
            don't apply. Cloudflare Web Analytics always runs regardless — it doesn't need consent
            because it sets no cookies.
          </p>
          <p className="text-neutral-400">
            You can change your choice at any time by clicking{' '}
            <button
              onClick={resetConsent}
              className="text-cyan-400 hover:underline focus:outline-none"
            >
              Cookie settings
            </button>{' '}
            in the footer.
          </p>
        </section>

        {/* Why */}
        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./why</h2>
          <p className="text-neutral-400">
            I look at analytics to understand which projects get the most attention, whether the site
            is loading well on mobile, and how people navigate. That's it. I don't sell data, share it
            with advertisers, or use it for anything other than improving this site.
          </p>
        </section>

        {/* Third parties */}
        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./third-parties</h2>
          <ul className="list-none space-y-2 text-neutral-400">
            <li className="pl-4 border-l border-neutral-800">
              <span className="font-mono text-neutral-300">Microsoft (Clarity)</span> —{' '}
              <a
                href="https://privacy.microsoft.com/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Microsoft Privacy Statement
              </a>
            </li>
            <li className="pl-4 border-l border-neutral-800">
              <span className="font-mono text-neutral-300">Cloudflare</span> — hosting + analytics —{' '}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Cloudflare Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        {/* Opt out */}
        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./opt-out</h2>
          <p className="text-neutral-400">
            To stop Clarity: click{' '}
            <button
              onClick={resetConsent}
              className="text-cyan-400 hover:underline focus:outline-none"
            >
              Cookie settings
            </button>{' '}
            in the footer and choose <em>decline</em>. You can also install the{' '}
            <a
              href="https://www.microsoft.com/en-us/clarity/opt-out"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Microsoft Clarity opt-out extension
            </a>{' '}
            for a browser-level block. For questions or requests, email me at{' '}
            <a href="mailto:dev.arhamkhan@gmail.com" className="text-cyan-400 hover:underline">
              dev.arhamkhan@gmail.com
            </a>.
          </p>
        </section>

        <p className="text-xs font-mono text-neutral-600 pt-4 border-t border-neutral-900">
          This policy reflects the current state of the site and will be updated if anything changes.
        </p>
      </div>
    </div>
  );
}
