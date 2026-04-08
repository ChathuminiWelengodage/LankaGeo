import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'LankaGeo — Precision SAR Satellite Intelligence',
  description:
    "Real-time SAR satellite monitoring for Sri Lanka's high-risk regions. Penetrating dense cloud cover for disaster mitigation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
