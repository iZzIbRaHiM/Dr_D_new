import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-white/10 bg-slate-900/80 px-4 py-2 text-white placeholder:text-slate-500",
          "transition-all duration-200",
          "focus:outline-none focus:border-gold focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] focus:ring-1 focus:ring-gold/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
