import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-ink">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Tag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={
        accent
          ? "inline-flex items-center rounded-lg bg-lyellow px-3 py-1 text-xs font-bold text-gray-900"
          : "inline-flex items-center rounded-lg bg-lblue px-3 py-1 text-xs font-semibold text-gray-900"
      }
    >
      {children}
    </span>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`print-avoid-break rounded-xl border-2 border-mblue bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}
