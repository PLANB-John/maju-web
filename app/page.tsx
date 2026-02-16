import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] flex justify-center py-0 sm:py-10">
      {/* 모바일 컨테이너 (최대 너비 430px) */}
      <div className="w-full max-w-[430px] bg-white min-h-screen sm:min-h-[800px] sm:rounded-[30px] shadow-xl overflow-hidden flex flex-col relative pb-8">
        
        {/* =======================
            1. 헤더 (로고)
           ======================= */}
        <header className="pt-8 pb-2 text-center bg-white z-10">
          <p className="text-[10px] text-gray-400 font-medium mb-1 tracking-tight">서비스 소개 →</p>
          <div className="flex items-center justify-center gap-1">
             <span className="text-[#B39DDB] text-xl">✦</span>
             <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]">
                이음
             </h1>
             <span className="text-[#B39DDB] text-xl">✦</span>
          </div>
          <p className="text-[13px] text-gray-500 mt-2 font-medium">우리사이, 사주로 잇다</p>
        </header>

        {/* =======================
            2. 메인 관계도 (핵심)
           ======================= */}
        <div className="relative w-full aspect-square max-h-[380px] mt-2 mb-4">
            
            {/* 연결 선 (SVG Lines) - 가장 뒤에 배치 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* 센터 -> 11시 (초록선) */}
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#E3F6ED" strokeWidth="4" />
                {/* 센터 -> 1시 (파란선) */}
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#E5F0FF" strokeWidth="2" />
                {/* 센터 -> 5시 (빨간선) */}
                <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#FFE8F1" strokeWidth="2" />
                {/* 센터 -> 7시 (주황선) */}
                <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#FFF0E0" strokeWidth="4" />
            </svg>

            {/* 관계 라벨 (알약 모양) */}
            <div className="absolute top-[35%] left-[28%] bg-[#4CAF50] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 rotate-[-15deg]">척척면적</div>
            <div className="absolute top-[35%] right-[32%] bg-[#90CAF9] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 rotate-[15deg]">서운</div>
            <div className="absolute bottom-[35%] right-[30%] bg-[#FF5252] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 rotate-[-15deg]">삐걱삐걱</div>
            <div className="absolute bottom-[35%] left-[28%] bg-[#FF9800] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 rotate-[15deg]">그럭저럭</div>


            {/* --- 노드 (동물들) --- */}
            
            {/* 센터 (나/민준) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="w-[88px] h-[88px] bg-[#FFF4CE] border-4 border-[#FFD54F] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-4xl">🐵</span>
                </div>
                <span className="text-xs font-bold text-gray-700 mt-1">민준</span>
            </div>

            {/* 11시 (녹색/서윤) */}
            <div className="absolute top-[18%] left-[18%] flex flex-col items-center">
                 <div className="w-16 h-16 bg-[#E3F6ED] border-2 border-[#81C784] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🐮</span>
                 </div>
                 <span className="text-[11px] font-medium text-gray-600 mt-1">서윤</span>
            </div>

            {/* 1시 (파랑/전생연분) */}
            <div className="absolute top-[18%] right-[18%] flex flex-col items-center">
                 <div className="w-16 h-16 bg-[#E5F0FF] border-2 border-[#64B5F6] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🐲</span>
                 </div>
                 <span className="text-[11px] font-medium text-[#2196F3] bg-blue-50 px-1.5 rounded mt-1">전생연분</span>
            </div>

            {/* 5시 (핑크/수현) */}
            <div className="absolute bottom-[20%] right-[18%] flex flex-col items-center">
                 <div className="w-16 h-16 bg-[#FFE8F1] border-2 border-[#F48FB1] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🐷</span>
                 </div>
                 <span className="text-[11px] font-medium text-gray-600 mt-1">수현</span>
            </div>

            {/* 7시 (노랑/하늘) */}
             <div className="absolute bottom-[20%] left-[18%] flex flex-col items-center">
                 <div className="w-16 h-16 bg-[#FFF8E1] border-2 border-[#FFD54F] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🐯</span>
                 </div>
                 <span className="text-[11px] font-medium text-gray-600 mt-1">하늘</span>
            </div>

             <div className="absolute bottom-2 w-full text-center">
                 <p className="text-[10px] text-gray-300">👆 이름을 눌러보세요</p>
             </div>
        </div>


        {/* =======================
            3. 통계 숫자
           ======================= */}
        <div className="flex justify-center items-center pb-6 border-b border-gray-100 mx-8">
             <div className="flex-1 text-center border-r border-gray-200">
                <p className="text-[18px] font-bold text-[#6B77F8] tabular-nums">62,648</p>
                <p className="text-[10px] text-gray-400 mt-0.5">만들어진 모임</p>
             </div>
             <div className="flex-1 text-center">
                <p className="text-[18px] font-bold text-[#6B77F8] tabular-nums">314,089</p>
                <p className="text-[10px] text-gray-400 mt-0.5">이어진 인연</p>
             </div>
        </div>

        {/* =======================
            4. 배너 & 롤링 텍스트
           ======================= */}
        <div className="px-5 mt-4 space-y-3">
             {/* 광고 배너 */}
             <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded overflow-hidden relative">
                        {/* 이미지 대신 회색 박스 */}
                        <div className="absolute inset-0 bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col">
                         <span className="text-[11px] font-bold text-gray-700">후 한의원 강남</span>
                         <span className="text-[9px] text-gray-400">후한의원</span>
                    </div>
                </div>
                <span className="text-[10px] text-gray-300 border border-gray-200 px-1 rounded">AD</span>
             </div>

             {/* 롤링 텍스트 (고정) */}
             <div className="flex justify-center gap-2 text-[11px] text-gray-500 bg-[#FFF9C4] py-2 rounded-full mx-4">
                 <span>✨ 우리 팀 숨은 전생연분은?</span>
             </div>
             <div className="text-center text-[11px] text-gray-400">
                 🔴 오늘 운 좋은 사람은?
             </div>
        </div>

        {/* =======================
            5. 메인 액션 버튼
           ======================= */}
        <div className="px-5 mt-4 space-y-2.5">
             <Link href="/create" className="w-full h-[52px] bg-gradient-to-r from-[#6B77F8] to-[#5467F5] text-white rounded-xl shadow-button flex items-center justify-center gap-2 font-bold text-[15px]">
                <span>🔮</span> 모임 궁합 생성
             </Link>
             <Link href="/create" className="w-full h-[52px] bg-white border border-[#E0E0E0] text-[#6B77F8] rounded-xl flex items-center justify-center gap-2 font-bold text-[15px] shadow-sm">
                <span>💜</span> 나와 궁합 생성
             </Link>
        </div>

        {/* =======================
            6. 사주 알아보기 (그리드)
           ======================= */}
        <div className="mt-8 px-5">
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-[13px] text-gray-800">사주 알아보기</h3>
                <span className="text-[10px] text-[#6B77F8]">전체 보기 →</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
                {[
                    { icon: "🐹", title: "사주 초보 완전 가이드", desc: "사주팔자가 무엇인지 쉽게..." },
                    { icon: "🏛️", title: "사주 궁합 보는 법", desc: "서로의 합과 충을 이해하는..." },
                    { icon: "⚖️", title: "MBTI vs 사주", desc: "성격 분석 도구로서의 차이..." },
                    { icon: "🚌", title: "띠별 성격과 궁합", desc: "12지신 동물들의 특징과..." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-start gap-2.5">
                        <div className="text-xl min-w-[24px]">{item.icon}</div>
                        <div className="flex flex-col gap-0.5">
                            <p className="text-[11px] font-bold text-gray-700 leading-tight">{item.title}</p>
                            <p className="text-[9px] text-gray-400 truncate w-full">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* =======================
            7. 푸터 (설명)
           ======================= */}
        <div className="mt-10 px-5 pb-8 bg-gray-50 pt-6 border-t border-gray-100">
             <h4 className="font-bold text-[11px] text-gray-600 mb-2">이음이란?</h4>
             <p className="text-[10px] text-gray-400 leading-relaxed text-justify">
                이음은 사주 일주를 기반으로 그룹 내 구성원들의 궁합을 분석해주는 무료 서비스입니다. 친구, 동료, 가족 등 모임 구성원들이 서로 얼마나 잘 맞는지 재미있게 확인해보세요.
             </p>
             <div className="mt-4 flex gap-2 text-[9px] text-gray-300 justify-center">
                <span>서비스 가이드</span> | <span>자주 묻는 질문</span> | <span>약관 보기</span>
             </div>
        </div>

      </div>
    </main>
  );
}
