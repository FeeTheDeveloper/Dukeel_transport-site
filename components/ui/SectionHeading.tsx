import { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Alignment = "left" | "center" | "right";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  as?: HeadingLevel;
  align?: Alignment;
  className?: string;
}

const alignmentStyles: Record<Alignment, string> = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
};

/**
 * SectionHeading component for consistent section titles.
 * Supports title, optional subtitle, and alignment options.
 */
export function SectionHeading({
  title,
  subtitle,
  children,
  as: Component = "h2",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${alignmentStyles[align]} ${className}`}>
      <Component className="text-primary mb-4">{title}</Component>
      {subtitle && (
        <p className="text-steel text-lg leading-relaxed mb-6">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
