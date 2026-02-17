import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] flex justify-center py-0 sm:py-10 font-sans text-[#333]">
      {/* 모바일 컨테이너 (그림자 있는 흰색 박스) */}
      <div className="w-full max-w-[430px] bg-white min-h-screen sm:min-h-[850px] sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative pb-10 border border-gray-100">
        
        {/* =======================
            1. 헤더 (로고) - 그라데이션 적용
           ======================= */}
        <header className="pt-10 pb-4 text-center bg-white z-10">
          <p className="text-[10px] text-gray-400 mb-1 tracking-tight cursor-pointer hover:text-[#6B77F8] transition-colors">서비스 소개 →</p>
          <div className="flex items-center justify-center gap-2 mb-1">
             <span className="text-[#B39DDB] text-lg animate-pulse">✦</span>
             <h1 className="text-[28px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7F7FD5] to-[#86A8E7]">
                이음
             </h1>
             <span className="text-[#B39DDB] text-lg animate-pulse">✦</span>
          </div>
          <p className="text-[13px] text-gray-500 font-medium tracking-tight">우리사이, 사주로 잇다</p>
        </header>

        {/* =======================
            2. 메인 관계도 (움직이는 그래프)
           ======================= */}
        <div className="relative w-full aspect-[1/1.1] mt-2 mb-2">
            
            {/* 배경 원형 라인 (은은하게) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                 <div className="w-[70%] h-[70%] border border-gray-200 rounded-full"></div>
            </div>

            {/* 연결 선 (SVG Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80">
                {/* 센터 -> 11시 (녹색선) */}
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#A5D6A7" strokeWidth="1.5" strokeDasharray="4 2" />
                {/* 센터 -> 1시 (파란선) */}
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#90CAF9" strokeWidth="1.5" />
                {/* 센터 -> 5시 (빨간선) */}
                <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#EF9A9A" strokeWidth="1.5" />
                {/* 센터 -> 7시 (노란선) */}
                <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#FFE082" strokeWidth="1.5" />
            </svg>

            {/* 라벨 (알약 모양) - 정확한 위치 */}
            <div className="absolute top-[32%] left-[28%] bg-[#66BB6A] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm animate-float-slow">척척면적</div>
            <div className="absolute top-[32%] right-[32%] bg-[#FFB74D] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm animate-float-medium">그럭저럭</div>
            <div className="absolute bottom-[35%] right-[28%] bg-[#FF7043] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm animate-float-fast">삐걱삐걱</div>
            <div className="absolute bottom-[35%] left-[28%] bg-[#42A5F5] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm animate-float-slow">천생연분</div>


            {/* --- 노드 (동물 자리) --- */}
            
            {/* 센터 (나) - 가장 큼 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="w-[90px] h-[90px] bg-[#FFF8E1] border-[3px] border-[#FFECB3] rounded-full flex items-center justify-center shadow-lg relative">
                    {/* 이미지 들어갈 자리 */}
                    <span className="text-4xl filter drop-shadow-sm">🐵</span>
                    <div className="absolute -bottom-1 bg-[#333] text-white text-[9px] px-2 py-0.5 rounded-full font-bold">나</div>
                </div>
                <span className="text-xs font-bold text-gray-800 mt-2">민준</span>
            </div>

            {/* 11시 (녹색) */}
            <div className="absolute top-[18%] left-[18%] flex flex-col items-center animate-float-slow">
                 <div className="w-[68px] h-[68px] bg-[#E8F5E9] border-[2px] border-[#C8E6C9] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">🐮</span>
                 </div>
                 <span className="text-[11px] font-medium text-gray-600 mt-1">서윤</span>
            </div>

            {/* 1시 (파랑) */}
            <div className="absolute top-[18%] right-[18%] flex flex-col items-center animate-float-medium">
                 <div className="w-[68px] h-[68px] bg-[#E3F2FD] border-[2px] border-[#BBDEFB] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">🐲</span>
                 </div>
                 <span className="text-[11px] font-medium text-[#1E88E5] bg-blue-50 px-1.5 rounded mt-1 border border-blue-100">전생연분</span>
            </div>

            {/* 5시 (핑크) */}
            <div className="absolute bottom-[20%] right-[18%] flex flex-col items-center animate-float-fast">
                 <div className="w-[68px] h-[68px] bg-[#FFEBEE] border-[2px] border-[#FFCDD2] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">🐷</span>
                 </div>
                 <span className="text-[11px] font-medium text-gray-600 mt-1">수현</span>
            </div>

            {/* 7시 (노랑) */}
             <div className="absolute bottom-[20%] left-[18%] flex flex-col items-center animate-float-slow">
                 <div className="w-[68px] h-[68px] bg-[#FFF3E0] border-[2px] border-[#FFE0B2] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">🐯</span>
                 </div>
                 <span className="text-[11px] font-medium text-gray-600 mt-1">하늘</span>
            </div>

             <div className="absolute bottom-4 w-full text-center">
                 <p className="text-[10px] text-gray-300 animate-pulse">👆 이름을 눌러보세요</p>
             </div>
        </div>


        {/* =======================
            3. 통계 바 (숫자 강조)
           ======================= */}
        <div className="flex justify-center items-center pb-6 border-b border-gray-50 mx-8">
             <div className="flex-1 text-center border-r border-gray-100">
                <p className="text-[20px] font-extrabold text-[#6B77F8] tracking-tight">62,648</p>
                <p className="text-[10px] text-gray-400 mt-0.5">만들어진 모임</p>
             </div>
             <div className="flex-1 text-center">
                <p className="text-[20px] font-extrabold text-[#6B77F8] tracking-tight">314,089</p>
                <p className="text-[10px] text-gray-400 mt-0.5">이어진 인연</p>
             </div>
        </div>

        {/* =======================
            4. 배너 & 텍스트
           ======================= */}
        <div className="px-5 mt-5 space-y-4">
             {/* 광고 배너 */}
             <div className="bg-white border border-gray-200 rounded-xl p-3 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden relative">
                        {/* 이미지 placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-[8px] text-gray-500">IMG</div>
                    </div>
                    <div className="flex flex-col">
                         <span className="text-[12px] font-bold text-gray-800">후 한의원 강남</span>
                         <span className="text-[10px] text-gray-400">다이어트, 여드름 치료</span>
                    </div>
                </div>
                <span className="text-[9px] text-gray-400 border border-gray-100 px-1.5 py-0.5 rounded bg-gray-50">AD</span>
             </div>

             {/* 롤링 텍스트 (그라데이션 배경) */}
             <div className="flex justify-center items-center gap-2 text-[11px] font-bold text-[#85660b] bg-[#FFF9C4] py-2.5 rounded-full mx-2 shadow-sm">
                 <span className="animate-pulse">✨</span> <span>우리 팀 숨은 전생연분은?</span>
             </div>
             
             <div className="text-center">
                <span className="text-[11px] text-gray-500 bg-gray-100 px-3 py-1 rounded-full">🔴 오늘 운 좋은 사람은?</span>
             </div>
        </div>

        {/* =======================
            5. 메인 버튼 (그라데이션)
           ======================= */}
        <div className="px-5 mt-5 space-y-3">
             <Link href="/create" className="w-full h-[56px] bg-gradient-to-r from-[#6B77F8] to-[#5B6BF0] text-white rounded-2xl shadow-float flex items-center justify-center gap-2 font-bold text-[16px] transform transition-transform active:scale-95">
                <span>🔮</span> 모임 궁합 생성
             </Link>
             <Link href="/create" className="w-full h-[56px] bg-white border border-[#E0E7FF] text-[#6B77F8] rounded-2xl flex items-center justify-center gap-2 font-bold text-[16px] shadow-sm transform transition-transform active:scale-95 hover:bg-gray-50">
                <span>💜</span> 나와 궁합 생성
             </Link>
        </div>

        {/* =======================
            6. 사주 알아보기 (그리드 카드)
           ======================= */}
        <div className="mt-8 px-5 pb-8">
            <div className="flex justify-between items-center mb-3 px-1">
                <h3 className="font-bold text-[14px] text-gray-800">사주 알아보기</h3>
                <span className="text-[11px] text-[#6B77F8] cursor-pointer hover:underline">전체 보기 →</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {[
                    { icon: "🐹", title: "사주 초보 가이드", desc: "사주팔자가 무엇인지..." },
                    { icon: "🏛️", title: "사주 궁합 보는 법", desc: "서로의 합과 충을..." },
                    { icon: "⚖️", title: "MBTI vs 사주", desc: "성격 분석 도구 비교" },
                    { icon: "🚌", title: "띠별 성격과 궁합", desc: "12지신 동물의 특징" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-card flex flex-col gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                        <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-lg">{item.icon}</div>
                        <div>
                            <p className="text-[12px] font-bold text-gray-700">{item.title}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5 truncate">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 푸터 설명 */}
            <div className="mt-8 bg-[#F5F7FA] p-4 rounded-xl text-[10px] text-gray-400 leading-relaxed text-justify">
                <span className="font-bold text-gray-500">이음이란?</span> 사주 일주를 기반으로 그룹 내 구성원들의 궁합을 분석해주는 무료 서비스입니다. 친구, 동료, 가족 등 모임 구성원들이 서로 얼마나 잘 맞는지 재미있게 확인해보세요.
            </div>
        </div>

      </div>
    </main>
  );
}
