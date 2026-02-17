"use client"; // 애니메이션과 클릭 기능을 위해 필수!

import { useState, useEffect } from "react";
import Link from "next/link";

// 1. 숫자 카운팅 컴포넌트 (주루룩 올라가는 효과)
function Counter({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // 부드러운 감속 효과 (Ease Out)
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  // 현재 선택된 캐릭터 (기본값: null)
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [relationText, setRelationText] = useState("👆 이모지를 눌러보세요");

  // 캐릭터 클릭 시 실행되는 함수
  const handleNodeClick = (name: string, relation: string) => {
    setSelectedName(name);
    setRelationText(`"${name}"님과는 [${relation}] 관계입니다!`);
  };

  return (
    <main className="min-h-screen bg-[#FDFDFF] flex justify-center py-0 sm:py-10 text-[#333]">
      {/* 모바일 프레임 */}
      <div className="w-full max-w-[430px] bg-white min-h-screen sm:min-h-[850px] sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative pb-10 border border-gray-100">
        
        {/* =======================
            [요청 1, 2] 헤더 & 별 애니메이션
           ======================= */}
        <header className="pt-10 pb-4 text-center bg-white z-10">
          <Link href="/about" className="inline-block text-[11px] text-[#9E9E9E] mb-1 tracking-tight hover:text-maju-primary transition-colors">
            서비스 소개 →
          </Link>
          <div className="flex items-center justify-center gap-2 mb-1">
             {/* 왼쪽 별 (커졌다 작아졌다) */}
             <span className="text-[#B39DDB] text-xl animate-twinkle">✦</span>
             {/* 마주 로고 (색상 똑같이) */}
             <h1 className="text-[28px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7F7FD5] to-[#86A8E7]">
                마주
             </h1>
             {/* 오른쪽 별 (커졌다 작아졌다, 딜레이 줌) */}
             <span className="text-[#B39DDB] text-xl animate-twinkle" style={{ animationDelay: '1s' }}>✦</span>
          </div>
          <p className="text-[14px] text-gray-600 font-bold tracking-tight">우리 사이, 마주 하다</p>
        </header>

        {/* =======================
            [요청 3] 관계도 & 클릭 인터랙션
           ======================= */}
        <div className="relative w-full aspect-square mt-2 mb-2">
            
            {/* 배경 연결 선 (오각형 형태) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
                <line x1="50%" y1="35%" x2="20%" y2="55%" stroke="#FFCC80" strokeWidth="1.5" /> {/* 서울-민준 */}
                <line x1="50%" y1="35%" x2="80%" y2="55%" stroke="#90CAF9" strokeWidth="1.5" /> {/* 서울-수현 */}
                <line x1="20%" y1="55%" x2="30%" y2="85%" stroke="#A5D6A7" strokeWidth="1.5" /> {/* 민준-하늘 */}
                <line x1="80%" y1="55%" x2="70%" y2="85%" stroke="#EF9A9A" strokeWidth="1.5" /> {/* 수현-지민 */}
                <line x1="30%" y1="85%" x2="70%" y2="85%" stroke="#CE93D8" strokeWidth="1.5" /> {/* 하늘-지민 */}
                {/* 내부 연결선 */}
                <line x1="50%" y1="35%" x2="30%" y2="85%" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="4 2" />
                <line x1="50%" y1="35%" x2="70%" y2="85%" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="4 2" />
                <line x1="20%" y1="55%" x2="80%" y2="55%" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="4 2" />
            </svg>

            {/* --- 노드 (캐릭터) 클릭 가능하게 만듦 --- */}
            
            {/* 1. 중앙 상단 (서울) - 용 */}
            <div onClick={() => handleNodeClick("서울", "리더와 팔로워")} 
                 className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform active:scale-90 hover:scale-105 z-20">
                 <div className="w-[72px] h-[72px] bg-[#E3F2FD] border-2 border-[#BBDEFB] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl">🐲</span>
                 </div>
                 <span className="text-[12px] font-bold text-gray-700 mt-1">서울</span>
            </div>

            {/* 2. 좌측 중단 (민준) - 원숭이 */}
            <div onClick={() => handleNodeClick("민준", "환상의 짝꿍")}
                 className="absolute top-[55%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform active:scale-90 hover:scale-105 z-20">
                 <div className="w-[72px] h-[72px] bg-[#FFF9C4] border-2 border-[#FFF59D] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl">🐵</span>
                 </div>
                 <span className="text-[12px] font-bold text-gray-700 mt-1">민준</span>
            </div>

            {/* 3. 우측 중단 (수현) - 양 */}
            <div onClick={() => handleNodeClick("수현", "조금 어색한 사이")}
                 className="absolute top-[55%] right-[20%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform active:scale-90 hover:scale-105 z-20">
                 <div className="w-[72px] h-[72px] bg-[#FFEBEE] border-2 border-[#FFCDD2] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl">🐑</span>
                 </div>
                 <span className="text-[12px] font-bold text-gray-700 mt-1">수현</span>
            </div>

            {/* 4. 좌측 하단 (하늘) - 소 */}
            <div onClick={() => handleNodeClick("하늘", "비즈니스 파트너")}
                 className="absolute bottom-[15%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform active:scale-90 hover:scale-105 z-20">
                 <div className="w-[72px] h-[72px] bg-[#E8F5E9] border-2 border-[#C8E6C9] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl">🐮</span>
                 </div>
                 <span className="text-[12px] font-bold text-gray-700 mt-1">하늘</span>
            </div>

            {/* 5. 우측 하단 (지민) - 돼지 */}
            <div onClick={() => handleNodeClick("지민", "술 친구")}
                 className="absolute bottom-[15%] right-[30%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform active:scale-90 hover:scale-105 z-20">
                 <div className="w-[72px] h-[72px] bg-[#F3E5F5] border-2 border-[#E1BEE7] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl">🐷</span>
                 </div>
                 <span className="text-[12px] font-bold text-gray-700 mt-1">지민</span>
            </div>

             {/* 하단 안내 문구 (클릭 시 변경됨) */}
             <div className="absolute bottom-0 w-full text-center">
                 <p className="text-[11px] text-gray-400 animate-pulse transition-all">
                    {relationText}
                 </p>
                 {/* 마우스 커서 이모지 (요청사항) */}
                 <div className="absolute bottom-[-5px] left-1/2 ml-20 text-[14px] animate-bounce">👆</div>
             </div>
        </div>


        {/* =======================
            [요청 4] 숫자 카운팅 (주루룩 올라감)
           ======================= */}
        <div className="flex justify-center items-center py-6 border-b border-gray-50 mx-6 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-4">
             <div className="flex-1 text-center border-r border-gray-100">
                <p className="text-[22px] font-extrabold text-[#6B77F8] tracking-tight">
                    <Counter end={63841} />
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">만들어진 모임</p>
             </div>
             <div className="flex-1 text-center">
                <p className="text-[22px] font-extrabold text-[#6B77F8] tracking-tight">
                    <Counter end={322995} />
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">이어진 인연</p>
             </div>
        </div>

        {/* =======================
            [요청 5] 메인 버튼 (그라데이션 & 경로 분리)
           ======================= */}
        <div className="px-5 mt-2 space-y-3">
             {/* 모임 궁합 생성 -> /create 페이지로 이동 */}
             <Link href="/create" className="w-full h-[54px] bg-gradient-to-r from-[#6B77F8] to-[#86A8E7] text-white rounded-xl shadow-lg flex items-center justify-center gap-2 font-bold text-[16px] transform transition-all active:scale-95 hover:shadow-xl">
                <span>🧙‍♀️</span> 모임 궁합 생성
             </Link>
             
             {/* 나와 궁합 생성 -> /create-solo 페이지로 이동 (예시) */}
             <Link href="/create" className="w-full h-[54px] bg-white border-2 border-[#E0E7FF] text-[#6B77F8] rounded-xl flex items-center justify-center gap-2 font-bold text-[16px] shadow-sm transform transition-all active:scale-95 hover:bg-gray-50">
                <span>💜</span> 나와 궁합 생성
             </Link>
        </div>

        {/* =======================
            [요청 6] 배너 & 롤링 텍스트
           ======================= */}
         <div className="px-5 mt-6 mb-2 flex justify-center gap-2">
            <span className="text-[10px] bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-full border border-yellow-100 shadow-sm">
                ✨ 우리 팀 숨은 전생연분은?
            </span>
            <span className="text-[10px] bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                💫 누가 제일 잘 맞을까?
            </span>
         </div>
         <div className="text-center mb-6">
             <span className="text-[10px] text-green-500 font-bold">💬 오늘 운 좋은 사람은?</span>
         </div>


        {/* =======================
            [요청 7] 사주 알아보기 (그리드 카드)
           ======================= */}
        <div className="px-5 pb-8">
            <div className="flex justify-between items-center mb-3 px-1">
                <h3 className="font-bold text-[15px] text-gray-800">사주 알아보기</h3>
                <span className="text-[11px] text-[#6B77F8] cursor-pointer hover:underline">전체 보기 →</span>
            </div>

            <div className="space-y-3">
                {[
                    { icon: "🐹", title: "사주 초보 완전 가이드", desc: "사주팔자가 무엇인지 쉽게 알려드려요" },
                    { icon: "🏛️", title: "사주 궁합 보는 법", desc: "서로의 합과 충을 이해하는 방법" },
                    { icon: "🐰", title: "MBTI vs 사주", desc: "성격 분석 도구로서의 차이점 비교" },
                    { icon: "🐯", title: "띠별 성격과 궁합", desc: "12지신 동물들의 특징과 관계" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-xl shadow-inner">{item.icon}</div>
                        <div>
                            <p className="text-[13px] font-bold text-gray-800">{item.title}</p>
                            <p className="text-[11px] text-gray-400 mt-0.5">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* =======================
                [요청 8] 푸터 (이음이란?)
               ======================= */}
            <div className="mt-10 bg-[#F8F9FA] p-5 rounded-2xl text-[11px] text-gray-400 leading-relaxed text-justify border border-gray-100">
                <p className="mb-2 font-bold text-gray-600 text-[12px]">이음이란?</p>
                <p className="mb-3">
                    이음은 사주 일주를 기반으로 그룹 내 구성원들의 궁합을 분석해주는 무료 서비스입니다. 친구, 동료, 가족 등 모임 구성원들이 서로 얼마나 잘 맞는지 재미있게 확인할 수 있습니다.
                </p>
                <ul className="space-y-1 text-gray-500 font-medium">
                    <li>✓ 최대 12명까지 그룹 궁합 분석</li>
                    <li>✓ 완전 무료, 회원가입 불필요</li>
                    <li>✓ 링크 공유로 간편한 참여</li>
                </ul>
            </div>
            
            <div className="mt-6 text-center text-[10px] text-gray-300 space-x-3">
                 <span>사주 가이드</span> <span>자주 묻는 질문</span> <span>의견 보내기</span>
            </div>
             <div className="mt-2 text-center text-[9px] text-gray-200">
                 이용약관 | 개인정보처리방침
            </div>
        </div>

      </div>
    </main>
  );
}
