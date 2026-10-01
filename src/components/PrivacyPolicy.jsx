import React from 'react';

export default function PrivacyPolicy({ onNavigate }) {
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
        <div>
          <h1 className="text-xl font-mono font-bold text-neutral-100 mb-2">Privacy Policy</h1>
          <p className="text-xs font-mono text-neutral-500">
            last updated: September 30, 2026
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./overview</h2>
          <p className="text-neutral-400">
            This website is a personal developer portfolio operated by Arham Khan. This policy explains how visitor privacy and aggregate technical data are handled when browsing this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./analytics</h2>
          <p className="text-neutral-400">
            Cloudflare Web Analytics is used to measure aggregate website traffic and performance metrics. According to Cloudflare, Web Analytics does not use cookies, does not track individual visitors across sites, and does not collect or store personal data.
          </p>
          <p className="text-neutral-400">
            Aggregate metrics collected for site maintenance and performance monitoring may include page views, visit counts, referring sources, general country of origin, browser type, operating system, device category, and page load performance metrics.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./data-collection</h2>
          <p className="text-neutral-400">
            No attempt is made by this portfolio to identify individual visitors or connect technical metrics to a specific person. This site does not implement screenshot detection, keylogging, session recording, device fingerprinting, or hidden individual tracking scripts.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./third-party-services</h2>
          <p className="text-neutral-400">
            This portfolio is hosted and delivered through third-party infrastructure services. These hosting providers may process standard technical request information (such as IP address, request path, and user-agent) as part of hosting, web delivery, network security, and infrastructure stability.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-mono font-semibold text-neutral-200">$ ./contact-and-updates</h2>
          <p className="text-neutral-400">
            If you have questions regarding this website, you can reach out via email at{' '}
            <a href="mailto:dev.arhamkhan@gmail.com" className="text-cyan-400 hover:underline">
              dev.arhamkhan@gmail.com
            </a>.
          </p>
          <p className="text-xs font-mono text-neutral-500 pt-4 border-t border-neutral-900">
            This policy describes the current site implementation and may be updated if site functionality changes.
          </p>
        </section>
      </div>
    </div>
  );
}
