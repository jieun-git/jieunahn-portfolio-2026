import type { CareerItem, Highlight, ProjectItem } from "./types";

export const site = {
  name: "안지은",
  role: "Frontend Developer",
  years: "5년차",
  email: "anjieun95@naver.com",
  github: "https://github.com/jieun-git",
  intro: [
    "통합 모니터링 솔루션을 개발해 온 5년차 프론트엔드 개발자입니다. 사용자 관점에서 불편한 지점을 발견하고 개선 방향을 제안해왔습니다.",
    "개발 과정에서는 반복 작업과 유지보수의 비효율을 줄여왔습니다. 최근에는 AI를 활용해 반복 화면 개발 시간을 약 8시간에서 1시간으로 단축하고, 코드베이스의 콘솔 에러와 워닝을 분석해 171건을 제거했습니다.",
    "기능 구현에 그치지 않고, 사용자 경험과 개발 효율을 함께 고민하며 더 나은 방향으로 개선하는 것을 중요하게 생각합니다.",
  ],
};

export const highlights: Highlight[] = [
  {
    value: "8시간 → 1시간",
    label: "AI를 활용한 반복 화면 개발 자동화",
    caseSlug: "automation",
  },
  {
    value: "1,749건",
    label: "정적 분석과 회귀 검증을 통한 Dead Code 제거",
    caseSlug: "dead-code",
  },
  {
    value: "171건",
    label: "29개 메뉴의 콘솔 에러·워닝 제거",
    caseSlug: "console-cleanup",
  },
  {
    value: "16개 화면",
    label: "공통 Validation 플로우 설계·적용",
    caseSlug: "validation",
  },
];

