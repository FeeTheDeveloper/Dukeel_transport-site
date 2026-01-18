import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/**
 * Card component for content containers.
 * Supports hover effects and various padding options.
 */
export function Card({
  children,
  className = "",
  padding = "md",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-xl
        border border-border
        shadow-sm
        ${paddingStyles[padding]}
        ${hover ? "transition-shadow duration-200 hover:shadow-md" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/**
 * Card header section for titles and actions.
 */
export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`border-b border-border pb-4 mb-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card body section for main content.
 */
export function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={className}>{children}</div>;
}

/**
 * Card footer section for actions and secondary content.
 */
export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`border-t border-border pt-4 mt-4 ${className}`}>
      {children}
    </div>
  );
}
