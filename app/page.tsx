"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // 이미지를 쓸 경우를 대비

// 숫자 카운팅 컴포넌트 (0 -> 목표숫자까지 올라가는 효과)
function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2초 동안 실행
    const increment = end / (duration / 16); // 60fps 기준 증가량

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      
      {/* 모바일 컨테이너 (최대 너비 430px) */}
      <div className="w-full max-w-[430px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-10 border border-slate-100">
        
        {/* --- 1. 상단 헤더 --- */}
        <header className="pt-10 pb-4 text-center bg-white z-10">
          <Link href="/intro" className="text-[11px] text-slate-400 font-bold tracking-tight hover:text-maju-primary transition-colors">
            서비스 소개 →
          </Link>
          <div className="flex items-center justify-center gap-2 mt-1 mb-1">
             <span className="text-purple-300 text-xl animate-twinkle">✦</span>
             <h1 className="text-[26px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7F7FD5] to-[#86A8E7]">
                우리사이, 마주
             </h1>
             <span className="text-purple-300 text-xl animate-twinkle" style={{ animationDelay: '1s' }}>✦</span>
          </div>
          <p className="text-[13px] text-slate-500 font-medium">사주로 잇는 우리 사이</p>
        </header>

        {/* --- 2. 메인 관계도 그래프 (핵심 비주얼) --- */}
        <section className="relative w-full aspect-square mt-4 mb-4">
            
            {/* 배경 연결 선 (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                {/* 오각형 연결선 예시 */}
                <line x1="50%" y1="35%" x2="20%" y2="55%" stroke="#FFCC80" strokeWidth="1.5" />
                <line x1="50%" y1="35%" x2="80%" y2="55%" stroke="#90CAF9" strokeWidth="1.5" />
                <line x1="20%" y1="55%" x2="30%" y2="85%" stroke="#A5D6A7" strokeWidth="1.5" />
                <line x1="80%" y1="55%" x2="70%" y2="85%" stroke="#EF9A9A" strokeWidth="1.5" />
                <line x1="30%" y1="85%" x2="70%" y2="85%" stroke="#CE93D8" strokeWidth="1.5" />
                <line x1="50%" y1="35%" x2="50%" y2="85%" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* 노드 1: 서울 (중앙 상단) */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-float">
                 <div className="w-[70px] h-[70px] bg-maju-nodeBlue border-2 border-blue-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <span className="text-3xl">🐲</span>
                 </div>
                 <span className="text-[12px] font-bold mt-1 text-slate-600">서울</span>
            </div>

            {/* 노드 2: 민준 (좌측) */}
            <div className="absolute top-[55%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-float" style={{ animationDelay: '0.5s' }}>
                 <div className="w-[70px] h-[70px] bg-maju-nodeYellow border-2 border-yellow-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <span className="text-3xl">🐵</span>
                 </div>
                 <span className="text-[12px] font-bold mt-1 text-slate-600">민준</span>
            </div>

            {/* 노드 3: 수현 (우측) */}
            <div className="absolute top-[55%] right-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-float" style={{ animationDelay: '1s' }}>
                 <div className="w-[70px] h-[70px] bg-maju-nodePink border-2 border-red-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <span className="text-3xl">🐑</span>
                 </div>
                 <span className="text-[12px] font-bold mt-1 text-slate-600">수현</span>
            </div>

             {/* 노드 4: 하늘 (좌하단) */}
             <div className="absolute bottom-[15%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-float" style={{ animationDelay: '1.5s' }}>
                 <div className="w-[70px] h-[70px] bg-maju-nodeGreen border-2 border-green-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <span className="text-3xl">🐮</span>
                 </div>
                 <span className="text-[12px] font-bold mt-1 text-slate-600">하늘</span>
            </div>

            {/* 노드 5: 지민 (우하단) */}
            <div className="absolute bottom-[15%] right-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-float" style={{ animationDelay: '2s' }}>
                 <div className="w-[70px] h-[70px] bg-maju-nodePurple border-2 border-purple-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <span className="text-3xl">🐷</span>
                 </div>
                 <span className="text-[12px] font-bold mt-1 text-slate-600">지민</span>
            </div>

            <div className="absolute bottom-2 w-full text-center">
                 <p className="text-[10px] text-slate-400">👆 이모지를 눌러보세요</p>
             </div>
        </section>

        {/* --- 3. 실시간 통계 카운터 --- */}
        <section className="mx-6 mb-6">
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 flex justify-between items-center">
                <div className="flex-1 text-center border-r border-slate-100">
                    <p className="text-[20px] font-black text-maju-primary tabular-nums">
                        <Counter end={63841} />
                    </p>
                    <p className="text-[11px] text-slate-400 font-bold mt-1">만들어진 모임</p>
                </div>
                <div className="flex-1 text-center">
                    <p className="text-[20px] font-black text-maju-primary tabular-nums">
                        <Counter end={322995} />
                    </p>
                    <p className="text-[11px] text-slate-400 font-bold mt-1">이어진 인연</p>
                </div>
            </div>
        </section>

        {/* --- 4. 메인 액션 버튼 --- */}
        <section className="px-5 space-y-3">
             <Link href="/create" className="w-full h-[56px] bg-gradient-to-r from-[#6B77F8] to-[#86A8E7] text-white rounded-2xl shadow-md flex items-center justify-center gap-2 font-bold text-[16px] hover:shadow-lg transition-all active:scale-95">
                <span>🔮</span> 모임 궁합 생성
             </Link>
             
             <Link href="/create" className="w-full h-[56px] bg-white border-2 border-slate-100 text-maju-primary rounded-2xl flex items-center justify-center gap-2 font-bold text-[16px] hover:bg-slate-50 transition-all active:scale-95">
                <span>💜</span> 나와 궁합 생성
             </Link>
        </section>

        {/* --- 5. 배너 및 롤링 텍스트 --- */}
        <section className="px-5 mt-6 text-center space-y-3">
             <div className="flex justify-center gap-2">
                <span className="bg-yellow-50 text-yellow-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-yellow-100 shadow-sm">
                    ✨ 우리 팀 숨은 전생연분은?
                </span>
                <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-purple-100 shadow-sm">
                    👀 누가 제일 잘 맞을까?
                </span>
             </div>
        </section>

        {/* --- 6. 사주 알아보기 (그리드 카드) --- */}
        <section className="px-5 mt-10">
            <div className="flex justify-between items-end mb-4 px-1">
                <h2 className="text-[16px] font-black text-slate-800">사주 알아보기</h2>
                <Link href="/guide" className="text-[11px] text-maju-primary font-bold hover:underline">
                    전체 보기 →
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {[
                    { icon: "🐹", title: "사주 초보 완전 가이드", desc: "사주팔자가 무엇인지 쉽게 알려드려요" },
                    { icon: "🏛️", title: "사주 궁합 보는 법", desc: "서로의 합과 충을 이해하는 방법" },
                    { icon: "⚖️", title: "MBTI vs 사주", desc: "성격 분석 도구로서의 차이점 비교" },
                    { icon: "🚌", title: "띠별 성격과 궁합", desc: "12지신 동물들의 특징과 관계" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer">
                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-xl">
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-[13px] font-bold text-slate-800">{item.title}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* --- 7. 하단 푸터 (서비스 설명) --- */}
        <footer className="mt-12 px-6 pb-8 text-center bg-slate-50 pt-8 border-t border-slate-100">
             <h3 className="text-[12px] font-bold text-slate-500 mb-2">마주(Maju)란?</h3>
             <p className="text-[11px] text-slate-400 leading-relaxed text-justify mb-6">
                마주는 사주 일주를 기반으로 그룹 내 구성원들의 궁합을 분석해주는 무료 서비스입니다. 친구, 동료, 가족 등 모임 구성원들이 서로 얼마나 잘 맞는지 재미있게 확인해보세요. 복잡한 가입 없이 링크 하나로 결과를 공유할 수 있습니다.
             </p>
             <div className="flex justify-center gap-4 text-[10px] text-slate-300 font-medium">
                <span>서비스 가이드</span>
                <span className="text-slate-200">|</span>
                <span>자주 묻는 질문</span>
                <span className="text-slate-200">|</span>
                <span>의견 보내기</span>
             </div>
             <p className="mt-4 text-[10px] text-slate-300 italic">© 2026 Maju Project. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
