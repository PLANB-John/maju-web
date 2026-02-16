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
        ieum: {
          blue: "#5467f5",    // 메인 파란색 버튼
          purple: "#7c3aed",  // 보라색 포인트
          text: "#333333",    // 진한 글씨
          gray: "#8e94a0",    // 연한 회색 글씨
          bg: "#ffffff",      // 카드 배경
          border: "#eceff2",  // 연한 테두리
          orange: "#ff9f43",  // 중앙 노드 색상
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.04)', // 은은한 그림자
        'floating': '0 8px 30px rgba(84, 103, 245, 0.15)', // 버튼 그림자
      }
    },
  },
  plugins: [],
};
export default config;
