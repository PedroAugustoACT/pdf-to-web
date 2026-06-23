/**
 * Rybená Accessibility Plugin — Global Type Declarations
 *
 * Declares the global `RybenaApi` and `RybenaDOM` singletons injected by the
 * Rybená CDN script (https://cdn.rybena.com.br/dom/master/latest/rybena.js).
 *
 * Reference: https://docs.rybena.com.br/docs/api/typescript-support
 */

declare global {
  /* ------------------------------------------------------------------ */
  /*  RybenaApi singleton instance                                      */
  /* ------------------------------------------------------------------ */

  interface RybenaApiInstance {
    // ── Player Control ────────────────────────────────────────────────
    openPlayer: () => void;
    closePlayer: () => void;
    setToNormalMode: () => void;
    setToTransparentMode: () => void;
    setCoordinates: (x: number, y: number) => void;
    setSize: (value: number) => void;

    // ── Translation Control ───────────────────────────────────────────
    translate: (text: string) => void;
    switchToLibras: () => void;
    switchToVoz: () => void;
    pause: () => void;
    play: () => void;
    stop: () => void;
    setSpeed: (speed: number) => void;

    // ── Event Handlers ────────────────────────────────────────────────
    handleLoaded: (callback: () => void) => void;
    handleTranslate: (callback: () => void) => void;
    isTranslating: () => boolean;

    // ── Accessibility — Visual Adjustments ────────────────────────────
    toggleLineHeight: () => void;
    nextLineHeight: () => void;
    previousLineHeight: () => void;
    startLineHeight: () => void;
    stopLineHeight: () => void;

    toggleLetterSpacing: () => void;
    nextLetterSpacing: () => void;
    previousLetterSpacing: () => void;
    startLetterSpacing: () => void;
    stopLetterSpacing: () => void;

    toggleZoom: () => void;
    nextZoom: () => void;
    previousZoom: () => void;
    startZoom: () => void;
    stopZoom: () => void;

    toggleDarkContrast: () => void;
    startDarkContrast: () => void;
    stopDarkContrast: () => void;

    toggleLightContrast: () => void;
    startLightContrast: () => void;
    stopLightContrast: () => void;

    toggleInvertedContrast: () => void;
    startInvertedContrast: () => void;
    stopInvertedContrast: () => void;

    // ── Accessibility — Reading Aids ──────────────────────────────────
    toggleScreenReader: () => void;
    startScreenReader: () => void;
    stopScreenReader: () => void;

    toggleReadingMask: () => void;
    startReadingMask: () => void;
    stopReadingMask: () => void;

    toggleReadingGuide: () => void;
    startReadingGuide: () => void;
    stopReadingGuide: () => void;

    toggleDyslexiaFont: () => void;
    startDyslexiaFont: () => void;
    stopDyslexiaFont: () => void;

    // ── Accessibility — Cursor & Highlighting ─────────────────────────
    toggleBigCursor: () => void;
    startBigCursor: () => void;
    stopBigCursor: () => void;

    toggleHighlightLinks: () => void;
    startHighlightLinks: () => void;
    stopHighlightLinks: () => void;

    toggleHighlightHeadings: () => void;
    startHighlightHeadings: () => void;
    stopHighlightHeadings: () => void;

    // ── Language Control ──────────────────────────────────────────────
    setLanguagePortugues: () => void;
    setLanguageEspanhol: () => void;
    setLanguageIngles: () => void;
  }

  /* ------------------------------------------------------------------ */
  /*  RybenaDOM singleton instance                                      */
  /* ------------------------------------------------------------------ */

  interface RybenaDOMInstance {
    getRybenaScripts: (mode?: 'hidden') => void;
  }

  /* ------------------------------------------------------------------ */
  /*  Window augmentation                                               */
  /* ------------------------------------------------------------------ */

  interface Window {
    RybenaApi?: {
      getInstance: () => RybenaApiInstance;
    };
    RybenaDOM?: {
      getInstance: () => RybenaDOMInstance;
    };
  }

  // Allow bare `RybenaApi` / `RybenaDOM` usage (the CDN script exposes
  // these as globals, not just as properties of `window`).
  // eslint-disable-next-line no-var
  var RybenaApi: Window['RybenaApi'];
  // eslint-disable-next-line no-var
  var RybenaDOM: Window['RybenaDOM'];
}

export {};
