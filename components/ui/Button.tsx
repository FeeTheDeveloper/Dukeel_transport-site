import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-accent text-white
    hover:bg-accent-dark
    focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    active:bg-accent-dark
  `,
  secondary: `
    bg-primary text-white
    hover:bg-primary-light
    focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
    active:bg-primary-dark
  `,
  ghost: `
    bg-transparent text-primary
    hover:bg-light
    focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
    active:bg-light-dark
    border border-primary
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

/**
 * Button component with primary, secondary, and ghost variants.
 * Includes accessible focus states and hover interactions.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-semibold
        rounded-lg
        transition-colors duration-200
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
