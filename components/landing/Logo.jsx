import { cn } from "cn";

/**
 * Logo mark: kotak kecil bordered berisi inisial "D" warna accent,
 * diikuti wordmark. Dipakai di Header dan Footer.
 */
export function Logo({ className, showWordmark = true }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex size-8 shrink-0 items-center justify-center rounded-md border border-accent bg-accent/10 font-heading text-sm font-bold text-accent"
      >
        D
      </span>
      {showWordmark ? (
        <span className="font-heading text-base leading-none font-bold tracking-tight text-foreground">
          Dian<span className="text-accent">Motor</span>
        </span>
      ) : null}
    </span>
  );
}

export default Logo;
