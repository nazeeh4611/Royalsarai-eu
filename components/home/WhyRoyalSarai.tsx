"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Building2, Layers3, ShieldCheck } from "lucide-react";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { RuleLine } from "@/components/ui/RuleLine";
import { Parallax } from "@/components/ui/Parallax";
import { MediaFrame } from "@/components/media/MediaFrame";

const points = [
  {
    Icon: Building2,
    title: "Licensed, accountable practice",
    description:
      "Structured as a licensed technology company with a clear scope of activities, so every engagement sits within a defined, auditable practice — not an informal freelance arrangement.",
  },
  {
    Icon: Layers3,
    title: "One partner, four disciplines",
    description:
      "Web, security, systems and networks handled by a single accountable team — not four vendors passing responsibility between each other.",
  },
  {
    Icon: ShieldCheck,
    title: "Engineered, not templated",
    description:
      "Every engagement is scoped around how your business actually operates, from architecture decisions through to delivery.",
  },
];

export function WhyRoyalSarai() {
  const orbitRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(orbitRef.current, {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 60,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-paper-dim py-16 lg:py-24">
      <svg
        viewBox="0 0 800 800"
        className="pointer-events-none absolute -left-40 top-1/3 hidden h-[640px] w-[640px] opacity-[0.35] text-line-strong xl:block"
        aria-hidden="true"
      >
        <g ref={orbitRef}>
          <circle cx="400" cy="400" r="220" stroke="currentColor" strokeOpacity="0.5" />
          <circle cx="400" cy="400" r="320" stroke="currentColor" strokeOpacity="0.35" />
          <circle cx="400" cy="400" r="140" style={{ stroke: "var(--ink)" }} strokeOpacity="0.4" />
          <circle cx="620" cy="400" r="5" style={{ fill: "var(--ink)" }} />
          <circle cx="400" cy="80" r="4" fill="currentColor" />
          <circle cx="180" cy="470" r="4" fill="currentColor" />
          <circle cx="500" cy="620" r="3.5" style={{ fill: "var(--ink)" }} />
        </g>
      </svg>

      <div className="edge container-max relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
              <RuleLine />
              Why Royal Sarai Technologies
            </span>
            <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.6rem)] font-display font-medium leading-[1.05] tracking-[-0.01em] text-ink text-balance">
              Structured to work wherever your business does.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[5/4] w-full max-w-none">
              <Parallax
                speed={0.08}
                className="absolute inset-0 right-[10%] top-0 h-[80%] w-[90%]"
              >
                <MediaFrame
                  id="home-why-royal-sarai"
                  scene="grid"
                  tone="indigo"
                  rounded="lg"
                  className="h-full w-full shadow-[var(--shadow-lg)]"
                />
              </Parallax>
              <Parallax
                speed={0.16}
                className="absolute bottom-0 right-0 hidden h-[48%] w-[42%] sm:block"
              >
                <div className="h-full w-full rounded-[var(--radius-md)] border-[3px] border-paper-dim shadow-[var(--shadow-lg)]">
                  <MediaFrame
                    id="home-why-royal-sarai-badge"
                    scene="skyline"
                    tone="blue"
                    rounded="md"
                    className="h-full w-full"
                  />
                </div>
              </Parallax>
            </div>
          </Reveal>
        </div>

        <Stagger
          variant="pop"
          className="mt-14 grid gap-10 border-t border-line-strong pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14"
        >
          {points.map((point) => (
            <div key={point.title} data-reveal="pop">
              <span className="flex size-11 items-center justify-center rounded-[var(--radius-sm)] bg-ink/5">
                <point.Icon className="size-5 text-ink" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {point.description}
              </p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
