import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "ghost";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  cursorLabel?: string;
  showArrow?: boolean;
  strength?: number;
}

const variantClasses: Record<Variant, string> = {
  solid:
    "bg-ink text-paper transition-colors duration-200 hover:bg-ink-soft focus-visible:bg-ink-soft",
  outline:
    "border border-line text-ink bg-paper transition-colors duration-200 hover:bg-ink hover:text-paper hover:border-ink",
  ghost: "text-ink bg-transparent transition-colors duration-200 hover:text-ink-soft",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  showArrow = true,
}: MagneticButtonProps) {
  const isFilled = variant !== "ghost";

  const inner = (
    <span
      className={cn(
        "group inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors duration-200",
        isFilled && "rounded-[var(--radius-sm)] px-[20px] py-[13px]",
        variantClasses[variant],
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </span>
  );

  return href ? (
    <Link href={href} className="inline-block">
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
