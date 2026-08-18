import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "automation",
    order: 1,
    title: "AI를 활용한 반복 화면 개발 자동화",
    summary:
      "반복되던 CRUD·상세 화면 개발을 자동화해 약 8시간 걸리던 작업을 1시간으로 단축",
    metric: "8시간 → 1시간",
    project: "Polestar 10",
    stack: ["React", "TypeScript", "AI Skill"],
    sections: [
      {
        heading: "배경·문제",
        blocks: [
          {
            type: "p",
            text: "Polestar 10은 EMS, APM, NMS, ITSM 등 여러 모니터링 도메인을 통합한 플랫폼입니다. 신규 도메인이 추가될 때마다 CRUD 화면과 상세 화면(성능 조회, 구성, 설정, 이벤트 등)을 새로 개발해야 했는데, 화면 구조와 개발 패턴은 도메인마다 거의 동일하게 반복되고 있었습니다.",
          },
          {
            type: "p",
            text: "도메인 1개의 기본 화면 세트(CRUD + 상세 화면)를 직접 구현하는 데 **약 8시간**이 소요되었습니다.",
          },
        ],
      },
      {
        heading: "접근 — 반복 구현 규칙을 AI Skill로 구조화",
        blocks: [
          {
            type: "p",
            text: "코드 템플릿이나 제너레이터로 반복 화면을 생성할 수도 있었지만, 여러 도메인에 개별 구현된 화면을 분석해 공통 패턴을 추출하고 **템플릿을 직접 작성·유지해야 하는 비용**이 있었습니다.",
          },
          {
            type: "p",
            text: "기존 구현에서 반복되는 규칙을 분석하고, 이를 **AI가 재사용할 수 있는 형태로 구조화**해 화면 생성을 자동화하는 방식을 선택했습니다.",
          },
          {
            type: "list",
            items: [
              "AI로 기존 도메인 화면들의 CRUD·상세 화면 구현 패턴을 전수 분석",
              "공통 패턴을 **컴포넌트 구성 규칙, API 연동 규칙, 메뉴 구성 규칙**으로 정형화해 AI Skill로 구조화",
              "도메인 정보를 입력하면 CRUD 및 성능 조회·구성·설정·이벤트 등 상세 화면의 기본 구조가 생성되도록 자동화",
            ],
          },
          {
            type: "flow",
            steps: [
              { title: "기존 화면 전수 분석", desc: "여러 도메인에 개별 구현된 CRUD·상세 화면 패턴을 AI로 분석" },
              { title: "규칙 정형화 → AI Skill", desc: "컴포넌트 구성 · API 연동 · 메뉴 구성 규칙으로 구조화" },
              { title: "도메인명 입력", desc: "신규 도메인 정보만 전달" },
              { title: "화면 기본 구조 생성", desc: "CRUD + 성능 조회·구성·설정·이벤트 상세 화면" },
              { title: "동작 테스트 · 검토", desc: "생성 결과 확인까지 약 1시간" },
            ],
          },
        ],
      },
      {
        heading: "결과",
        blocks: [
          {
            type: "list",
            items: [
              "도메인당 **약 8시간** 소요되던 반복 구현 작업을 도메인 정보 입력부터 생성·동작 테스트·검토까지 **약 1시간으로 단축**",
              "자동화 방식을 FE 개발자 3명에게 공유해 **팀 내 신규 도메인 개발에 활용**",
            ],
          },
        ],
      },
    ],
    techReasonsHeading: "자동화 방식",
    techReasons: [
      {
        name: "AI Skill",
        reason:
          "프로젝트의 컴포넌트 구성·API 연동·메뉴 구성 규칙과 화면 생성 절차를 문서화해, 신규 도메인 개발 시 동일한 규칙을 반복 적용할 수 있도록 구성했습니다.",
      },
    ],
  },
  {
    slug: "dead-code",
    order: 2,
    title: "정적 분석과 회귀 검증을 통한 Dead Code 제거",
    summary:
      "knip 정적 분석과 교차 검증으로 삭제 대상을 선별하고, Playwright 회귀 테스트를 거쳐 미사용 코드 1,749건 제거",
    metric: "1,749건 제거",
    project: "Polestar 10",
    stack: ["knip", "Playwright"],
    sections: [
      {
        heading: "배경·문제",
        blocks: [
          {
            type: "p",
            text: "장기간 개발 과정에서 더 이상 사용되지 않는 코드가 코드베이스에 누적되어 있었습니다. 단순한 코드 정리를 넘어 유지보수 과정에서 실제 리스크가 되고 있었습니다.",
          },
          {
            type: "list",
            items: [
              "AI가 미사용 코드를 참조하거나 수정 대상으로 삼는 문제",
              "미사용 코드가 UI 소스 기반 매뉴얼에 실제 기능으로 잘못 반영되는 문제",
            ],
          },
        ],
      },
      {
        heading: "제약",
        blocks: [
          {
            type: "p",
            text: "수천 건의 코드를 삭제해야 했기 때문에 **기존 기능에 영향이 없는지 충분히 검증**해야 했습니다. 정적 분석 도구의 결과만으로 삭제 여부를 판단할 수는 없었습니다.",
          },
        ],
      },
      {
        heading: "접근 — 3단계 검증 절차",
        blocks: [
          {
            type: "flow",
            steps: [
              { title: "정적 분석", desc: "knip으로 미사용 후보(import · 함수 · 파일) 추출" },
              { title: "교차 검증", desc: "정적 분석이 놓치는 문자열 참조 · 동적 import까지 검사해 삭제 대상 선별" },
              { title: "회귀 검증", desc: "프로덕션 빌드 + Playwright 25개 주요 라우트 테스트" },
              { title: "삭제 확정", desc: "기존 기능 영향 없음 확인 후 반영" },
            ],
          },
        ],
      },
      {
        heading: "결과",
        blocks: [
          {
            type: "list",
            items: [
              "미사용 import, 함수, 파일 등 **Dead Code 1,749건 제거** (정리 작업 결과 리포트 기준, 항목 단위 합산)",
              "프로덕션 빌드와 회귀 테스트로 기존 기능에 영향이 없는지 확인한 후 반영",
            ],
          },
          {
            type: "callout",
            text: "미사용 코드가 실제 버그로 이어진 사례는 [간헐적으로 발생하던 그리드 깜빡임 원인 추적](/case/drawer-refetch) 케이스에서 확인할 수 있습니다.",
          },
        ],
      },
    ],
    techReasons: [
      {
        name: "knip",
        reason:
          "파일 단위 lint가 잡지 못하는 프로젝트 전역의 미사용 export · 파일 · 의존성을 한 번에 검출하기 위해 사용했습니다.",
      },
      {
        name: "Playwright",
        reason:
          "대량 삭제가 실제 화면 동작에 영향이 없음을 25개 주요 라우트에 대한 회귀 테스트로 검증하기 위해 사용했습니다.",
      },
    ],
  },
  {
    slug: "validation",
    order: 3,
    title: "복잡한 설정 화면의 공통 Validation 플로우 설계",
    summary:
      "단계 간 의존성을 가진 설정 화면의 Step 기반 Validation 플로우를 설계해 16개 화면에 공통 적용",
    metric: "16개 화면 공통화",
    project: "Polestar 10",
    stack: ["React", "TypeScript"],
    sections: [
      {
        heading: "배경·문제",
        blocks: [
          {
            type: "p",
            text: "알람 정책, 사용자 정의 항목, AIOps 정적 임계치 등 Polestar 10의 설정 화면은 다수의 입력값과 **단계 간 의존성**을 가지고 있습니다. 특히 알람 정책 Drawer는 7개의 설정 컴포넌트로 구성되어, 상위 단계의 입력이 하위 단계의 활성화 조건이 되는 구조였습니다.",
          },
          {
            type: "p",
            text: "이러한 화면이 도메인마다 반복해서 만들어지고 있어, **Validation 로직 역시 화면별로 중복 구현될 가능성**이 있었습니다.",
          },
        ],
      },
      {
        heading: "설계 — Step 기반 Validation 플로우",
        blocks: [
          {
            type: "list",
            items: [
              "상위 단계의 필수값 충족 여부에 따라 **다음 설정 영역을 활성화**",
              "전체 필수값의 유효성에 따라 **저장 가능 여부를 제어**",
              "유사한 구조를 가진 **16개 설정 화면에서 재사용**할 수 있도록 Validation 로직 공통화",
            ],
          },
          {
            type: "flow",
            steps: [
              { title: "Step 1 필수값 충족", desc: "상위 단계 입력 완료 여부 판정" },
              { title: "다음 설정 영역 활성화", desc: "단계 간 의존성에 따라 순차 오픈" },
              { title: "전체 유효성 판정", desc: "모든 필수값의 유효 상태 집계" },
              { title: "저장 버튼 활성화", desc: "유효할 때만 저장 가능" },
            ],
          },
          {
            type: "image",
            src: "/images/validation-step-disabled.png",
            alt: "알람 정책 Drawer — 상위 단계 미입력 상태로 하위 설정 영역이 비활성화된 화면",
            caption: "상위 단계(관리 지표 등) 필수값이 입력되기 전 — 심각도 설정이 비어 있고 저장이 비활성화된 상태",
          },
          {
            type: "image",
            src: "/images/validation-step-enabled.png",
            alt: "알람 정책 Drawer — 필수값 충족 후 하위 설정 영역과 저장 버튼이 활성화된 화면",
            caption: "필수값 충족 후 — 지표 차트·심각도 설정이 활성화되고 저장 버튼이 활성화된 상태",
          },
        ],
      },
      {
        heading: "추가 개선",
        blocks: [
          {
            type: "list",
            items: [
              "입력 상태가 변경될 때마다 반복되던 Validation 로직에 **debounce를 적용**해 불필요한 실행과 상태 업데이트를 줄임",
              "관리대상을 조회한 뒤 조회 조건을 변경해도 이전 조회 결과로 저장할 수 있는 문제를 발견해, **조건 변경 시 기존 결과를 비활성화하고 재조회를 안내하는 방식을 제안·적용**",
            ],
          },
        ],
      },
      {
        heading: "결과",
        blocks: [
          {
            type: "list",
            items: [
              "16개 설정 화면에서 동일한 Validation 플로우 재사용",
              "Validation 로직의 일관성을 확보하고 신규 설정 화면의 중복 구현을 줄임",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "deploy-recovery",
    order: 4,
    title: "배포 후 발생하는 화면 깨짐 자동 복구",
    summary:
      "배포 후 이전 청크를 참조해 발생하던 화면 깨짐을 감지하고, 사용자 개입 없이 자동 복구하도록 개선",
    metric: "사용자 개입 없는 복구",
    project: "Polestar 10",
    stack: ["Vite", "React"],
    sections: [
      {
        heading: "배경·문제",
        blocks: [
          {
            type: "p",
            text: "신규 버전을 배포하면 빌드 청크의 해시가 바뀝니다. 이전 `index.html`을 캐시하고 있던 브라우저는 **더 이상 존재하지 않는 옛 해시의 청크를 요청**하게 되고, 404와 함께 `TypeError: Failed to fetch dynamically imported module` 에러로 화면이 깨졌습니다.",
          },
          {
            type: "p",
            text: "사용자 입장에서는 왜 에러가 났는지 알 수 없고, 직접 새로고침을 눌러야만 해결되는 상황이었습니다.",
          },
        ],
      },
      {
        heading: "해결 과정",
        blocks: [
          {
            type: "p",
            text: "**1차 — 전역 이벤트 감지로 자동 새로고침.** `vite:preloadError`, `unhandledrejection` 전역 리스너로 청크 로드 실패를 감지해 자동 reload를 시도했습니다.",
          },
          {
            type: "p",
            text: "**2차 — 전역 리스너에 잡히지 않는 케이스 발견.** 일부 `React.lazy()` 동적 import 실패는 **전역 이벤트로 포착되지 않고 ErrorBoundary 경로로 처리되는 케이스**가 있었습니다. 에러가 ErrorBoundary까지 올라가 사용자에게 일반 에러 페이지가 노출되고 있었습니다. 이를 해결하기 위해 ErrorBoundary에서 청크 로드 에러를 분기 감지하도록 보완했습니다.",
          },
          {
            type: "list",
            items: [
              "`getDerivedStateFromError`에서 청크 에러 여부를 판별해, 일반 에러 페이지 대신 **“최신 버전으로 패치되었습니다” 안내 오버레이**를 표출",
              "5초 카운트다운 + progress bar 후 자동 새로고침, “지금 새로고침” 버튼도 함께 제공 — 에러 상황을 사용자에게 **원인을 알 수 없는 에러 화면 대신 업데이트 안내를 제공**",
              "안내 오버레이는 **외부 UI 라이브러리에 의존하지 않도록 구현**해, UI 라이브러리 청크 로딩에 실패한 상황에서도 표시될 수 있도록 구성",
            ],
          },
          {
            type: "image",
            src: "/images/patch-update-notice.png",
            alt: "최신 버전 패치 안내 오버레이 — 카운트다운과 지금 새로고침 버튼",
            caption: "청크 에러 감지 시 표출되는 패치 안내 오버레이 — 카운트다운 + 지금 새로고침 버튼",
          },
          {
            type: "p",
            text: "**3차 — 무한 새로고침 방지 guard.** 새로고침으로도 해결되지 않는 상황(영구적인 청크 부재, 네트워크 장애)에서 무한 reload 루프에 빠지지 않도록 guard를 설계했습니다.",
          },
          {
            type: "list",
            items: [
              "**10초 가드가 걸린 `reloadOnce()`**를 ErrorBoundary와 전역 리스너가 공유 — 두 경로에서 중복 호출돼도 reload는 한 번만 실행",
              "ErrorBoundary의 5초 안내 오버레이가 우선 동작하도록 **전역 리스너의 reload를 6초 지연**",
              "10초 내에 다시 실패하면 영구 장애로 판단하고 안내를 닫고 일반 에러 페이지로 폴백",
            ],
          },
        ],
      },
      {
        heading: "동작 흐름",
        blocks: [
          {
            type: "flow",
            steps: [
              { title: "청크 fetch 실패", desc: "React.lazy() 동적 import 실패 → ErrorBoundary에서 감지" },
              { title: "청크 에러 판별", desc: "일반 에러와 분기" },
              { title: "패치 안내 오버레이", desc: "5초 카운트다운 + 지금 새로고침 버튼" },
              { title: "reloadOnce()", desc: "새 entry · 청크로 진입 (10초 가드, 1회만 실행)" },
              { title: "재실패 시 폴백", desc: "10초 내 재실패 = 영구 장애 → 일반 에러 페이지" },
            ],
          },
        ],
      },
      {
        heading: "검증",
        blocks: [
          {
            type: "list",
            items: [
              "dev 서버에서는 stale-chunk 상황 재현이 어려워, **임시 미리보기 버튼을 추가해 오버레이 디자인·카운트다운 동작을 검증한 뒤 제거**",
              "프로덕션 배포 후 실제 stale-chunk 상황에서 안내 → 자동 reload 1회 동작 확인",
            ],
          },
        ],
      },
      {
        heading: "결과",
        blocks: [
          {
            type: "list",
            items: [
              "배포 직후 발생하던 화면 깨짐을 사용자 개입 없이 자동 복구",
              "원인을 알 수 없는 일반 에러 화면 대신 업데이트 안내를 제공해 사용자가 상황을 이해할 수 있도록 개선",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "console-cleanup",
    order: 5,
    title: "29개 메뉴의 콘솔 에러·워닝 171건 제거",
    summary:
      "누적된 콘솔 에러·워닝을 개선 과제로 제안하고, 반복되는 원인을 찾아 공통 영역부터 수정해 29개 메뉴에서 에러·워닝 171건을 제거",
    metric: "171건 제거",
    project: "Polestar 10",
    stack: ["React", "Ant Design"],
    sections: [
      {
        heading: "배경·문제",
        blocks: [
          {
            type: "p",
            text: "누적된 콘솔 에러·워닝을 개선 과제로 직접 제안했습니다. 경고가 쌓여 있으면 새로운 문제가 발생해도 묻히고, 실제 동작 이슈의 신호를 놓치게 됩니다.",
          },
        ],
      },
      {
        heading: "접근",
        blocks: [
          {
            type: "list",
            items: [
              "**29개 메뉴 영역을 전수 점검**하여 반복되는 오류 유형을 분석",
              "경고를 숨기지 않고 **실제 발생 원인을 수정**하는 것을 원칙으로 진행",
              "반복되는 오류의 분류·수정 과정에 AI를 활용하고, 주요 화면을 반복 검증하며 동작과 콘솔 상태 확인",
            ],
          },
        ],
      },
      {
        heading: "핵심 개선 — 공통 Wrapper 일괄 처리",
        blocks: [
          {
            type: "p",
            text: "Ant Design 버전 변경으로 여러 화면에서 동일한 경고가 발생했습니다. 각 화면의 호출부를 개별 수정하는 대신, **공통 Wrapper에서 변경된 prop을 처리하도록 개선**해 **25개 모듈에 일괄 반영**했습니다.",
          },
          {
            type: "image",
            src: "/images/console-before-after.png",
            alt: "개선 전후 콘솔 비교 — 에러 11건·워닝 24건에서 에러·워닝 0건으로",
            caption: "Before: 에러 11건 · 워닝 24건 → After: No errors · No warnings",
          },
        ],
      },
      {
        heading: "결과",
        blocks: [
          {
            type: "list",
            items: [
              "콘솔 에러·워닝 **총 171건 제거**, 29개 메뉴 영역 안정화",
              "공통 원인을 수정해 동일 유형 경고의 반복 발생을 줄임",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "drawer-refetch",
    order: 6,
    title: "간헐적으로 발생하던 그리드 깜빡임 원인 추적",
    summary:
      "재현이 어려웠던 그리드 깜빡임을 Playwright로 반복 검증해 발생 조건을 찾고, 불필요한 API 재호출의 원인을 추적해 해결",
    metric: "API 재호출 8회 → 0회",
    project: "Polestar 10",
    stack: ["React", "Recoil", "Playwright"],
    sections: [
      {
        heading: "배경·문제",
        blocks: [
          {
            type: "p",
            text: "특정 목록 화면에서 상세 Drawer를 열고 닫을 때 목록 그리드가 깜빡이는 문제가 있었습니다. 항상 발생하지 않아 “간헐적” 버그로 취급되고 있었습니다.",
          },
        ],
      },
      {
        heading: "재현 — 발생 조건 특정",
        blocks: [
          {
            type: "p",
            text: "Playwright로 반복 재현하며 API 호출 횟수를 확인해 발생 조건을 특정했습니다.",
          },
          {
            type: "list",
            items: [
              "URL에 필터 파라미터가 있는 상태에서 Drawer를 열고 닫으면 **open 시 4회 + close 시 4회 목록 API가 재호출**되는 것을 확인",
              "파라미터 없이 직접 진입하거나 같은 행을 재오픈할 때는 발생하지 않음 → 발생 여부가 **URL 필터 파라미터 상태**에 따라 달라지는 것을 확인",
            ],
          },
        ],
      },
      {
        heading: "원인 체인 분석",
        blocks: [
          {
            type: "p",
            text: "Drawer가 열릴 때 `URLSearchParams`를 통해 URL을 갱신하는 로직이 있었고, 이 변경이 **전역 필터 상태와 목록 재조회를 순차적으로 발생**시키고 있었습니다.",
          },
          {
            type: "flow",
            steps: [
              { title: "Drawer open", desc: "URL 교체로 페이지의 필터 파라미터 소실" },
              { title: "전역 Filter 반응", desc: "필터 atom 초기화" },
              { title: "useEffect([filterList]) 실행", desc: "목록 재조회 호출" },
              { title: "그리드 깜빡임", desc: "close 시에도 URL 재조작으로 같은 체인 반복" },
            ],
          },
          {
            type: "p",
            text: "Drawer 내부에서는 해당 URL 파라미터를 실제로 사용하지 않고 있었고, **불필요하게 남아 있던 로직이 원인**이었습니다.",
          },
        ],
      },
      {
        heading: "수정과 판단",
        blocks: [
          {
            type: "list",
            items: [
              "URL 세팅 effect와 close 시 삭제 로직을 제거 — **dead code 삭제가 곧 버그 수정**이 된 사례. 재도입 방지 주석 추가",
              "유사한 패턴이 있는 다른 파일은 회귀 위험을 고려해 이번 수정 범위에서 제외하고 **별도 관찰 사항으로 기록**",
            ],
          },
        ],
      },
      {
        heading: "검증",
        blocks: [
          {
            type: "list",
            items: [
              "Drawer open/close 시 목록 API 재호출 **4회+4회 → 0회**, 필터 파라미터·필터 태그 보존",
              "Drawer 내부 API 정상 동작, 유사 Drawer들도 재호출 0회",
              "콘솔 에러 0건, 타입체크 통과 (기존 baseline 외 신규 에러 0건)",
              "재현 경로·원인·검증 결과를 리포트 문서로 정리해 공유",
            ],
          },
        ],
      },
      {
        heading: "결과",
        blocks: [
          {
            type: "list",
            items: [
              "Drawer 1회 open/close 시 발생하던 목록 API 재호출 **8회 → 0회**",
              "URL 필터 상태와 기존 기능을 유지하면서 간헐적으로 발생하던 그리드 깜빡임 제거",
            ],
          },
        ],
      },
    ],
    techReasons: [
      {
        name: "Playwright",
        reason:
          "반복 재현과 API 호출 횟수 확인을 통해 발생 조건을 특정하고, 수정 전후 동작을 검증하기 위해 사용했습니다.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
