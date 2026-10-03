import React, { useEffect, useState } from 'react';

const CLARITY_ID = 'yrdhab85cp';
const STORAGE_KEY = 'analytics-consent'; // 'accepted' | 'declined'

// ─── Clarity loader helpers ───────────────────────────────────────────────────

function injectClarityScript() {
  if (document.getElementById('clarity-script')) return; // already injected
  const script = document.createElement('script');
  script.id = 'clarity-script';
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(script);
}

function initClarity() {
  // Set up the Clarity command queue shim (identical to their standard snippet)
  window.clarity =
    window.clarity ||
    function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
}

function loadClarity() {
  initClarity();
  injectClarityScript();

  // Wait for the script to load, then:
  //   1. Signal consentv2 (current recommended API as of 2025)
  //   2. Identify the session owner
  const apply = () => {
    window.clarity('consentv2', {
      ad_Storage: 'granted',
      analytics_Storage: 'granted',
    });
    window.clarity('identify', '1698yzl', undefined, undefined, 'Arham');
  };

  const el = document.getElementById('clarity-script');
  if (el) {
    el.addEventListener('load', apply, { once: true });
    // Also call immediately in case the script already loaded (cached)
    if (typeof window.clarity === 'function' && window.clarity.q === undefined) {
      apply();
    }
  }
}

// ─── ConsentGate ─────────────────────────────────────────────────────────────

export default function ConsentGate() {
  // 'idle' | 'banner' | 'accepted' | 'declined'
  const [state, setState] = useState('idle');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === 'accepted') {
      loadClarity();
      setState('accepted');
      return;
    }

    if (stored === 'declined') {
      setState('declined');
      return;
    }

    // No stored choice — ask the region API
    fetch('/api/region')
      .then((r) => r.json())
      .then(({ needsConsent }) => {
        if (needsConsent) {
          setState('banner');
        } else {
          // Non-consent region: load Clarity straight away
          loadClarity();
          setState('accepted');
        }
      })
      .catch(() => {
        // Fetch failed — show banner as a safe default
        setState('banner');
      });
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    loadClarity();
    setState('accepted');
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setState('declined');
  };

  if (state !== 'banner') return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="
        fixed bottom-0 left-0 right-0 z-50
        border-t border-neutral-800
        bg-[#0d0d0f]/95 backdrop-blur-sm
        font-mono text-xs text-neutral-400
      "
    >
      <div className="max-w-2xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        {/* Copy */}
        <p className="flex-1 leading-relaxed">
          <span className="text-neutral-500 mr-1.5">$</span>
          i use{' '}
          <a
            href="https://clarity.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-cyan-400 transition-colors underline underline-offset-2"
          >
            microsoft clarity
          </a>{' '}
          to see how people use this site — anonymous session recordings, no
          forms, no personal data.{' '}
          <a
            href="/privacy"
            className="text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-2"
          >
            privacy policy
          </a>
        </p>

        {/* Buttons — equal visual weight, no dark patterns */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={accept}
            className="
              px-3 py-1.5 rounded border border-neutral-700
              text-neutral-300 hover:border-cyan-500 hover:text-cyan-400
              transition-colors focus-visible:outline focus-visible:outline-2
              focus-visible:outline-cyan-500
            "
            aria-label="Accept analytics cookies"
          >
            accept
          </button>
          <button
            onClick={decline}
            className="
              px-3 py-1.5 rounded border border-neutral-700
              text-neutral-500 hover:border-neutral-500 hover:text-neutral-300
              transition-colors focus-visible:outline focus-visible:outline-2
              focus-visible:outline-neutral-500
            "
            aria-label="Decline analytics cookies"
          >
            decline
          </button>
        </div>
      </div>
    </div>
  );
}
