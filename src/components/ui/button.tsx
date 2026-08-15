import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "rounded-lg bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "rounded-lg hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        calm: "rounded-full bg-secondary text-secondary-foreground shadow-[0_10px_24px_-12px_rgba(32,125,116,0.62)] hover:bg-secondary/90 hover:-translate-y-0.5",
        "calm-outline": "border border-primary/20 bg-card/70 text-primary hover:bg-primary/5 rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-7 text-sm",
        xl: "h-12 px-8 text-sm md:text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
