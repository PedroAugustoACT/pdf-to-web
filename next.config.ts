import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' cdn.rybena.com.br libras.rybena.com.br; connect-src 'self' libras.rybena.com.br tts.rybena.com.br dicio.rybena.com.br repository.rybena.com.br; frame-src repository.rybena.com.br; style-src 'self' 'unsafe-inline'; img-src 'self' data: cdn.rybena.com.br libras.rybena.com.br repository.rybena.com.br; font-src 'self' cdn.rybena.com.br repository.rybena.com.br; media-src 'self' repository.rybena.com.br; object-src 'none'" },
        ],
      },
    ];
  },
};

export default nextConfig;
