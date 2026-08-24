import type { Metadata } from "next";
import { Globe2, Clock, FileSignature } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { RuleLine } from "@/components/ui/RuleLine";
import { MediaFrame } from "@/components/media/MediaFrame";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Global Markets",
  description:
    "Royal Sarai Technologies is structured for remote-first, cross-border delivery — positioned for European businesses first, and built to work with clients across other international markets too.",
  alternates: { canonical: "/global-markets" },
  openGraph: {
    title: `Global Markets | ${siteConfig.shortName}`,
    description: "Positioned for Europe. Structured for the world.",
    url: `${siteConfig.siteUrl}/global-markets`,
  },
};

const globalFAQs = [
  {
    question: "Do we need to be in the same location to work with you?",
    answer:
      "No. Delivery is fully digital — design reviews, engineering, and project management all run through standard remote tools, regardless of where the client is based.",
  },
  {
    question: "How do you handle time zone differences?",
    answer:
      "We agree a shared working window with every international client during scoping, and default to asynchronous updates outside of it so progress doesn't stall between overlap hours.",
  },
  {
    question: "Can you contract with a company registered in Europe?",
    answer:
      "Yes. Our memorandum of association permits us to establish branches, offices and agencies abroad, and we structure engagements and agreements accordingly on a case-by-case basis.",
  },
];

export default function GlobalMarketsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Global Markets" }]),
          faqSchema(globalFAQs),
        ]}
      />

      <PageHero
        eyebrow="Global Markets"
        title="Positioned for Europe. Structured for the world."
        description="Royal Sarai Technologies is built around a remote-first delivery model, with European clients as the primary focus — the same accountable team, process and standard of delivery wherever a client is based."
        crumbs={[{ label: "Home", href: "/" }, { label: "Global Markets" }]}
      />

      <section className="border-t border-line bg-paper py-14 lg:py-20">
        <div className="edge container-max">
          <Reveal>
            <div className="mx-auto aspect-[21/9] max-w-5xl overflow-hidden rounded-[var(--radius-lg)]">
              <MediaFrame id="global-markets-hero" scene="mesh" tone="blue" rounded="none" className="h-full w-full" priority />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-24 lg:py-28">
        <div className="edge container-max">
          <Reveal className="max-w-2xl">
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
              <RuleLine />
              Markets we serve
            </span>
            <p className="mt-6 font-display text-[clamp(1.3rem,2vw,1.7rem)] font-medium leading-[1.45] text-ink text-balance">
              Positioned for Europe, structured to work with businesses well
              beyond it.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              These are the markets our delivery model is built around, not
              a list of offices — we don&rsquo;t claim locations we
              don&rsquo;t have. What we do have is a legal structure that
              permits international expansion as client needs grow, and a
              cloud-based, remote-first delivery model that already works
              across time zones today.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="on-dark flex flex-col gap-6 rounded-[var(--radius-lg)] bg-paper p-8 text-ink sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <span className="font-mono text-sm text-ink-faint">01</span>
                <p className="mt-3 font-display text-3xl font-medium tracking-[-0.01em] text-ink sm:text-4xl">
                  Europe
                </p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                The primary market this site is built for — messaging,
                delivery scheduling and business hours are structured around
                European clients first.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-px grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {siteConfig.globalMarkets.slice(1).map((market, i) => (
              <div key={market} data-reveal className="bg-surface p-6">
                <span className="font-mono text-sm text-ink-faint">0{i + 2}</span>
                <p className="mt-3 text-lg font-semibold text-ink">{market}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-24 lg:py-28">
        <div className="edge container-max">
          <Reveal>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
              <RuleLine />
              How we work across borders
            </span>
          </Reveal>
          <Stagger className="mt-10 grid gap-10 sm:grid-cols-3">
            <div data-reveal>
              <Globe2 className="size-6 text-indigo" strokeWidth={1.6} />
              <h3 className="mt-4 text-base font-bold text-ink">Remote-first delivery</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Design, engineering and project management run through
                standard cloud tools — no requirement to be on-site.
              </p>
            </div>
            <div data-reveal>
              <Clock className="size-6 text-indigo" strokeWidth={1.6} />
              <h3 className="mt-4 text-base font-bold text-ink">Time-zone aware scheduling</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A shared working window is agreed with every international
                client, with async updates outside of it.
              </p>
            </div>
            <div data-reveal>
              <FileSignature className="size-6 text-indigo" strokeWidth={1.6} />
              <h3 className="mt-4 text-base font-bold text-ink">Structured agreements</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Engagements and contracts are scoped to fit a client&rsquo;s
                own jurisdiction and requirements wherever possible.
              </p>
            </div>
          </Stagger>
        </div>
      </section>

      <FAQSection items={globalFAQs} eyebrow="Working with us" title="Cross-border, practically speaking" />

      <CTASection />
    </>
  );
}
