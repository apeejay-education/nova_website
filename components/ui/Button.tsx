"use client";

import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-nova-blue text-white hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-nova-blue focus:ring-offset-2",
  secondary:
    "bg-transparent text-nova-indigo border-2 border-nova-indigo hover:bg-nova-frost focus:outline-none focus:ring-2 focus:ring-nova-indigo focus:ring-offset-2",
  ghost:
    "bg-transparent text-nova-blue underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-nova-blue focus:ring-offset-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-7 py-3.5 text-base",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", fullWidth = false, className = "", children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-full font-semibold leading-none transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    return (
      <button
        ref={ref}
        className={[
          base,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? "w-full" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
