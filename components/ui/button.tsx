import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-white text-black shadow-glow hover:-translate-y-0.5 hover:bg-violet-100",
        variant === "secondary" &&
          "border border-white/15 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/15",
        variant === "ghost" && "text-white/75 hover:bg-white/10 hover:text-white",
        className,
      )}
      {...props}
    />
  );
}
