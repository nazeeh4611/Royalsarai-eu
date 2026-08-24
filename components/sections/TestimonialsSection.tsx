import { Reveal } from "@/components/ui/Reveal";
import { Testimonials } from "@/components/ui/Testimonials";

interface TestimonialsSectionProps {
  eyebrow?: string;
  title?: string;
  className?: string;
}

export function TestimonialsSection({
  eyebrow = "Client feedback",
  title = "What clients are saying",
  className = "border-t border-line bg-paper-dim py-16 lg:py-24",
}: TestimonialsSectionProps) {
  return (
    <section className={className}>
      <div className="edge container-max">
        <Reveal>
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
            <span className="h-px w-6 shrink-0 bg-blue" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 className="mt-4 max-w-lg text-[clamp(2.2rem,4.2vw,3.6rem)] font-display font-medium leading-[1.05] tracking-[-0.01em] text-ink">
            {title}
          </h2>
        </Reveal>
        <Reveal variant="fade" delay={0.15}>
          <Testimonials placeholder className="mt-14" />
        </Reveal>
      </div>
    </section>
  );
}
