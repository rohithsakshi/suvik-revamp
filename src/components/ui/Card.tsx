import React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(201,169,110,0.1)] p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
