import '../css/styles.css';
import '../css/location.css';
import { site } from '../data/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | 24/7 Garage Door Service in Miami, FL`,
    template: `%s | ${site.brand}`,
  },
  applicationName: site.brand,
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: '/favicon.svg',
    apple: '/img/logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: site.brand,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
