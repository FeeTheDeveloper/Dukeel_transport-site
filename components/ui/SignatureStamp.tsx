import { HTMLAttributes } from "react";

interface SignatureStampProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export function SignatureStamp({
  text = "Signature of Fee The Developer",
  className = "",
  ...props
}: SignatureStampProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none text-white/5 font-black uppercase tracking-[0.6em] ${className}`}
      {...props}
    >
      {text}
    </div>
  );
}
