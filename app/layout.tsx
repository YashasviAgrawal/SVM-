import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { school } from "@/lib/site";
import { svm } from "@/lib/images";
import "./globals.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni", display: "swap", weight: ["500", "600", "700"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://svmjpr.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sharda Vidhya Mandir (SVM) | CBSE School in Ambabari, Sikar Road, Jaipur",
    template: "%s | Sharda Vidhya Mandir, Jaipur",
  },
  description:
    "Sharda Vidhya Mandir is a co-educational CBSE senior secondary school in Ambabari, Sikar Road, Jaipur, since 1987. Nursery to Class XII, Science, Commerce and Humanities, a 9.9-acre campus with a swimming pool.",
  keywords: [
    "CBSE school in Jaipur",
    "school in Ambabari",
    "school near Vidhyadhar Nagar",
    "Sikar Road school admission",
    "Sharda Vidhya Mandir",
    "Sharda Vidya Mandir",
    "SVM school Jaipur",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: school.name,
    images: [{ url: svm.campus, alt: "Sharda Vidhya Mandir campus" }],
  },
  icons: { icon: svm.logoGold, apple: svm.logoGold },
};

export const viewport: Viewport = {
  themeColor: "#1c2a4a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: school.name,
  alternateName: ["SVM Public School", "Sharda Vidya Mandir"],
  url: siteUrl,
  logo: `${siteUrl}${svm.logoGold}`,
  image: `${siteUrl}${svm.campus}`,
  foundingDate: String(school.founded),
  telephone: school.phones[0].tel,
  email: school.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${school.address.line1}, Sikar Road`,
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: school.address.pin,
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: school.geo.lat, longitude: school.geo.lng },
  sameAs: [school.social.facebook, school.social.instagram],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${bodoni.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.reveal-img{clip-path:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
