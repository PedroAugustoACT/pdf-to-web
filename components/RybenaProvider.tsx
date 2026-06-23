'use client';

import Script from 'next/script';

/**
 * Rybená CDN script URL.
 * Standard mode — the accessibility bar is visible by default.
 */
const RYBENA_CDN_URL =
  'https://cdn.rybena.com.br/dom/master/latest/rybena.js';

/**
 * Client-side provider that loads the Rybená accessibility script.
 *
 * - Uses Next.js `<Script>` with `afterInteractive` strategy to avoid
 *   interfering with hydration.
 * - The `id` prop ensures Next.js deduplicates the script across SPA navigations.
 * - Dispatches custom window events so the `useRybena` hook can react
 *   without polling.
 *
 * Place this component once in your root layout. To disable Rybená,
 * simply remove this component — zero residual impact on the app.
 */
export function RybenaProvider() {
  return (
    <Script
      id="rybena-loader"
      src={RYBENA_CDN_URL}
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('rybena-loaded'));
        }
      }}
      onError={(e: Error) => {
        console.error('[Rybená] Failed to load accessibility script:', e);
        if (typeof window !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent('rybena-error', { detail: e }),
          );
        }
      }}
    />
  );
}
