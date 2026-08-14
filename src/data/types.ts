export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; text: string }
  | { type: "flow"; steps: { title: string; desc?: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "placeholder"; label: string }
  | { type: "callout"; text: string };

export interface CaseSection {
  heading: string;
  blocks: Block[];
}

export interface TechReason {
  name: string;
  reason: string;
}

export interface CaseStudy {
  slug: string;
  order: number;
  title: string;
  /** 카드에 노출되는 한 줄 요약 */
  summary: string;
  /** 카드·상세 상단의 핵심 수치 */
  metric: string;
  project: string;
  stack: string[];
  sections: CaseSection[];
  techReasons?: TechReason[];
  /** 회고 — 작성 전이면 비워두고, 채워지면 상세 페이지에 표시됨 */
  retrospective?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  areas: string[];
  stack: string[];
}

export interface ProjectItem {
  name: string;
  period: string;
  role?: string;
  description: string;
  bullets: string[];
  stack: string[];
  achievement?: string;
  links?: { label: string; url: string }[];
}

export interface Highlight {
  value: string;
  label: string;
  caseSlug: string;
}
