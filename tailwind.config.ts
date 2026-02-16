import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 벤치마킹 사이트와 유사한 컬러셋 정의
        maju: {
          bg: "#f8f9fd",        // 전체 배경 (아주 연한 하늘색)
          card: "#ffffff",      // 카드 배경 (흰색)
          primary: "#5b6bf0",   // 메인 버튼 (파란빛 보라)
          secondary: "#8b5cf6", // 서브 버튼 (자주빛 보라)
          text: "#1f2937",      // 기본 검정 글씨
          gray: "#9ca3af",      // 회색 글씨
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // 부드러운 그림자
      }
    },
  },
  plugins: [],
};
export default config;
