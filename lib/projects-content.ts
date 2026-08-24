export interface ProjectItem {
  category: string;
  title: string;
  summary: string;
}

/**
 * No published case studies exist yet — inventing named client projects,
 * logos or outcomes is off the table (same rule as sampleTestimonials in
 * testimonials.ts). These entries describe the kind of work each
 * discipline takes on, not a specific client engagement, so the Projects
 * page has honest, useful content today. Replace with real case studies
 * (or fetch from a CMS) as engagements complete.
 */
export const sampleProjects: ProjectItem[] = [
  {
    category: "Web Design & Development",
    title: "Marketing sites, platforms and applications",
    summary:
      "Representative of the web work we take on: a business's public site, an internal platform or a customer-facing application, designed and engineered as one connected system rather than handed between teams.",
  },
  {
    category: "Data Management & Cybersecurity",
    title: "Security architecture and access control",
    summary:
      "Representative of the security work we take on: access control, data governance and security architecture built into a system from the start, not bolted on after an incident.",
  },
  {
    category: "Computer Systems & Software",
    title: "Custom systems built around how a business runs",
    summary:
      "Representative of the systems work we take on: custom software and computer systems scoped around a business's actual operating model, not a generic off-the-shelf template.",
  },
  {
    category: "IT Network Services",
    title: "Structured, connected network infrastructure",
    summary:
      "Representative of the network work we take on: design, deployment and management of the infrastructure that keeps every other system a business depends on connected.",
  },
];
