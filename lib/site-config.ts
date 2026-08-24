/**
 * Central, editable source of truth for business-facing content.
 * This build is positioned entirely for the European market — messaging
 * leads with European relevance, not the company's UAE registration.
 * Legal/registration fields below (licence, commercial register, chamber
 * membership) are sourced from the Dubai DET trade licence (No. 1642077)
 * and Chamber of Commerce membership certificate (No. 696416) — kept
 * accurate as factual company information, but not the marketing lead.
 * Placeholder fields are marked explicitly — replace them once the client
 * confirms final values.
 */

export const siteConfig = {
  legalName: "ROYAL SARAI TECHNOLOGIES L.L.C",
  legalNameArabic: "رويال سراي للتكنولوجيا ش.ذ.م.م",
  shortName: "Royal Sarai Technologies",
  legalStructure: "Limited Liability Company – Single Owner (LLC-SO)",

  location: {
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  registration: {
    licenseNumber: "1642077",
    commercialRegisterNumber: "2903403",
    chamberMembershipNumber: "696416",
  },

  licensedActivities: [
    {
      name: "Web-Design",
      slug: "web-design-development",
      label: "Web Design & Development",
    },
    {
      name: "Data Management & Cyber Security Services",
      slug: "data-management-cyber-security",
      label: "Data Management & Cybersecurity",
    },
    {
      name: "Computer Systems & Communication Equipment Software Design",
      slug: "computer-systems-software",
      label: "Computer Systems & Software",
    },
    {
      name: "Information Technology Network Services",
      slug: "it-network-services",
      label: "IT Network Services",
    },
  ],

  // Markets the company is positioned to serve — used on the Global Markets
  // page and in homepage messaging. These describe target markets/regions,
  // not physical offices; never render this list as "our offices in...".
  // Europe is listed first since this build targets European buyers first.
  globalMarkets: [
    "Europe",
    "Germany",
    "United States",
    "Japan",
    "Asia",
    "GCC",
  ],

  contact: {
    phoneDisplay: "+374 336 88080",
    phoneHref: "tel:+37433688080",
    email: "info@royalsarai.com",
    // PLACEHOLDER — digits only (country code, no "+", no spaces), used to
    // build the wa.me deep link in the WhatsApp widget. This is not a real,
    // monitored WhatsApp Business number yet — replace before launch.
    whatsappNumber: "971500000000",
  },

  // Single point of truth for the site's canonical domain — every
  // canonical URL, OG/Twitter tag, sitemap entry and JSON-LD @id/url
  // derives from this one value; nothing else in the codebase hardcodes
  // a domain.
  siteUrl: "https://royalsarai.com",

  // Primary nav matches the client-specified page set. Industries and
  // Insights stay live as pages (linked from the footer) but sit off the
  // primary nav to keep it at the client's five items.
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Global Markets", href: "/global-markets" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],

  socialLinks: [] as { label: string; href: string }[],
};

export type SiteConfig = typeof siteConfig;
