/**
 * Cloudflare Pages Function: /api/region
 *
 * Returns the visitor's country and whether they need consent (EU/UK/CH + unknowns).
 * Never cached — must be fresh per request.
 */

// EU-27 country codes + EEA non-EU + GB + CH
const CONSENT_COUNTRIES = new Set([
  // EU 27
  'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI',
  'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT',
  'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK',
  // EEA non-EU
  'IS', 'LI', 'NO',
  // UK and Switzerland
  'GB', 'CH',
]);

// Unknown / Tor / unresolvable — treat as needing consent (safe default)
const UNKNOWN_CODES = new Set(['XX', 'T1', '']);

export async function onRequest(context) {
  const { request } = context;

  // CF-IPCountry header is set by Cloudflare at the edge.
  // Falls back to request.cf?.country for Cloudflare Workers runtime.
  const country =
    request.headers.get('CF-IPCountry') ||
    (request.cf && request.cf.country) ||
    'XX';

  const needsConsent =
    CONSENT_COUNTRIES.has(country) || UNKNOWN_CODES.has(country);

  return new Response(
    JSON.stringify({ country, needsConsent }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    }
  );
}
