import type { Metadata } from 'node_modules/next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Maryam Fashion Arts | Luxury Pakistani Bridal & Pret',
  description: 'Where Elegance Meets Tradition. Shop exclusive bridal wear, luxury pret, unstitched collections, and custom bespoke stitching at maryanfashionart.pk.',
  openGraph: {
    title: 'Maryam Fashion Arts',
    description: 'Exquisite Pakistani Couture & Luxury Fashion',
    url: 'https://maryanfashionart.pk',
    siteName: 'Maryam Fashion Arts',
    type: 'website',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-luxury-black text-luxury-white antialiased">
        {children}
      </body>
    </html>
  );
}
