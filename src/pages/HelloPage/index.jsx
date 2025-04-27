import { useState } from 'react';
import MainLayout from '@/shared/MainLayout';

const subMenus = ['총장 인사말', '연혁', '부서 소개', '직원 소개'];

function HelloPage() {
  const [selected, setSelected] = useState(null);
  const [activeMenu, setActiveMenu] = useState('총장 인사말'); // 현재 선택된 메뉴
  
  return (
    <MainLayout>
      <div className="flex max-w-7xl mx-auto px-8 mt-8 space-x-8">
        
        {/* 좌측 네비게이션 */}
        <div className="hidden lg:flex flex-col w-60 rounded-md border-[0.5px] border-[#435373]">

          {/* 대제목 */}
          <div className=" bg-[#435373] h-40 flex items-center justify-center">
            <h2 className="text-[#ffffff] font-bold text-lg text-center">
              유니온 소개
            </h2>
          </div>

          {/* 소메뉴 */}
          <div className="flex flex-col divide-y divide-gray-300">
            {subMenus.map((menu, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMenu(menu)}
                className={`text-sm text-left font-semibold px-4 py-4 transition 
                  ${
                    activeMenu === menu
                      ? 'border-l-4 border-[#456EBF] text-[#456EBF]'
                      : 'text-[#404040] hover:text-[#456EBF]'
                  }`}
              >
                {menu}
              </button>
            ))}
          </div>

        </div>


        {/* 본문 */}
        <div className="flex-1 flex flex-col items-center space-y-8">

          {/* 제목 */}
            <div className="w-full text-left mt-8 mb-6">
              <h1 className="text-3xl font-bold text-[#435373] mb-2">
                총장 인사말
              </h1>
              <div className="w-full h-0.5 bg-[#435373]"></div>
            </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HelloPage;
