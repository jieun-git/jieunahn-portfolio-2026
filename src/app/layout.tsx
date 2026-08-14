import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "안지은 | Frontend Developer",
    template: "%s | 안지은",
  },
  description:
    "통합 모니터링 솔루션을 개발해 온 5년차 프론트엔드 개발자 안지은의 포트폴리오. AI 기반 개발 자동화, 코드 품질 개선, 복잡한 설정 화면 설계 케이스 스터디.",
  openGraph: {
    title: "안지은 | Frontend Developer",
    description:
      "AI 기반 개발 자동화, 코드 품질 개선, 복잡한 설정 화면 설계 — 5년차 프론트엔드 개발자의 케이스 스터디 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
