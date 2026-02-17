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
          bg: "#F9FAFB",         // 전체 배경
          primary: "#6B77F8",    // 메인 로고/버튼 (블루퍼플)
          text: "#1C1C1E",       // 진한 글씨
          gray: "#999999",       // 연한 글씨
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'float': '0 10px 30px rgba(107, 119, 248, 0.2)',
      }
    },
  },
  plugins: [],
};
export default config;
