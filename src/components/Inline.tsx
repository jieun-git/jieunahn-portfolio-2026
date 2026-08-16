import Link from "next/link";
import type { ReactNode } from "react";

/**
 * 데이터 문자열의 경량 마크업 렌더러.
 * **볼드**, `코드`, [링크](url)를 지원하고,
 * 본문에 등장하는 라이브러리·기술 스택 이름은 자동으로 강조 표기한다.
 */
export function Inline({ text }: { text: string }) {
  return <>{parse(text)}</>;
}

/** 본문에서 자동 강조할 라이브러리·기술 스택 이름 (긴 이름을 앞에 둘 것) */
const TECH_TERMS = [
  "Apache ECharts",
  "TanStack Query",
  "styled-components",
  "Ant Design",
  "html-to-image",
  "react-to-pdf",
  "nds-icons",
  "Moment.js",
  "Day.js",
  "Storybook",
  "Playwright",
  "TypeScript",
  "JavaScript",
  "WebSocket",
  "AI Skill",
  "ECharts",
  "AG Grid",
  "Recoil",
  "Redux",
  "React",
  "knip",
  "Vite",
  "SCSS",
  "Vue",
  "i18n",
];

const TECH_RE = new RegExp(
  `(\\b(?:${TECH_TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b)`,
  "g",
);

function TechChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-[#EFEDEC] px-1.5 py-0.5 text-[0.92em] font-semibold text-[#E0584D]">
      {children}
    </span>
  );
}

/** 일반 텍스트 조각에서 기술명을 찾아 TechChip으로 감싼다 */
function renderPlain(text: string, keyPrefix: number): ReactNode[] {
  return text.split(TECH_RE).map((part, i) =>
    i % 2 === 1 ? <TechChip key={`${keyPrefix}-${i}`}>{part}</TechChip> : part,
  );
}

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function parse(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-gray-900">
          {renderPlain(part.slice(2, -2), i)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      const content = part.slice(1, -1);
      // 백틱 표기라도 라이브러리 이름이면 기술 스택 스타일로 표기
      if (TECH_TERMS.includes(content)) {
        return <TechChip key={i}>{content}</TechChip>;
      }
      return (
        <code
          key={i}
          className="rounded-md bg-lblue px-1.5 py-0.5 font-mono text-[0.85em] text-gray-900"
        >
          {content}
        </code>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return (
        <Link
          key={i}
          href={href}
          className="font-bold text-gray-900 underline decoration-mblue decoration-[3px] underline-offset-2 hover:decoration-lyellow"
        >
          {label}
        </Link>
      );
    }
    return renderPlain(part, i);
  });
}
