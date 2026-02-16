import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // 배경색(#1a0b2e)을 직접 지정했습니다. 이제 무조건 보라색이 나올 겁니다.
    <main className="min-h-screen bg-[#1a0b2e] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* 배경 장식 효과 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4c1d95] via-[#1a0b2e] to-transparent"></div>

      {/* 메인 컨텐츠 */}
      <div className="z-10 w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h2 className="text-[#ffd700] text-sm font-medium tracking-[0.2em] uppercase">
            운명적 관계 분석 서비스
          </h2>
          <h1 className="text-5xl font-bold text-white tracking-tight font-serif">
            마주<span className="text-[#4c1d95]">.</span>
          </h1>
          <p className="text-[#e9d5ff] opacity-80 mt-4 leading-relaxed">
            너와 나의 별자리가<br />
            어떻게 이어져 있는지 확인해보세요.
          </p>
        </div>

        {/* 수정구슬 아이콘 */}
        <div className="relative w-40 h-40 mx-auto my-8 border border-[#e9d5ff]/20 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(76,29,149,0.5)]">
          <span className="text-4xl">🔮</span>
        </div>

        {/* 버튼 */}
        <div className="space-y-4">
          <button className="block w-full py-4 bg-[#4c1d95] hover:bg-violet-800 text-white font-bold rounded-xl shadow-lg border border-white/10 transition-all">
            내 운세 방 만들기
          </button>
          <p className="text-xs text-[#e9d5ff]/50">
            * 카카오톡으로 결과를 공유할 수 있습니다.
          </p>
        </div>
      </div>
    </main>
  );
}