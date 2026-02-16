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
        maju: {
          bg: "#1a0b2e",       // 딥 퍼플 (밤하늘색)
          primary: "#4c1d95",  // 메인 보라색
          accent: "#ffd700",   // 황금색 포인트
          text: "#e9d5ff",     // 연한 라벤더색 글씨
        },
      },
    },
  },
  plugins: [],
};
export default config;