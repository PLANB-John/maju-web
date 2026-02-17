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
        // 마주(Maju) 전용 컬러 팔레트
        maju: {
          bg: "#FDFDFF",         // 전체 배경 (아주 연한 푸른빛)
          primary: "#6B77F8",    // 메인 버튼 (이음 퍼플블루)
          text: "#1C1C1E",       // 본문 텍스트
          gray: "#9E9E9E",       // 연한 회색 텍스트
          
          // 그래프 노드(원) 배경색
          nodeYellow: "#FFF9C4", 
          nodeBlue: "#E3F2FD",   
          nodePink: "#FFEBEE",   
          nodeGreen: "#E8F5E9",  
          nodePurple: "#F3E5F5", 
        },
      },
      animation: {
        'twinkle': 'twinkle 2s ease-in-out infinite', // 별 깜빡임
        'float': 'float 3s ease-in-out infinite',     // 둥둥 떠다님
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.8)', opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
