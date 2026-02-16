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
          bg: "#FDFDFF",         // 전체 배경
          primary: "#6B77F8",    // 메인 로고/버튼 (블루퍼플)
          text: "#1C1C1E",       // 진한 글씨
          gray: "#999999",       // 연한 글씨
          
          // 그래프 노드 색상 (동물 배경)
          nodeYellow: "#FFF4CE",
          nodeGreen: "#E3F6ED",
          nodeBlue: "#E5F0FF",
          nodePink: "#FFE8F1",
          nodeOrange: "#FFF0E0",

          // 그래프 라인/라벨 색상
          labelGreen: "#4CAF50",
          labelOrange: "#FF9800",
          labelBlue: "#2196F3",
          labelRed: "#FF5252",
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'button': '0 4px 12px rgba(107, 119, 248, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
