import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RuleLine } from "@/components/ui/RuleLine";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  visual?: ReactNode;
}

export function PageHero({ eyebrow, title, description, crumbs, visual }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 lg:pb-28 lg:pt-48">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120%] bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(49,95,232,0.08),transparent)]" />

      <div className="edge container-max">
        <Breadcrumbs items={crumbs} />

        <div className={visual ? "mt-8 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : "mt-8 max-w-3xl"}>
          <div>
            <Reveal>
              <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
                <RuleLine />
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-[clamp(2.3rem,5vw,3.6rem)] font-display font-medium leading-[1.08] tracking-[-0.01em] text-ink text-balance">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                {description}
              </p>
            </Reveal>
          </div>
          {visual && <Reveal delay={0.1}>{visual}</Reveal>}
        </div>
      </div>
    </section>
  );
}
