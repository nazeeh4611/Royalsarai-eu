"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";

let pluginRegistered = false;
function ensureScrollTrigger() {
  if (!pluginRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    pluginRegistered = true;
  }
}

interface RuleLineProps {
  className?: string;
}

/**
 * The short accent rule that leads every section eyebrow sitewide — drawn
 * in from the left the first time it scrolls into view, the same treatment
 * the Hero's own eyebrow rule has always used. One shared component so the
 * draw-in timing/easing stays identical everywhere it appears, instead of
 * ~15 call sites each re-declaring a static span. Reduced-motion visitors
 * see the fully-drawn line immediately (no animation, no layout shift).
 */
export function RuleLine({ className }: RuleLineProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    ensureScrollTrigger();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power3.out",
          transformOrigin: "left center",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={ref}
      className={cn("h-px w-6 shrink-0 bg-blue", className)}
      aria-hidden="true"
    />
  );
}
