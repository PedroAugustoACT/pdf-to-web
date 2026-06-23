import type { Metadata } from "next";
import { Crimson_Text, Geist_Mono } from "next/font/google";
import { RybenaProvider } from "@/components/RybenaProvider";
import "./globals.css";

const crimson = Crimson_Text({
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Documento Educacional",
  description: "Visualizador de documentos educacionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${crimson.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {children}
        <RybenaProvider />
      </body>
    </html>
  );
}
