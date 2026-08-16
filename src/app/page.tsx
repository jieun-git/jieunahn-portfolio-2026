import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Inline } from "@/components/Inline";
import { Reveal } from "@/components/Reveal";
import { Card, Section, Tag } from "@/components/ui";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { about, careers, highlights, projects, site } from "@/data/home";
import type { ProjectItem } from "@/data/types";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-14">
        <Hero />
        <Highlights />
        <Career />
        <CaseStudies />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-16 pb-8 sm:pt-24 sm:pb-12">
      <p className="animate-fade-up text-sm font-extrabold tracking-wide text-ink uppercase">
        {site.role} · {site.years}
      </p>
      <h1
        className="animate-fade-up mt-4 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight"
        style={{ animationDelay: "100ms" }}
      >
        안녕하세요,
        <br />
        프론트엔드 개발자 <span className="marker rounded-xl px-2">안지은</span>입니다
      </h1>
      <div
        className="animate-fade-up mt-7 max-w-2xl space-y-3"
        style={{ animationDelay: "200ms" }}
      >
        {site.intro.map((p) => (
          <p key={p} className="leading-relaxed text-ink">
            {p}
          </p>
        ))}
      </div>
      <div
        className="print-hidden animate-fade-up mt-9 flex flex-wrap gap-3"
        style={{ animationDelay: "300ms" }}
      >
        <Link
          href="#case-studies"
          className="rounded-xl bg-mblue px-6 py-2.5 text-sm font-bold text-gray-900 transition-transform hover:-translate-y-0.5"
        >
          케이스 스터디 보기
        </Link>
        <Link
          href="#career"
          className="rounded-xl bg-lyellow px-6 py-2.5 text-sm font-bold text-gray-900 transition-transform hover:-translate-y-0.5"
        >
          경력 보기
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="rounded-xl bg-lblue px-6 py-2.5 text-sm font-bold text-gray-900 transition-transform hover:-translate-y-0.5"
        >
          연락하기
        </a>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <Section id="highlights" title="Key Highlights">
      <div className="grid gap-5 sm:grid-cols-2">
        {highlights.map((h, i) => (
          <Reveal key={h.caseSlug} delay={i * 80}>
            <Link
              href={`/case/${h.caseSlug}`}
              className="group print-avoid-break block h-full rounded-xl border-2 border-mblue bg-white p-6 transition-all hover:-translate-y-1 hover:bg-lblue/30"
            >
              <p className="inline-block rounded-xl bg-lpink px-2 text-2xl font-extrabold tracking-tight text-gray-900">
                {h.value}
              </p>
              <p className="mt-2 font-semibold text-gray-900">{h.label}</p>
              <p className="print-hidden mt-3 text-sm font-bold text-ink/60 transition-colors group-hover:text-gray-900">
                케이스 스터디 →
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Career() {
  return (
    <Section id="career" title="Career" subtitle="5년간의 실무 경험">
      <div className="space-y-6">
        {careers.map((c, i) => (
          <Reveal key={c.company} delay={i * 80}>
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-extrabold text-gray-900">
                  {c.company}
                  <span className="ml-2 text-base font-semibold text-ink">{c.role}</span>
                </h3>
                <p className="font-mono text-sm text-ink">{c.period}</p>
              </div>
              <p className="mt-4 leading-relaxed text-ink">
                <Inline text={c.summary} />
              </p>
              {c.projects && (
                <div className="mt-5">
                  <p className="text-xs font-extrabold tracking-wide text-ink uppercase">
                    주요 프로젝트
                  </p>
                  <ul className="mt-2 space-y-1">
                    {c.projects.map((p) => (
                      <li
                        key={p.name}
                        className="flex flex-wrap items-baseline gap-x-1.5 text-sm text-ink"
                      >
                        <span className="font-bold text-gray-900">{p.name}</span>
                        <span className="text-ink/50">·</span>
                        <span>{p.desc}</span>
                        <span className="font-mono text-xs text-ink/70">{p.period}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-5">
                <p className="text-xs font-extrabold tracking-wide text-ink uppercase">Tech</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CaseStudies() {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);
  return (
    <Section id="case-studies" title="Case Studies">
      <div className="grid gap-5 sm:grid-cols-2">
        {sorted.map((cs, i) => (
          <Reveal key={cs.slug} delay={(i % 2) * 80} className="h-full">
            <Link
              href={`/case/${cs.slug}`}
              className="group print-avoid-break flex h-full flex-col rounded-xl border-2 border-mblue bg-white p-6 transition-all hover:-translate-y-1 hover:bg-lblue/30"
            >
              <div className="flex items-center gap-2">
                <Tag accent>{cs.metric}</Tag>
                <span className="text-xs font-medium text-ink">{cs.project}</span>
              </div>
              <h3 className="mt-3 text-lg leading-snug font-extrabold text-gray-900">
                {cs.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink">
                <Inline text={cs.summary} />
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((b, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink">
          <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-mblue" />
          <span>
            <Inline text={b} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** 대표 프로젝트 — 전체 폭을 쓰고, 파생된 케이스 스터디로 연결된다 */
function FeaturedProject({ p }: { p: ProjectItem }) {
  const cases = (p.caseSlugs ?? []).map(getCaseStudy).filter((cs) => cs !== undefined);
  return (
    <Card>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Tag accent>대표 프로젝트</Tag>
        <h3 className="text-xl font-extrabold text-gray-900">{p.name}</h3>
        <p className="font-mono text-xs text-ink">{p.period}</p>
      </div>
      <p className="mt-3 max-w-3xl leading-relaxed text-ink">
        <Inline text={p.description} />
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs font-extrabold tracking-wide text-ink uppercase">담당 업무</p>
          <div className="mt-3">
            <Bullets items={p.bullets} />
          </div>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
        {cases.length > 0 && (
          <div>
            <p className="text-xs font-extrabold tracking-wide text-ink uppercase">
              이 프로젝트의 Case Studies {cases.length}건
            </p>
            <ul className="mt-3 space-y-1.5">
              {cases.map((cs) => (
                <li key={cs.slug}>
                  <Link
                    href={`/case/${cs.slug}`}
                    className="group flex items-baseline gap-3 rounded-xl border-2 border-lblue bg-white px-4 py-2.5 transition-colors hover:border-mblue hover:bg-lblue/30"
                  >
                    <span className="shrink-0 font-mono text-xs font-bold text-gray-900">
                      {cs.metric}
                    </span>
                    <span className="flex-1 text-sm leading-snug font-semibold text-gray-900">
                      {cs.title}
                    </span>
                    <span className="print-hidden shrink-0 text-sm text-ink/50 transition-colors group-hover:text-gray-900">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}

function ProjectCard({ p }: { p: ProjectItem }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-extrabold text-gray-900">{p.name}</h3>
        <p className="font-mono text-xs text-ink">{p.period}</p>
      </div>
      {p.role && <p className="mt-1 text-sm font-bold text-gray-900">{p.role}</p>}
      <p className="mt-3 text-sm leading-relaxed text-ink">
        <Inline text={p.description} />
      </p>
      <div className="mt-4 flex-1">
        <Bullets items={p.bullets} />
      </div>
      {p.achievement && (
        <div className="mt-4 rounded-xl bg-lpink px-4 py-3">
          <p className="text-xs font-extrabold tracking-wide text-ink uppercase">프로젝트 성과</p>
          <p className="mt-1.5 text-sm leading-relaxed font-semibold text-gray-900">
            🏆 {p.achievement}
          </p>
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </Card>
  );
}

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-5">
        {featured.map((p) => (
          <Reveal key={p.name}>
            <FeaturedProject p={p} />
          </Reveal>
        ))}
        <div className="grid gap-5 lg:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80} className="h-full">
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-5 sm:grid-cols-3">
        <Reveal>
          <Card className="h-full">
            <p className="text-xs font-extrabold tracking-wide text-ink uppercase">Education</p>
            <p className="mt-2 font-extrabold text-gray-900">{about.education.school}</p>
            <p className="mt-1 text-sm text-ink">{about.education.detail}</p>
            <p className="mt-1 font-mono text-xs text-ink">{about.education.period}</p>
          </Card>
        </Reveal>
        <Reveal delay={80}>
          <Card className="h-full">
            <p className="text-xs font-extrabold tracking-wide text-ink uppercase">Certificate</p>
            <p className="mt-2 font-extrabold text-gray-900">{about.certificate.name}</p>
            <p className="mt-1 font-mono text-xs text-ink">{about.certificate.date}</p>
          </Card>
        </Reveal>
        <Reveal delay={160}>
          <Card className="h-full">
            <p className="text-xs font-extrabold tracking-wide text-ink uppercase">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-sm font-bold text-gray-900 underline decoration-mblue decoration-2 underline-offset-2"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm font-bold text-gray-900 underline decoration-mblue decoration-2 underline-offset-2"
            >
              github.com/jieun-git
            </a>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-lblue py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-5 text-sm text-ink">
        <p>© 2026 {site.name}. Built with Next.js & Tailwind CSS.</p>
        <p>Last Updated: 2026.08</p>
      </div>
    </footer>
  );
}
