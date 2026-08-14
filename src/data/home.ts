import type { CareerItem, Highlight, ProjectItem } from "./types";

export const site = {
  name: "안지은",
  role: "Frontend Developer",
  years: "5년차",
  email: "anjieun95@naver.com",
  github: "https://github.com/jieun-git",
  intro: [
    "통합 모니터링 솔루션을 개발해 온 5년차 프론트엔드 개발자입니다. 여러 도메인의 대시보드와 알람 정책, 시스템 관리 화면을 만들어 왔습니다.",
    "반복되는 개발과 유지보수에서 비효율을 찾아 개선합니다. 최근에는 AI로 화면 개발을 자동화하고, 대규모 코드베이스의 품질을 정리하는 일을 하고 있습니다.",
  ],
};

export const highlights: Highlight[] = [
  {
    value: "8시간 → 1시간",
    label: "AI Skill 기반 반복 화면 개발 자동화",
    caseSlug: "automation",
  },
  {
    value: "1,749건",
    label: "정적 분석 + 회귀 검증 기반 Dead Code 제거",
    caseSlug: "dead-code",
  },
  {
    value: "171개",
    label: "콘솔 에러·워닝 원인 수정 (29개 메뉴 안정화)",
    caseSlug: "console-cleanup",
  },
  {
    value: "16개 화면",
    label: "Step 기반 공통 Validation 플로우 설계",
    caseSlug: "validation",
  },
];

export const careers: CareerItem[] = [
  {
    company: "Nkia",
    role: "Frontend Developer",
    period: "2021.11 ~ 재직 중",
    summary:
      "On-premise 통합 모니터링 플랫폼 Polestar 10을 중심으로, 구독형 SaaS 서비스와 IoT 안전 진단 솔루션의 UI를 개발했습니다. 여러 도메인으로 구성된 Polestar 10의 UI 일관성을 확보하기 위한 디자인 시스템도 구축했습니다.",
    areas: [
      "AI 기반 개발 자동화",
      "코드 품질 개선",
      "공통 Validation 설계",
      "디자인 시스템 구축",
      "대시보드 · 알람 정책 UI",
      "SaaS 빌링 · 조직 관리 UI",
      "실시간 데이터 시각화",
    ],
    stack: [
      "React",
      "TypeScript",
      "Recoil",
      "Redux",
      "TanStack Query",
      "Ant Design",
      "ag-Grid",
      "Apache ECharts",
      "Storybook",
      "WebSocket",
    ],
  },
  {
    company: "오비고",
    role: "Frontend Developer Intern",
    period: "2020.01 ~ 2020.06",
    summary:
      "Toyota 차량용 앱스토어의 애플리케이션 다운로드 진행 UI를 개발하고, 차량용 음악 애플리케이션 UI를 퍼블리싱했습니다.",
    areas: ["차량용 애플리케이션 UI", "퍼블리싱"],
    stack: ["Vue", "JavaScript", "HTML", "CSS"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Polestar 10",
    period: "2023.03 ~ 현재",
    featured: true,
    description:
      "EMS, APM, NMS, ITSM 등 다양한 모니터링 서비스를 통합해 대시보드, 알람·정책 관리, 시스템 관리 기능을 제공하는 On-premise 기반 통합 운영 플랫폼",
    bullets: [
      "공통 플랫폼(알람, 유지보수, 사용자 포털, Web URL) 및 도메인(SMS, AIOps) UI 개발",
      "대시보드, 알람 정책, 시스템 관리 등 주요 운영 화면 개발",
      "MR 교차 리뷰를 통해 프로젝트 컨벤션 준수 여부와 불필요한 디버깅 코드 등을 점검",
    ],
    stack: ["React", "TypeScript", "Recoil", "Ant Design", "ag-Grid", "Apache ECharts"],
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
      "기존 아이콘 패키지를 대체하는 `nds-icons`를 구축해 사내 Nexus에 패키지로 배포하고, 검색·카테고리 분류·소스 복사를 지원하는 아이콘 조회 페이지를 Storybook에 구현",
      "Modal, Confirm, Empty, Breadcrumb, Menu, Collapse 등 공통 UI 컴포넌트 개발 및 Storybook 문서화",
      "신규 개발이 중단된 Moment.js를 Day.js로 전환하고, Year/Month/Day/Time/DateTime 및 RangePicker를 하나의 공통 DatePicker로 통합 — Picker 종류별로 달랐던 동작을 통일하고 빠른 날짜 선택·구간 이동 기능 추가",
    ],
    stack: ["React", "TypeScript", "Ant Design", "Storybook", "Day.js"],
  },
  {
    name: "Polestar S",
    period: "2022.05 ~ 2022.11",
    description:
      "하이브리드 클라우드 환경의 서버 상태를 모니터링하고 장애 대응을 지원하는 구독형 SaaS 모니터링 서비스",
    bullets: [
      "로그인·회원가입부터 조직 관리, 빌링, 결제, 플랜 업·다운그레이드, 관리자 기능까지 서비스 이용 전반의 주요 UI 개발",
      "비밀번호 전달 시 평문 노출을 방지하기 위해 API 요청 전 SHA-512 기반 해시 처리 적용",
      "TanStack Query를 활용한 서버 상태 관리 및 API 데이터 조회·캐싱, i18n 기반 한국어·영어 다국어 UI 구현",
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
      "새로고침으로 확인하던 게이트웨이 검수 진행 상태를 WebSocket 기반 실시간 처리로 전환, 단계별 Step UI에 진행·실패 상태가 실시간 반영되도록 구현",
      "하나의 연속된 라인 차트에서 데이터 유형에 따라 구간별 색상을 다르게 표시하고, ECharts 기본 legend·tooltip 대신 운영 요구사항에 맞는 UI를 직접 구현",
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
      "전체 화면 구현, 컴포넌트 구조 구성 및 API 연동",
      "Ant Design 기반 공통 컴포넌트를 역할과 사용 목적에 따라 Data Display / Data Entry / Feedback / Layout / Navigation으로 분류해 구성",
      "Light/Dark 모드에서의 가독성과 UI 일관성을 고려해 직접 색상 체계를 정의하고 전역 테마 구성 — 모드 전환 시 서비스 전반의 스타일이 일관되게 변경",
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
