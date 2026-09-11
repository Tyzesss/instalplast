import logoLight from "@/assets/logo-instal-plast.png";
import logoOnDark from "@/assets/logo-instal-plast-on-dark.png";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** Kept for call-site compatibility; logo is an image wordmark. */
  wordmarkClassName?: string;
  /** White + orange wordmark for navy header/footer. Default: charcoal + orange. */
  onDark?: boolean;
};

export function BrandMark({ className, wordmarkClassName, onDark = false }: BrandMarkProps) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src={onDark ? logoOnDark : logoLight}
        alt={SITE_NAME}
        width={1113}
        height={251}
        className={cn("h-8 w-auto sm:h-9", wordmarkClassName)}
        decoding="async"
      />
    </span>
  );
}
