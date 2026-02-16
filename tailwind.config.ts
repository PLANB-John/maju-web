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
        background: "#F5F6FA", // 이음 사이트 배경색
        primary: "#5467F5",    // 메인 파란색 버튼
        secondary: "#7C3AED",  // 보라색 포인트
        dark: "#333333",       // 본문 텍스트
        gray: "#999999",       // 연한 텍스트
        border: "#EEEEEE",     // 연한 테두리
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.03)', // 아주 은은한 그림자
        'float': '0 8px 20px rgba(84, 103, 245, 0.25)', // 버튼 그림자
      }
    },
  },
  plugins: [],
};
export default config;
