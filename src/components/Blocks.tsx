import Image from "next/image";
import type { Block } from "@/data/types";
import { Inline } from "./Inline";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="leading-relaxed text-ink">
          <Inline text={block.text} />
        </p>
      );

    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 leading-relaxed text-ink">
              <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-mblue" />
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <pre className="overflow-x-auto rounded-xl bg-lblue p-5 text-sm leading-relaxed text-gray-900">
          <code>{block.text}</code>
        </pre>
      );

    case "flow":
      return <FlowDiagram steps={block.steps} />;

    case "image":
      return (
        <figure className="print-avoid-break">
          <div className="overflow-hidden rounded-xl border-2 border-mblue bg-white p-2">
            <Image
              src={block.src}
              alt={block.alt}
              width={1146}
              height={886}
              className="mx-auto max-h-[480px] w-auto rounded-lg"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-ink">{block.caption}</figcaption>
          )}
        </figure>
      );

    case "placeholder":
      return (
        <div className="print-hidden flex min-h-36 items-center justify-center rounded-xl border-[3px] border-dashed border-mblue bg-lblue/40 p-6">
          <p className="text-center text-sm font-medium text-ink">
            🖼 이미지 준비 중 — {block.label}
          </p>
        </div>
      );

    case "callout":
      return (
        <div className="rounded-xl bg-cream px-5 py-4 text-[0.95rem] leading-relaxed text-ink">
          💡 <Inline text={block.text} />
        </div>
      );
  }
}

function FlowDiagram({ steps }: { steps: { title: string; desc?: string }[] }) {
  return (
    <ol className="print-avoid-break space-y-0 rounded-xl bg-lblue/40 p-6">
      {steps.map((step, i) => (
        <li key={i} className="relative flex gap-4">
          {/* 번호 + 세로 연결선 */}
          <div className="flex flex-col items-center">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-mblue bg-white text-sm font-extrabold text-gray-900">
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden className="w-[3px] flex-1 rounded-full bg-mblue" />
            )}
          </div>
          <div className={i < steps.length - 1 ? "pb-6" : ""}>
            <p className="pt-1 font-bold leading-snug text-gray-900">{step.title}</p>
            {step.desc && (
              <p className="mt-1 text-sm leading-relaxed text-ink">
                <Inline text={step.desc} />
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
