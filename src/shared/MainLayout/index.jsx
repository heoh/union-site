import React from 'react';
import { Link } from 'react-router';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* 알림바 */}
      <div className="w-full bg-[var(--light-purple)] text-center text-sm py-1 font-sans font-normal">
        게이트 위험 수준 [안전] 단계입니다
      </div>

      {/* 메뉴바 */}
      <div className="w-full border-b border-b-gray-400 border-b-[0.5px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
          <div className="flex text-base">
            <button className="px-4 py-2 flex items-center border-l-[0.5px] border-gray-400">조직도 안내</button>
            <button className="px-4 py-2 flex items-center border-l-[0.5px] border-gray-400">민원 바로가기</button>
            <button className="px-4 py-2 flex items-center border-l-[0.5px] border-r-[0.5px] border-gray-400">정보공개포털</button>
          </div>
          <Link to="/login">
            <button className="text-xs border-[0.5px] border-gray-400 px-2 py-1 rounded flex items-center">
              구성원 로그인
            </button>
          </Link>
        </div>
      </div>


      {/* 메인영역 */}
      <div className="w-full border-b border-b-gray-400 border-b-[0.5px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 ">
          {/* 로고 + 문구 */}
          <div className="flex flex-col items-center pb-0.5">
            <span className="text-xl text-gray-500 font-gs">시민의 힘 세계의 미래</span>
            <h1 className="text-5xl font-bold tracking-widest">UNION</h1>
          </div>

          {/* 네비게이션 메뉴 */}
          <div className="flex space-x-12 text-lg">
            {/* 유니온 소개 메뉴 */}
            <div className="relative group flex flex-col items-center">
              <button className="px-4 py-2">
                유니온 소개
              </button>

              {/* 드롭다운 메뉴 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:flex flex-col bg-white border-2 border-[#877b93] rounded-md w-[8rem] p-2 z-10 text-base text-center">
                <Link to="/hello" className="py-1 hover:bg-[var(--light-purple)] rounded">총장 인사말</Link>
                <Link to="/timeline" className="py-1 hover:bg-[var(--light-purple)] rounded">연혁</Link>
                <Link to="/teamIntro" className="py-1 hover:bg-[var(--light-purple)] rounded">부서 소개</Link>
                <Link to="/memberIntro" className="py-1 hover:bg-[var(--light-purple)] rounded">직원 소개</Link>
              </div>
            </div>




            {/* 유니온 소식 메뉴 */}
            <div className="relative group flex flex-col items-center">
              <button className="px-4 py-2">
                유니온 소식
              </button>

              {/* 드롭다운 메뉴 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:flex flex-col bg-white border-2 border-[#877b93] rounded-md w-[8rem] p-2 z-10 text-base text-center">
                <Link to="/notice" className="py-1 hover:bg-[var(--light-purple)] rounded">공지사항</Link>
                <Link to="/schedule" className="py-1 hover:bg-[var(--light-purple)] rounded">일정</Link>
                <Link to="/career" className="py-1 hover:bg-[var(--light-purple)] rounded">채용</Link>
              </div>
            </div>

            {/* 직원 마당 메뉴 */}
            <div className="relative group flex flex-col items-center">
              <button className="px-4 py-2">
                직원 마당
              </button>

              {/* 드롭다운 메뉴 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:flex flex-col bg-white border-2 border-[#877b93] rounded-md w-[8rem] p-2 z-10 text-base text-center">
                <Link to="/nojo" className="py-1 hover:bg-[var(--light-purple)] rounded">노동조합</Link>
              </div>
            </div>

            {/* 시민 마당 메뉴 */}
            <div className="relative group flex flex-col items-center">
              <button className="px-4 py-2">
                시민 마당
              </button>

              {/* 드롭다운 메뉴 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:flex flex-col bg-white border-2 border-[#877b93] rounded-md w-[8rem] p-2 z-10 text-base text-center">
                <Link to="/minwonList" className="py-1 hover:bg-[var(--light-purple)] rounded">민원 사례</Link>
                <Link to="/minwonSubmit" className="py-1 hover:bg-[var(--light-purple)] rounded">민원 신청</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div className="w-full">
        { children }
      </div>

    </div>
    
  );
};

export default MainLayout;
