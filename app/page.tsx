import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F6FA] flex justify-center items-center">
      {/* 모바일 프레임 (흰색 박스) */}
      <div className="w-full max-w-[430px] bg-white h-screen max-h-[900px] shadow-2xl flex flex-col relative overflow-y-auto sm:rounded-[30px] sm:h-[90vh]">
        
        {/* 1. 헤더 */}
        <header className="pt-12 pb-4 text-center bg-white">
          <p className="text-[11px] text-[#5467F5] font-bold tracking-widest mb-1 uppercase">Relationship AI</p>
          <h1 className="text-[22px] font-bold text-[#333333] tracking-tight">
            우리사이, <span className="text-[#5467F5]">마주</span>보다
          </h1>
        </header>

        {/* 2. 메인 관계도 (이모지 대신 깔끔한 디자인) */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-6">
          <div className="relative w-[320px] h-[320px]">
            
            {/* 배경 원형 궤도 */}
            <div className="absolute inset-0 m-auto w-[240px] h-[240px] border border-dashed border-gray-200 rounded-full animate-spin-slow opacity-50"></div>
            
            {/* 중앙 노드 (나) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-20 h-20 bg-white border-4 border-[#FFD54F] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-gray-700">나</span>
              </div>
              <div className="mt-2 px-3 py-1 bg-[#333] text-white text-[10px] rounded-full font-bold">
                Me
              </div>
            </div>

            {/* 주변 노드 (깔끔한 원형) - CSS로 위치 잡기 */}
            {/* 1. 상단 */}
            <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce duration-[3000ms]">
               <div className="w-14 h-14 bg-[#EEF2FF] border-2 border-[#5467F5] rounded-full flex items-center justify-center shadow-sm">
                 <span className="text-xs font-bold text-[#5467F5]">친구</span>
               </div>
            </div>

            {/* 2. 우측 하단 */}
            <div className="absolute bottom-[20%] right-[10%] flex flex-col items-center animate-bounce duration-[4000ms]">
               <div className="w-14 h-14 bg-[#FFF0F0] border-2 border-[#FF6B6B] rounded-full flex items-center justify-center shadow-sm">
                 <span className="text-xs font-bold text-[#FF6B6B]">연인</span>
               </div>
            </div>

            {/* 3. 좌측 하단 */}
            <div className="absolute bottom-[20%] left-[10%] flex flex-col items-center animate-bounce duration-[3500ms]">
               <div className="w-14 h-14 bg-[#F0FDF4] border-2 border-[#4ADE80] rounded-full flex items-center justify-center shadow-sm">
                 <span className="text-xs font-bold text-[#4ADE80]">동료</span>
               </div>
            </div>
            
            {/* 연결 선 (느낌만) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
               <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#5467F5" strokeWidth="2" strokeDasharray="4 4" />
               <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="4 4" />
               <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* 통계 텍스트 */}
          <div className="flex gap-8 mt-4 text-center">
             <div>
                <p className="text-lg font-bold text-[#5467F5]">62,635</p>
                <p className="text-[10px] text-gray-400">분석된 관계</p>
             </div>
             <div className="w-[1px] bg-gray-200 h-8"></div>
             <div>
                <p className="text-lg font-bold text-[#5467F5]">314,000</p>
                <p className="text-[10px] text-gray-400">누적 방문자</p>
             </div>
          </div>
        </div>

        {/* 3. 하단 액션 버튼 (고정) */}
        <div className="p-6 bg-white border-t border-gray-50 pb-8">
          <div className="flex gap-3 mb-3">
             <Link href="/create" className="flex-1 h-[56px] bg-[#5467F5] text-white rounded-2xl shadow-float flex items-center justify-center font-bold text-[16px] hover:brightness-110 active:scale-[0.98] transition-all">
                ✨ 모임 궁합 보기
             </Link>
             <button className="w-[56px] h-[56px] bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                📂
             </button>
          </div>
          <button className="w-full h-[56px] bg-[#F5F6FA] text-[#333] rounded-2xl font-bold text-[15px] hover:bg-gray-200 transition-colors">
             나 혼자 결과 보기
          </button>
        </div>

      </div>
    </main>
  );
}
