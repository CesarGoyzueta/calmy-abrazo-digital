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
    return (
      <span
        role="link"
        aria-disabled="true"
        title="El enlace del grupo estará disponible próximamente"
        className={cn(
          classes,
          "cursor-not-allowed select-none opacity-80 saturate-[0.82] shadow-none hover:!translate-y-0 hover:!bg-secondary hover:!shadow-none",
        )}
      >
        {children}
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
