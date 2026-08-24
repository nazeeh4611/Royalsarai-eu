import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CallWidget } from "@/components/widgets/CallWidget";
import { JsonLd } from "@/components/seo/JsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Confident geometric-grotesk display face for headlines and the hero's
// word stack, paired against Manrope's clean humanist-grotesk body copy —
// two sans families in the same register, the way the European enterprise
// tech consultancies (Accenture, Capgemini, Sopra Steria, Devoteam) run
// their type systems: no decorative serif, hierarchy carried by weight and
// scale instead.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.shortName} | Technology Partner for European Businesses`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Royal Sarai Technologies delivers web design, cyber security, computer systems and IT network services under one accountable practice — for European businesses that need one reliable technology partner instead of several vendors.",
  keywords: [
    "technology partner for European businesses",
    "web design and development Europe",
    "cyber security services Europe",
    "IT network services",
    "data management and security",
    "computer systems and software",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} | Technology Partner for European Businesses`,
    description:
      "Web design, cyber security, computer systems and IT network services — delivered by one accountable team for European businesses.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Technology Partner for European Businesses`,
    description:
      "Web design, cyber security, computer systems and IT network services — delivered by one accountable team for European businesses.",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f33" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.siteUrl}/#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.legalNameArabic,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/apple-icon`,
  image: `${siteConfig.siteUrl}/apple-icon`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.countryCode,
  },
  areaServed: "Worldwide",
  knowsAbout: siteConfig.licensedActivities.map((a) => a.name),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  name: siteConfig.shortName,
  url: siteConfig.siteUrl,
  publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CallWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
