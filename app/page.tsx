import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fd] flex justify-center text-[#1f2937]">
      {/* 모바일 화면 크기로 제한 (가운데 정렬) */}
      <div className="w-full max-w-[430px] bg-white min-h-screen shadow-lg flex flex-col">
        
        {/* 1. 상단 헤더 */}
        <header className="pt-8 pb-4 text-center">
          <p className="text-xs text-[#5b6bf0] font-bold mb-1">서비스 소개</p>
          <h1 className="text-xl font-bold text-gray-800">
            우리사이, <span className="text-[#5b6bf0]">마주</span>보다
          </h1>
        </header>

        {/* 2. 메인 비주얼 (관계 그래프 모양 흉내) */}
        <div className="px-6 py-2">
          <div className="bg-[#f8f9fd] rounded-[2rem] p-8 aspect-square relative flex items-center justify-center border border-gray-100">
            {/* 중앙 원 */}
            <div className="z-10 bg-white px-4 py-2 rounded-full border-2 border-[#ff9f43] text-[#ff9f43] font-bold text-sm shadow-sm">
              나(마주)
            </div>
            
            {/* 주변 장식 (이모지로 대체) */}
            <div className="absolute top-10 left-12 text-3xl animate-bounce">🐮</div>
            <div className="absolute bottom-12 right-10 text-3xl animate-bounce duration-700">🐷</div>
            <div className="absolute top-16 right-8 text-3xl">🐲</div>
            <div className="absolute bottom-10 left-14 text-3xl">🐯</div>
            
            {/* 연결 선 (느낌만 구현) */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#5b6bf0" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#5b6bf0" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#ff9f43" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="#5b6bf0" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* 3. 통계 바 */}
        <div className="flex justify-center items-center py-6 border-b border-gray-100 mx-6">
          <div className="flex-1 text-center border-r border-gray-100">
            <h3 className="text-[#5b6bf0] font-bold text-lg">62,635</h3>
            <p className="text-[10px] text-gray-400">만들어진 모임</p>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-[#5b6bf0] font-bold text-lg">314,000</h3>
            <p className="text-[10px] text-gray-400">마주한 인연</p>
          </div>
        </div>

        {/* 4. 광고 배너 영역 (임시) */}
        <div className="px-6 py-4">
           <div className="bg-gray-50 rounded-xl p-3 text-[10px] text-gray-400 flex items-center justify-between">
              <span>✨ 우리 팀 숨은 환상멤버는?</span>
              <span className="text-gray-300">✕</span>
           </div>
        </div>

        {/* 5. 핵심 버튼 영역 */}
        <div className="px-6 space-y-3 pb-8">
          <div className="flex gap-3">
            {/* 모임 궁합 생성 버튼 */}
            <Link href="/create" className="flex-1 bg-[#5b6bf0] text-white py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:bg-[#4a5ae0] transition-colors">
              <span>👥</span> 모임 궁합 생성
            </Link>
            
            {/* 최근 모임 버튼 */}
            <button className="px-4 py-3 rounded-xl border border-[#5b6bf0] text-[#5b6bf0] font-bold text-sm bg-white hover:bg-blue-50 transition-colors">
              🕒 최근 모임
            </button>
          </div>

          {/* 나와 궁합 생성 버튼 */}
          <Link href="/create" className="w-full bg-white border border-[#e5e7eb] text-[#1f2937] py-3 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
             <span className="text-[#8b5cf6]">💜</span> 나와 궁합 생성
          </Link>
        </div>

        {/* 6. 하단 메뉴 그리드 (사주 알아보기) */}
        <div className="bg-[#f8f9fd] flex-1 px-6 py-8">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-sm text-gray-700">사주 알아보기</h4>
                <span className="text-xs text-[#5b6bf0]">전체 보기 →</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                    <span className="text-2xl">🐹</span>
                    <div className="text-left">
                        <p className="font-bold text-xs">사주 초보 가이드</p>
                        <p className="text-[10px] text-gray-400">사주팔자가 무엇인지..</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <div className="text-left">
                        <p className="font-bold text-xs">사주 굴절 보는 법</p>
                        <p className="text-[10px] text-gray-400">내 운명의 흐름은..</p>
                    </div>
                </div>
                {/* 칸 맞추기용 더미 */}
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                    <span className="text-2xl">⚖️</span>
                     <div className="text-left">
                        <p className="font-bold text-xs">MBTI vs 사주</p>
                        <p className="text-[10px] text-gray-400">성격 분석 비교..</p>
                    </div>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                    <span className="text-2xl">🚌</span>
                     <div className="text-left">
                        <p className="font-bold text-xs">이별 성격과 궁합</p>
                        <p className="text-[10px] text-gray-400">우리는 왜 헤어질까..</p>
                    </div>
                </div>
            </div>

            {/* 서비스 설명 텍스트 */}
            <div className="mt-8 text-[10px] text-gray-400 leading-relaxed">
                <p className="mb-2 font-bold text-gray-500">마주(Maju)란?</p>
                마주는 사주 팔자를 기반으로 그룹 내 구성원들의 궁합을 분석해주는 서비스입니다. 친구, 동료, 가족 등 모임 구성원들의 사주 데이터를 통해 관계를 재미있게 확인할 수 있습니다.
            </div>

            <footer className="mt-8 mb-4 text-center text-[9px] text-gray-300">
                서비스 가이드 | 자주 묻는 질문 | 의견 보내기<br/>
                © 2024 Maju. All rights reserved.
            </footer>
        </div>

      </div>
    </main>
  );
}
