'use client';

import { useEffect, useState, useCallback } from 'react';

interface UseRybenaReturn {
  /** `true` once the Rybená CDN script has loaded and the API is available. */
  isLoaded: boolean;
  /** The singleton API instance, or `null` if not yet available. */
  api: RybenaApiInstance | null;
  /** Error object if the script failed to load. */
  error: Error | null;
}

/**
 * Hook for type-safe, SSR-safe access to the Rybená API singleton.
 *
 * Usage:
 * ```tsx
 * 'use client';
 * import { useRybena } from '@/lib/useRybena';
 *
 * function MyComponent() {
 *   const { isLoaded, api } = useRybena();
 *
 *   const handleTranslate = () => {
 *     if (api) {
 *       api.translate('Olá, mundo!');
 *     }
 *   };
 *
 *   return (
 *     <button onClick={handleTranslate} disabled={!isLoaded}>
 *       Traduzir
 *     </button>
 *   );
 * }
 * ```
 */
export function useRybena(): UseRybenaReturn {
  const [isLoaded, setIsLoaded] = useState(false);
  const [api, setApi] = useState<RybenaApiInstance | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const tryResolveApi = useCallback(() => {
    if (typeof window !== 'undefined' && window.RybenaApi) {
      try {
        const instance = window.RybenaApi.getInstance();
        setApi(instance);
        setIsLoaded(true);
        return true;
      } catch (e) {
        console.error('[useRybena] Failed to get API instance:', e);
      }
    }
    return false;
  }, []);

  useEffect(() => {
    // The API may already be available if the script loaded before this
    // component mounted (e.g. on client-side navigation).
    if (tryResolveApi()) return;

    const onLoaded = () => {
      tryResolveApi();
    };

    const onError = (e: Event) => {
      const detail = (e as CustomEvent<Error>).detail;
      setError(detail ?? new Error('Rybená script failed to load'));
    };

    window.addEventListener('rybena-loaded', onLoaded);
    window.addEventListener('rybena-error', onError);

    return () => {
      window.removeEventListener('rybena-loaded', onLoaded);
      window.removeEventListener('rybena-error', onError);
    };
  }, [tryResolveApi]);

  return { isLoaded, api, error };
}
