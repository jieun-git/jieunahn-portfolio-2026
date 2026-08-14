"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const anchors = [
  { id: "highlights", href: "/#highlights", label: "Highlights" },
  { id: "career", href: "/#career", label: "Career" },
  { id: "case-studies", href: "/#case-studies", label: "Case Studies" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "about", href: "/#about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("");

  // 홈에서 현재 보고 있는 섹션을 추적해 메뉴에 표시 (scrollspy)
  useEffect(() => {
    if (!isHome) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const a of anchors) {
      const el = document.getElementById(a.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [isHome]);

  return (
    <header className="print-hidden fixed inset-x-0 top-0 z-50 border-b-2 border-lblue bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="text-sm font-extrabold tracking-tight text-gray-900">
          JIEUN AHN.
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center sm:flex">
            {anchors.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className={`rounded-xl px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isHome && active === a.id
                    ? "bg-lyellow font-bold text-gray-900"
                    : "text-ink hover:bg-lblue hover:text-gray-900"
                }`}
              >
                {a.label}
              </Link>
            ))}
          </div>
          {!isHome && (
            <Link
              href="/"
              className="rounded-xl px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-lblue hover:text-gray-900 sm:hidden"
            >
              ← Home
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
