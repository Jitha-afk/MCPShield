import * as React from "react";
import { cn } from "../../lib/utils";

// Shadcn-inspired Card with variants
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "relative flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm transition-colors",
  {
    variants: {
      variant: {
        default: "border-border/60",
        subtle: "border-border/40 bg-card/80 backdrop-blur-sm",
        clean: "border-transparent shadow-none", // no visible border
        outline: "border-border/80",
        ghost: "border-transparent bg-transparent shadow-none",
      },
      padding: {
        md: "gap-4",
        sm: "gap-2",
        none: "gap-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card"
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn(
      "grid auto-rows-min items-start gap-1.5 px-4 pt-4",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-title"
    className={cn("leading-none font-semibold text-sm", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-description"
    className={cn("text-muted-foreground text-xs", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn("px-4 pb-4", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, cardVariants };
