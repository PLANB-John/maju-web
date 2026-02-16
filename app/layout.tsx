import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// 한글 폰트(Noto Sans KR) 불러오기
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // 모든 굵기 사용
});

export const metadata: Metadata = {
  title: "마주 - 우리사이, 사주로 잇다",
  description: "너와 나의 관계를 분석해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
