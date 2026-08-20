import type { MouseEventHandler, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FOUNDER_GROUP_URL, founderGroupIsAvailable } from "@/config/founderGroup";

interface FounderGroupLinkProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const FounderGroupLink = ({
  children,
  className,
  onClick,
  size = "default",
  variant = "calm",
}: FounderGroupLinkProps) => {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (!founderGroupIsAvailable) {
    // Sin enlace real el botón no debe parecer pulsable: se anuncia como
    // deshabilitado, es alcanzable por teclado y dice por qué no funciona.
    return (
      <span
        role="link"
        aria-disabled="true"
        tabIndex={0}
        title="El enlace del grupo estará disponible próximamente"
        className={cn(
          classes,
          "cursor-not-allowed select-none opacity-60 saturate-50 shadow-none hover:!translate-y-0 hover:!shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
      >
        {children}
        <span className="sr-only"> (disponible próximamente)</span>
      </span>
    );
  }

  return (
    <a
      href={FOUNDER_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={classes}
    >
      {children}
    </a>
  );
};

export default FounderGroupLink;
