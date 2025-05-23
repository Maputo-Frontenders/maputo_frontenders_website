import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-mf-secondProposal text-mf-primary hover:bg-mf-secondProposal/90 truncate text-clip  flex items-center justify-center text-center rounded-lg px-5 py-3 group",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-mf-secondProposal text-mf-secondProposal bg-transparent hover:bg-mf-secondProposal/10 truncate text-clip  flex items-center justify-center rounded-lg px-5 py-3 group",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 truncate text-clip  flex items-center justify-center text-center rounded-lg px-5 py-3 group",
        ghost:
          "hover:bg-accent hover:text-accent-foreground truncate text-clip  flex items-center justify-center text-center rounded-lg px-5 py-3 group",
        link: "text-mf-secondProposal underline-offset-4 hover:underline truncate text-clip  flex items-center justify-center text-center rounded-lg px-5 py-3 group",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withArrow?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      withArrow = false,
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {isLoading && <Loader2 className="animate-spin size-4 ml-2" />}
        {!isLoading && withArrow && (
          <ArrowUpRight
            className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
            aria-hidden="true"
          />
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
