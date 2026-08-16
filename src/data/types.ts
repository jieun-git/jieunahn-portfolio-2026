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
  /** techReasons 블록의 제목 — 없으면 기본 제목이 쓰인다 */
  techReasonsHeading?: string;
  /** 회고 — 작성 전이면 비워두고, 채워지면 상세 페이지에 표시됨 */
  retrospective?: string[];
}

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  /** 재직 중 참여한 주요 프로젝트 — 없으면 렌더링되지 않음 */
  projects?: { name: string; desc: string; period: string }[];
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
  /** 대표 프로젝트 — Projects 그리드에서 전체 폭으로 렌더링됨 */
  featured?: boolean;
  /** 이 프로젝트에서 파생된 케이스 스터디 slug 목록 */
  caseSlugs?: string[];
}

export interface Highlight {
  value: string;
  label: string;
  caseSlug: string;
}
