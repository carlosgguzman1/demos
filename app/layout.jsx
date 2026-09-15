import { Instrument_Sans, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const display = Instrument_Sans({
  subsets: ['latin'], weight: ['500','600','700'],
  variable: '--font-display', display: 'swap',
});
const body = Inter({
  subsets: ['latin'], weight: ['400','500','600'],
  variable: '--font-body', display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'], weight: ['400','500'],
  variable: '--font-mono', display: 'swap',
});

export const metadata = {
  title: 'Páginas de muestra',
  // Ningún demo se indexa en Google. No compiten con el sitio real del cliente.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
