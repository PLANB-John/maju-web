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
        // 요청하신 정확한 파스텔톤 컬러 팔레트
        maju: {
          bg: "#FDFDFF",         // 배경색 (아주 연한 블루그레이)
          primary: "#6B77F8",    // 메인 버튼 (이음 퍼플블루)
          primaryDark: "#5A66E0", // 버튼 호버
          text: "#1C1C1E",       // 본문 텍스트
          gray: "#9E9E9E",       // 연한 텍스트
          
          // 그래프 노드(원) 배경색
          nodeYellow: "#FFF9C4", // 민준
          nodeBlue: "#E3F2FD",   // 서울
          nodePink: "#FFEBEE",   // 수현
          nodeGreen: "#E8F5E9",  // 하늘
          nodePurple: "#F3E5F5", // 지민
        },
      },
      animation: {
        'twinkle': 'twinkle 2s ease-in-out infinite', // 별 깜빡임
        'bounce-soft': 'bounce-soft 3s infinite',     // 둥둥 떠다님
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.8)', opacity: '0.7' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
