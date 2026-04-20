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
          "inline-flex items-center justify-center rounded-sm text-[11px] font-bold transition-all px-10 py-4 tracking-[0.2em] uppercase active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",

          (variant === "default" || variant === "gold") &&
          "bg-gold text-white hover:bg-charcoal shadow-lg shadow-gold/10",

          variant === "charcoal" &&
          "bg-charcoal text-white hover:bg-gold shadow-xl shadow-charcoal/10",

          variant === "outline" &&
          "border border-charcoal/10 text-charcoal hover:bg-charcoal/5",

          variant === "ghost" &&
          "text-charcoal hover:bg-gold/5",

          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };