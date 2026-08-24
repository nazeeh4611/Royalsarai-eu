/**
 * Central image registry.
 *
 * No stock-photo API key is available in this environment (Unsplash and
 * Pexels both require one; Unsplash's old key-free "Source" endpoint was
 * shut down in 2022). Every slot below therefore renders through
 * <MediaFrame>, which falls back to a custom abstract illustration
 * (see components/media/AbstractScene.tsx) instead of a broken <img>.
 *
 * TO SWAP IN REAL PHOTOGRAPHY LATER: fill in `src` (a local file under
 * /public or a configured remote domain) and `credit` on the relevant
 * entry below. MediaFrame automatically renders a real Next/Image once
 * `src` is present — no component changes required.
 */

export type MediaCategory =
  | "architecture"
  | "modern-office"
  | "enterprise-technology"
  | "cybersecurity"
  | "network-infrastructure"
  | "software-interface"
  | "abstract-technology"
  | "global-business";

export interface MediaCredit {
  name: string;
  href: string;
}

export interface MediaEntry {
  category: MediaCategory;
  alt: string;
  src?: string;
  credit?: MediaCredit;
  /** "cover" (default) crops to fill the frame — right for photography.
   * "contain" shows the whole image letterboxed — right for a mockup/
   * illustration where content near the edges matters. */
  fit?: "cover" | "contain";
}

function slot(entry: MediaEntry): MediaEntry {
  return entry;
}

export const mediaLibrary = {
  "home-hero-inset": slot({
    category: "architecture",
    alt: "City skyline, viewed from a modern office",
  }),
  "home-why-royal-sarai": slot({
    category: "modern-office",
    alt: "A modern office workspace with global operations monitoring",
    src: "/desk-worldmap.webp",
    fit: "cover",
  }),
  "home-why-royal-sarai-badge": slot({
    category: "cybersecurity",
    alt: "Server infrastructure with a network connectivity visualisation",
    src: "/server-room.webp",
    fit: "cover",
  }),
  "services-overview-hero": slot({
    category: "enterprise-technology",
    alt: "An enterprise technology workspace with monitoring dashboards",
    src: "/desk-worldmap.webp",
    fit: "cover",
  }),
  "service-web-hero": slot({
    category: "software-interface",
    alt: "A Royal Sarai Technologies web platform shown across desktop, tablet and mobile, with deployment status, analytics and technology stack panels",
    src: "/webdhome.webp",
    fit: "contain",
  }),
  "service-web-detail-hero": slot({
    category: "software-interface",
    alt: "A laptop showing the Royal Sarai Technologies web platform builder in use",
    src: "/webdesign.webp",
    fit: "contain",
  }),
  "service-cyber-hero": slot({
    category: "cybersecurity",
    src: "/cyberhome.png",
    fit: "cover",
    alt: "Data security operations and access control systems",
  }),
  "service-systems-hero": slot({
    category: "enterprise-technology",
    src: "/web.webp",
    fit: "contain",
    alt: "Interconnected computer systems and custom software",
  }),
  "service-network-hero": slot({
    category: "network-infrastructure",
    src: "/networkhome.webp",
    fit: "cover",
    alt: "Structured network infrastructure and connectivity hardware",
  }),
  "about-hero": slot({
    category: "architecture",
    src: "/rslogo.webp",
    fit: "contain",
    alt: "Royal Sarai Technologies wordmark",
  }),
  "about-approach": slot({
    category: "global-business",
    alt: "A desk with a globe, a world map and business reports, overlooking a city skyline",
    src: "/b.webp",
    fit: "cover",
  }),
  "industries-hero": slot({
    category: "global-business",
    alt: "Cross-industry enterprise technology in use",
    src: "/industry.webp",
    fit: "cover",
  }),
  "projects-hero": slot({
    category: "enterprise-technology",
    alt: "Server infrastructure representing technology work across web, security, systems and networks",
    src: "/server-room.webp",
    fit: "cover",
  }),
  "global-markets-hero": slot({
    category: "global-business",
    alt: "A world map showing connected network nodes across continents",
    src: "/global.webp",
    fit: "cover",
  }),
  "insights-hero": slot({
    category: "abstract-technology",
    alt: "Abstract technology and data visualisation",
    src: "/insihero.webp",
    fit: "contain",
  }),
  "insight-security-architecture-before-first-line-of-code": slot({
    category: "cybersecurity",
    src: "/hero.webp",
    fit: "cover",
    alt: "A macro view of circuit board architecture, representing system-level engineering",
  }),
  "insight-website-rebuild-vs-redesign": slot({
    category: "software-interface",
    src: "/heroside.webp",
    fit: "cover",
    alt: "Analytics dashboards reviewed on a laptop, representing a website rebuild decision",
  }),
  "insight-what-network-resilience-means-for-a-growing-business": slot({
    category: "network-infrastructure",
    src: "/herobgs.webp",
    fit: "cover",
    alt: "Abstract visualisation of connected network infrastructure",
  }),
  "contact-hero": slot({
    category: "modern-office",
    alt: "A modern office workspace with a global operations view",
    src: "/desk-worldmap.webp",
    fit: "cover",
  }),
} satisfies Record<string, MediaEntry>;

export type MediaId = keyof typeof mediaLibrary;
