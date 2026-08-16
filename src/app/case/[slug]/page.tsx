import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/Blocks";
import { Inline } from "@/components/Inline";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/ui";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-2.5 text-xl font-extrabold text-gray-900">
      <span aria-hidden className="h-3.5 w-3.5 rounded-full border-[3px] border-mblue bg-lyellow" />
      {children}
    </h2>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/case/[slug]">) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((c) => c.slug === cs.slug);
  const prev = sorted[idx - 1];
  const next = sorted[idx + 1];

  return (
    <>
      <Nav />
      <main className="flex-1 pt-14">
        <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
          {/* 헤더 */}
          <Link
            href="/#case-studies"
            className="print-hidden text-sm font-bold text-ink transition-colors hover:text-gray-900"
          >
            ← Case Studies
          </Link>
          <div className="mt-4 flex items-center gap-2">
            <Tag accent>{cs.metric}</Tag>
            <span className="text-sm font-medium text-ink">{cs.project}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {cs.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            <Inline text={cs.summary} />
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {cs.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>

          {/* 본문 */}
          <div className="mt-12 space-y-12">
            {cs.sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <SectionHeading>{section.heading}</SectionHeading>
                  <Blocks blocks={section.blocks} />
                </section>
              </Reveal>
            ))}

            {cs.techReasons && cs.techReasons.length > 0 && (
              <Reveal>
                <section>
                  <SectionHeading>{cs.techReasonsHeading ?? "사용 기술"}</SectionHeading>
                  <dl className="space-y-4">
                    {cs.techReasons.map((t) => (
                      <div key={t.name} className="rounded-xl border-2 border-mblue bg-white p-5">
                        <dt className="font-extrabold text-gray-900">{t.name}</dt>
                        <dd className="mt-1.5 leading-relaxed text-ink">{t.reason}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </Reveal>
            )}

            {cs.retrospective && cs.retrospective.length > 0 && (
              <section>
                <SectionHeading>회고</SectionHeading>
                <div className="space-y-3">
                  {cs.retrospective.map((p, i) => (
                    <p key={i} className="leading-relaxed text-ink">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* 이전/다음 */}
          <nav className="print-hidden mt-16 grid gap-4 border-t-2 border-lblue pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/case/${prev.slug}`}
                className="group rounded-xl border-2 border-mblue bg-white p-4 transition-all hover:-translate-y-0.5 hover:bg-lblue/30"
              >
                <p className="text-xs font-bold text-ink/70">← 이전 케이스</p>
                <p className="mt-1 text-sm font-bold text-gray-900">{prev.title}</p>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/case/${next.slug}`}
                className="group rounded-xl border-2 border-mblue bg-white p-4 text-right transition-all hover:-translate-y-0.5 hover:bg-lblue/30"
              >
                <p className="text-xs font-bold text-ink/70">다음 케이스 →</p>
                <p className="mt-1 text-sm font-bold text-gray-900">{next.title}</p>
              </Link>
            )}
          </nav>
        </article>
      </main>
    </>
  );
}