export const careers: CareerItem[] = [
  {
    company: "Nkia",
    role: "Frontend Developer",
    period: "2021.11 ~ 재직 중",
    summary:
      "통합 모니터링 플랫폼 Polestar 10을 중심으로, 구독형 SaaS 모니터링 서비스와 IoT 안전 진단 솔루션의 UI를 개발했습니다. Polestar 10의 UI 일관성을 위해 공통 컴포넌트와 사내 아이콘 라이브러리 구축에도 참여했습니다.",
    projects: [
      { name: "Polestar 10", desc: "통합 모니터링 플랫폼", period: "2023.03 ~ 2026.08" },
      { name: "NDS", desc: "Polestar 10 디자인 시스템", period: "2022.12 ~ 2023.07" },
      { name: "Polestar S", desc: "SaaS 모니터링 서비스", period: "2022.05 ~ 2022.11" },
      { name: "AIOTION", desc: "IoT 안전 진단 솔루션", period: "2022.03 ~ 2023.11" },
    ],
    stack: [
      "React",
      "TypeScript",
      "Recoil",
      "Redux",
      "Ant Design",
      "AG Grid",
      "TanStack Query",
      "ECharts",
      "styled-components",
      "SCSS",
    ],
  },
  {
    company: "오비고",
    role: "Frontend Developer Intern",
    period: "2020.01 ~ 2020.06",
    summary:
      "Toyota 차량용 앱스토어의 애플리케이션 다운로드 진행 UI를 개발하고, 차량용 음악 애플리케이션 UI를 퍼블리싱했습니다.",
    stack: ["Vue", "JavaScript", "HTML", "CSS"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Polestar 10",
    period: "2023.03 ~ 2026.08",
    featured: true,
    description:
      "EMS, APM, NMS, ITSM 등 다양한 모니터링 서비스를 통합한 On-premise 기반 통합 운영 플랫폼",
    bullets: [
      "공통 플랫폼(알람, 유지보수, 사용자 포털, Web URL) 및 도메인(SMS, AIOps) UI 개발",
      "대시보드, 알람 정책, 시스템 관리 등 주요 운영 화면 개발",
      "MR 교차 리뷰를 통해 프로젝트 컨벤션 준수 여부와 불필요한 디버깅 코드 등을 점검",
    ],
    stack: ["React", "TypeScript", "Recoil", "Ant Design", "AG Grid", "Apache ECharts", "SCSS"],
    caseSlugs: [
      "automation",
      "dead-code",
      "validation",
      "deploy-recovery",
      "console-cleanup",
      "drawer-refetch",
    ],
  },
  {
    name: "NDS (Nkia Design System)",
    period: "2022.12 ~ 2023.07",
    description:
      "다양한 도메인으로 구성된 Polestar 10의 UI 일관성과 컴포넌트 재사용성을 확보하기 위해 Ant Design을 기반으로 구축한 디자인 시스템",
    bullets: [
      "npm에 배포되어 있던 기존 아이콘 라이브러리 `nds-icons`를 사내 Nexus로 이관·배포하고, Storybook에 아이콘 섹션을 구성해 검색 및 클릭 시 아이콘 이름 복사 기능 구현",
      "Modal, Confirm, Empty, Breadcrumb, Menu, Collapse 등 공통 UI 컴포넌트 개발 및 Storybook 문서화",
      "Moment.js를 Day.js로 전환하고, 분리되어 있던 Picker를 하나의 공통 DatePicker로 통합해 일관된 사용 방식 구성",
    ],
    stack: ["React", "TypeScript", "Ant Design", "Storybook", "Day.js", "SCSS"],
  },
  {
    name: "Polestar S",
    period: "2022.05 ~ 2022.11",
    description:
      "하이브리드 클라우드 환경의 서버 상태를 모니터링하고 장애 대응을 지원하는 구독형 SaaS 모니터링 서비스",
    bullets: [
      "로그인·회원가입부터 조직 관리, 빌링, 결제, 플랜 업·다운그레이드, 관리자 기능까지 서비스 이용 전반의 주요 UI 개발",
      "TanStack Query를 활용한 서버 상태 관리 및 API 데이터 조회·캐싱",
      "styled-components 기반 공통 UI 구성 및 i18n을 적용한 한국어·영어 다국어 UI 구현",
    ],
    stack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Ant Design",
      "Apache ECharts",
      "styled-components",
      "i18n",
    ],
    achievement:
      "프로젝트 사업화 후 매출 12억 원 달성 · 2022년 글로벌 SaaS 육성 프로젝트 우수 과제 선정 및 장관상 수상",
  },
  {
    name: "AIOTION WSS",
    period: "2022.03 ~ 2023.11",
    description:
      "와이어로프를 사용하는 산업 현장의 안전 상태를 실시간으로 모니터링하고 이상 징후를 분석하는 IoT 솔루션",
    bullets: [
      "새로고침으로 확인하던 게이트웨이 검수 진행 상태를 WebSocket 기반 실시간 처리로 전환하고, 단계별 Step UI에 진행·실패 상태 반영",
      "연속된 라인 차트에서 데이터 유형에 따라 구간별 색상을 다르게 표시하고, 운영 요구사항에 맞게 ECharts legend·tooltip 커스터마이징",
      "`html-to-image` 기반 PDF 생성의 화질 저하·한글 인코딩 문제를 `react-to-pdf` 전환으로 해결",
    ],
    stack: ["React", "JavaScript", "Redux", "Ant Design", "Apache ECharts", "Less", "WebSocket"],
  },
  {
    name: "AI Prompt Manager",
    period: "2025.04 ~ 2025.08 · Side Project",
    role: "프론트엔드 단독 담당",
    description:
      "LLM 프롬프트의 버전·평가 데이터·테스트를 관리하기 위한 사내 AI팀용 프롬프트 관리 도구",
    bullets: [
      "전체 화면 구현 및 API 연동",
      "Ant Design 기반 공통 컴포넌트를 역할과 사용 목적에 따라 Data Display / Data Entry / Feedback / Layout / Navigation으로 분류해 구성",
      "Light/Dark 모드의 가독성과 UI 일관성을 고려해 색상 체계를 정의하고 전역 테마 구성",
    ],
    stack: ["React", "TypeScript", "Ant Design", "styled-components"],
  },
];

export const about = {
  education: {
    school: "서울여자대학교",
    detail: "정보보호학과 학사",
    period: "2015.03 ~ 2020.08",
  },
  certificate: {
    name: "정보처리기사",
    date: "2019.05",
  },
};
