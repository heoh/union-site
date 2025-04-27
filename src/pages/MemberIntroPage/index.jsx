import { useState } from 'react';
import MainLayout from '@/shared/MainLayout';

const employees = [
  { id: 1, initials: 'SJ', name: '소정', position: '팀장' },
  { id: 2, initials: 'HW', name: '현우', position: '매니저' },
  { id: 3, initials: 'AR', name: '아람', position: '사원' },
  { id: 4, initials: 'JS', name: '지수', position: '인턴' },
];

const titles = {
  'SJ': { 'HW': '현우씨', 'AR': '아람씨', 'JS': '지수야' },
  'HW': { 'SJ': '소정님', 'AR': '아람님', 'JS': '지수님' },
  'AR': { 'SJ': '소정 선배님', 'HW': '현우 선배님', 'JS': '지수' },
  'JS': { 'SJ': '소정 선배', 'HW': '현우 선배', 'AR': '아람 언니' },
};

const subMenus = ['총장 인사말', '연혁', '부서 소개', '직원 소개'];

function MemberIntroPage() {
  const [selected, setSelected] = useState(null);
  const [activeMenu, setActiveMenu] = useState('직원 소개'); // 현재 선택된 메뉴

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
                직원 소개
              </h1>
              <div className="w-full h-0.5 bg-[#435373]"></div>
            </div>

          {/* 동그라미 그리드 */}
          <div className="grid grid-cols-4 gap-8">
            {employees.map((emp) => (
              <div key={emp.id} className="flex flex-col items-center">
                <button
                  onClick={() => setSelected(emp)}
                  className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold"
                >
                  {emp.initials}
                </button>
                {/* 호칭 출력 */}
                {selected && selected.initials !== emp.initials && (
                  <div className="mt-2 text-sm text-gray-600">
                    {titles[selected.initials]?.[emp.initials] || '-'}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 선택한 직원 정보 출력 */}
          {selected && (
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="text-lg text-gray-700">{selected.position}</p>
            </div>
          )}

        </div>
      </div>
    </MainLayout>
  );
}

export default MemberIntroPage;
