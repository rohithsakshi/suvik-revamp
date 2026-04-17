import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gold" | "charcoal";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm text-sm font-semibold transition-all px-8 py-3.5 tracking-wide uppercase active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",

          (variant === "default" || variant === "gold") &&
          "bg-gold-gradient text-white hover:opacity-90 shadow-lg shadow-gold/20 shimmer",

          variant === "charcoal" &&
          "bg-charcoal text-white hover:bg-charcoal-light shadow-xl shadow-charcoal/10",

          variant === "outline" &&
          "border border-charcoal/20 text-charcoal hover:bg-charcoal/5",

          variant === "ghost" &&
          "text-charcoal hover:bg-beige/50",

          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };