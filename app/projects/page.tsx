import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { sampleProjects } from "@/lib/projects-content";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/media/MediaFrame";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The kind of web design, cyber security, systems and network projects Royal Sarai Technologies takes on — and how to start one.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects | ${siteConfig.shortName}`,
    description:
      "The kind of web design, cyber security, systems and network projects we take on.",
    url: `${siteConfig.siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Projects" }])} />

      <PageHero
        eyebrow="Projects"
        title="The kind of work we take on."
        description="Full case studies are being published as engagements complete. Below is representative of the work each discipline covers today — get in touch to discuss a specific project."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        visual={<MediaFrame id="projects-hero" scene="stack" tone="blue" className="aspect-[4/3]" priority />}
      />

      <section className="border-t border-line bg-paper py-24 lg:py-28">
        <div className="edge container-max">
          <Stagger className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2">
            {sampleProjects.map((project, i) => (
              <div key={project.title} data-reveal className="bg-surface p-8 sm:p-10">
                <span className="font-mono text-sm text-ink-faint">0{i + 1}</span>
                <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.12em] text-blue">
                  {project.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-medium tracking-[-0.01em] text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16">
        <div className="edge container-max">
          <Reveal>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
              Have a project in mind? Tell us about it on the{" "}
              <Link
                href="/contact"
                className="font-semibold text-ink underline underline-offset-4 hover:text-indigo"
              >
                contact page
              </Link>{" "}
              and we&rsquo;ll follow up to scope the discovery phase.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
