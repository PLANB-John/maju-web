import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center bg-[#f4f6f8]">
      {/* 모바일 컨테이너 (최대 너비 430px 제한) */}
      <div className="w-full max-w-[430px] bg-white min-h-screen shadow-2xl flex flex-col relative pb-10">
        
        {/* =======================
            1. 헤더 (로고 영역)
           ======================= */}
        <header className="pt-10 pb-2 text-center bg-white z-10">
          <p className="text-[10px] text-ieum-gray font-medium tracking-widest mb-1">서비스 소개 ㅡ</p>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            <span className="text-ieum-purple">마주</span>(Maju)<span className="text-ieum-blue">✦</span>
          </h1>
          <p className="text-sm text-gray-600 mt-1 font-medium">우리사이, 사주로 잇다</p>
        </header>

        {/* =======================
            2. 메인 관계도 그래프 (CSS로 구현)
           ======================= */}
        <div className="relative w-full aspect-square max-h-[360px] mx-auto mt-4 mb-2">
          
          {/* 배경 원형 라인 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[70%] h-[70%] border border-dashed border-gray-200 rounded-full animate-spin-slow"></div>
          </div>

          {/* 연결 선 (SVG Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* 중앙에서 뻗어나가는 선들 */}
            <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="#ffdfb5" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#ffd0d0" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#d0e0ff" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#e0ffd0" strokeWidth="2" />
          </svg>

          {/* 중앙 노드 (나) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <div className="w-16 h-16 bg-white border-2 border-ieum-orange rounded-full flex items-center justify-center shadow-lg mb-1">
              <span className="text-2xl">🐵</span>
            </div>
            <span className="text-xs font-bold text-gray-700 bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-100">나(마주)</span>
          </div>

          {/* 주변 노드들 (동물 아이콘) */}
          {/* 11시 방향 */}
          <div className="absolute top-[25%] left-[20%] flex flex-col items-center animate-bounce duration-[3000ms]">
            <div className="w-12 h-12 bg-[#ecfdf5] border border-green-200 rounded-full flex items-center justify-center shadow-sm text-xl">🐮</div>
            <span className="text-[10px] text-gray-500 mt-1">다정한소</span>
          </div>
          
          {/* 1시 방향 */}
          <div className="absolute top-[25%] right-[20%] flex flex-col items-center animate-bounce duration-[4000ms]">
            <div className="w-12 h-12 bg-[#fff1f2] border border-red-200 rounded-full flex items-center justify-center shadow-sm text-xl">🐷</div>
            <span className="text-[10px] text-gray-500 mt-1">꿀꿀이</span>
          </div>

          {/* 7시 방향 */}
          <div className="absolute bottom-[25%] left-[20%] flex flex-col items-center animate-bounce duration-[3500ms]">
            <div className="w-12 h-12 bg-[#eff6ff] border border-blue-200 rounded-full flex items-center justify-center shadow-sm text-xl">🐲</div>
            <span className="text-[10px] text-gray-500 mt-1">용용이</span>
          </div>

           {/* 5시 방향 */}
           <div className="absolute bottom-[25%] right-[20%] flex flex-col items-center animate-bounce duration-[4500ms]">
            <div className="w-12 h-12 bg-[#fefce8] border border-yellow-200 rounded-full flex items-center justify-center shadow-sm text-xl">🐯</div>
            <span className="text-[10px] text-gray-500 mt-1">호랑이</span>
          </div>
          
          <p className="absolute bottom-4 w-full text-center text-[10px] text-gray-400">
            👆 아이콘을 눌러보세요
          </p>
        </div>

        {/* =======================
            3. 통계 바
           ======================= */}
        <div className="mx-6 bg-white rounded-2xl shadow-card border border-ieum-border py-4 flex justify-between items-center px-8 mb-6">
          <div className="text-center">
            <p className="text-[#5467f5] font-bold text-xl">62,635</p>
            <p className="text-[10px] text-gray-400 mt-0.5">만들어진 모임</p>
          </div>
          <div className="w-[1px] h-8 bg-gray-100"></div>
          <div className="text-center">
            <p className="text-[#5467f5] font-bold text-xl">314,000</p>
            <p className="text-[10px] text-gray-400 mt-0.5">마주한 인연</p>
          </div>
        </div>

        {/* =======================
            4. 광고/배너 영역
           ======================= */}
        <div className="px-6 mb-4">
          <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center border border-gray-100 shadow-sm cursor-pointer">
             <div className="flex items-center gap-2 overflow-hidden">
               <span className="text-xs font-bold text-ieum-blue bg-blue-50 px-1.5 py-0.5 rounded">NEW</span>
               <p className="text-xs text-gray-600 truncate">마음까지 치료하는 새해맞이 궁합 보기</p>
             </div>
             <span className="text-gray-300 text-xs">✕</span>
          </div>
        </div>
        
        {/* 오늘의 운세 텍스트 */}
         <div className="text-center mb-4">
            <span className="text-[10px] text-orange-400">✨ 오늘 운 좋은 사람은?</span>
         </div>


        {/* =======================
            5. 메인 버튼 (Action)
           ======================= */}
        <div className="px-6 space-y-3">
          <div className="flex gap-2 h-[52px]">
            {/* 모임 궁합 생성 */}
            <Link href="/create" className="flex-[2] bg-[#5467f5] hover:bg-[#4354e0] text-white rounded-xl shadow-floating flex items-center justify-center gap-2 font-bold text-[15px] transition-transform active:scale-95">
              <span>👥</span> 모임 궁합 생성
            </Link>
            
            {/* 최근 모임 */}
            <button className="flex-[1] bg-white border border-[#5467f5] text-[#5467f5] rounded-xl flex items-center justify-center gap-1 font-bold text-[13px] hover:bg-blue-50 transition-colors">
              <span>🕒</span> 최근 모임
            </button>
          </div>

          {/* 나와 궁합 생성 */}
          <Link href="/create" className="w-full h-[52px] bg-white border border-gray-200 text-gray-700 rounded-xl flex items-center justify-center gap-2 font-bold text-[15px] shadow-sm hover:bg-gray-50 transition-colors">
             <span className="text-ieum-purple">💜</span> 나와 궁합 생성
          </Link>
        </div>

        {/* =======================
            6. 사주 알아보기 (Grid Cards)
           ======================= */}
        <div className="mt-8 px-6 pb-8 bg-gradient-to-b from-white to-[#f8f9fd]">
            <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-2">
                <h4 className="font-bold text-sm text-gray-800">사주 알아보기</h4>
                <span className="text-[11px] text-[#5467f5] cursor-pointer">전체 보기 →</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
                {/* 카드 1 */}
                <div className="bg-white p-4 rounded-2xl shadow-card border border-gray-50 flex flex-col gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-xl">🐹</div>
                    <div>
                        <p className="font-bold text-[13px] text-gray-800">사주 초보 가이드</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">사주팔자가 무엇인지..</p>
                    </div>
                </div>
                
                {/* 카드 2 */}
                <div className="bg-white p-4 rounded-2xl shadow-card border border-gray-50 flex flex-col gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-xl">🏛️</div>
                    <div>
                        <p className="font-bold text-[13px] text-gray-800">사주 굴절 보는 법</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">내 운명의 흐름은..</p>
                    </div>
                </div>

                {/* 카드 3 */}
                <div className="bg-white p-4 rounded-2xl shadow-card border border-gray-50 flex flex-col gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-xl">⚖️</div>
                    <div>
                        <p className="font-bold text-[13px] text-gray-800">MBTI vs 사주</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">성격 분석 완벽 비교</p>
                    </div>
                </div>

                {/* 카드 4 */}
                <div className="bg-white p-4 rounded-2xl shadow-card border border-gray-50 flex flex-col gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-xl">🚌</div>
                    <div>
                        <p className="font-bold text-[13px] text-gray-800">이별 성격과 궁합</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">우리는 왜 헤어질까</p>
                    </div>
                </div>
            </div>

            {/* 설명 텍스트 */}
             <div className="mt-10 bg-gray-50 p-4 rounded-xl text-[11px] text-gray-400 leading-relaxed border border-gray-100">
                <p className="mb-2 font-bold text-gray-600">마주(Maju)란?</p>
                마주는 사주 팔자를 기반으로 그룹 내 구성원들의 궁합을 분석해주는 무료 서비스입니다. 친구, 동료, 가족 등 모임 구성원들의 사주 데이터를 통해 관계를 재미있게 확인해보세요.
            </div>

            {/* 푸터 */}
            <footer className="mt-8 text-center text-[10px] text-gray-300 space-y-2">
                <div className="space-x-2">
                    <span>서비스 가이드</span>
                    <span>|</span>
                    <span>자주 묻는 질문</span>
                    <span>|</span>
                    <span>의견 보내기</span>
                </div>
                <p>© 2024 Maju. All rights reserved.</p>
            </footer>
        </div>
      </div>
    </main>
  );
}
