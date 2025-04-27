import { useState } from 'react';
import MainLayout from '@/shared/MainLayout';

const employees = [
  { id: 1, initials: 'E', name: 'E', position: '헌터즈' },
  { id: 2, initials: 'N', name: 'N', position: '헌터즈' },
  { id: 3, initials: 'S', name: 'S', position: '헌터즈' },
  { id: 4, initials: '오', name: '오르티', position: '헌터즈' },
  { id: 5, initials: 'M', name: 'M', position: '울프독' },
  { id: 6, initials: '테', name: '테리', position: '울프독' },
  { id: 7, initials: 'A', name: 'A', position: '울프독' },
  { id: 8, initials: 'I', name: 'I', position: '울프독' },
  { id: 9, initials: 'R', name: 'R', position: '언더그라운드' },
  { id: 10, initials: 'Y', name: 'Y', position: '언더그라운드' },
  { id: 11, initials: 'X', name: 'X', position: '언더그라운드' },
  { id: 12, initials: '라', name: '라멘타', position: '그림리퍼' },
  { id: 13, initials: 'F', name: '하피', position: '그림리퍼' },
  { id: 14, initials: '루', name: '루두스', position: '그림리퍼' },
  { id: 15, initials: 'P', name: '뽀삐', position: '그림리퍼' },
  { id: 16, initials: '느', name: '느베야', position: '그림리퍼' },
];

const titles = {
  'J': { 
    'R': ['R', '그 사람', 'R씨'],
    '테': ['테리'],
    'F': ['그', 'F', '에런', '페피'],
    'A': ['A 군'],
    'L': ['L', '라비'],
    'E': ['선배님', 'E 님'],
    'N': ['야', '걔', '가끔 누나'],
    'Y': ['Y 군'],
    'M': ['레지오'],
    'X': ['X 씨'],
    '오': ['오르티'],
    '라': ['사살 대상'],
    '루': ['루두스'],
    'P': ['P'],
    '느': ['없음']
  },
  'R': {
    'J': ['J', '그 사람', 'J 씨'],
    '테': ['도버만 군'],
    'F': ['그거'],
    'A': ['A 군'],
    'L': ['블랑쉬', '라비', 'L'],
    'E': ['선배님'],
    'N': ['미친 여자', 'N'],
    'Y': ['Y 군'],
    'M': ['M'],
    'X': ['걔'],
    '오': ['작은 용'],
    '라': ['쓰레기 하나'],
    '루': ['시끄러운 놈'],
    'P': ['P', '시체'],
    '느': ['없음']
  },
  '테': {
    'J': ['형'],
    'R': ['슨배임'],
    'F': ['배신자', '에런'],
    'A': ['저 새끼', '그 새끼', '베르너'],
    'L': ['라비라비'],
    'E': ['선배', '대부님'],
    'N': ['누님'],
    'Y': ['와이와이'],
    'M': ['형님'],
    'X': ['형', '은인'],
    '오': ['용용이'],
    '라': ['씨발 새끼'],
    '루': ['광대'],
    'P': ['선배'],
    '느': ['없음']
  },
  'F': {
    'J': ['주다스', '주디'],
    'R': ['리하르트', '개새끼'],
    '테': ['로이드'],
    'A': ['배트맨'],
    'L': ['라비', '작은 토끼'],
    'E': ['형님'],
    'N': ['니니', '내 절친'],
    'Y': ['어리고 하얀 친구'],
    'M': ['레지오'],
    'X': ['예예'],
    '오': ['오르토스'],
    '라': ['그 양반'],
    '루': ['루디'],
    'P': ['피에르'],
    '느': ['없음']
  },
  'A': {
    'J': ['선배님', 'J 님'],
    'R': ['선배님', 'R 님'],
    '테': ['그 새끼', '저 새끼', '도버만'],
    'F': ['선배', '배신자'],
    'L': ['L 군', '당신', '블리'],
    'E': ['선배님', 'E 님'],
    'N': ['누님'],
    'Y': ['Y 씨'],
    'M': ['선배님', 'M 씨'],
    'X': ['그 남자'],
    '오': ['오르티'],
    '라': ['악인'],
    '루': ['시끄러운 광대'],
    'P': ['강아지'],
    '느': ['없음']
  },
  'L': {
    'J': ['형'],
    'R': ['아저씨', '삼촌', '리리'],
    '테': ['테리테리'],
    'F': ['형'],
    'A': ['A 씨', '헤시', '형'],
    'E': ['삼촌'],
    'N': ['누나'],
    'Y': ['형'],
    'M': ['형'],
    'X': ['형', '가끔 누나'],
    '오': ['오리오리'],
    '라': ['불쌍한 사람'],
    '루': ['연결된 사람'],
    'P': ['형', '뽀삐'],
    '느': ['없음']
  },
  'E': {
    'J': ['J 군', '작은 와이즈맨'],
    'R': ['R 군', '하이넬'],
    '테': ['테리'],
    'F': ['F'], 
    'A': ['베르너 군'],
    'L': ['라비', 'L 군'],
    'N': ['N', '큰 와이즈맨'],
    'Y': ['Y', '백'],
    'M': ['레지오'],
    'X': ['X 군'],
    '오': ['오르티'],
    '라': ['그 녀석'],
    '루': ['그 녀석의 수하'],
    'P': ['P 군'],
    '느': ['없음']
  },
  'N': {
    'J': ['야', '너', '저 새끼'],
    'R': ['미친 새끼', '브루주아 놈'],
    '테': ['테리'],
    'F': ['에런', '절친'],
    'A': ['Kiddo'],
    'L': ['토끼'],
    'E': ['선배', '삼촌'],
    'Y': ['하얀 말랑이'],
    'M': ['가면남'],
    'X': ['그 미친 놈'],
    '오': ['오르티', '용용이'],
    '라': ['또라이'],
    '루': ['광대'],
    'P': ['영웅?'],
    '느': ['없음']
  },
  'Y': {
    'J': ['J 선배님'],
    'R': ['R 선배님'],
    '테': ['선배님', '형님'],
    'F': ['영웅'],
    'A': ['선배님', '형님'],
    'L': ['L 님'],
    'E': ['선배님'],
    'N': ['누님'],
    'M': ['선배님'],
    'X': ['챙겨줘야 하는 선배님'],
    '오': ['용용이'],
    '라': ['이상하신 분'],
    '루': ['영웅님의 서방님…?'],
    'P': ['영웅'],
    '느': ['없음']
  },
  'M': {
    'J': ['와이즈맨', 'J'],
    'R': ['R 씨'],
    '테': ['테리 군'],
    'F': ['F'],
    'A': ['A 군'],
    'L': ['L', '어린 아이'],
    'E': ['선배님'],
    'N': ['N 씨'],
    'Y': ['Y 씨'],
    'X': ['그 미친놈'],
    '오': ['드래곤?', '용?'],
    '라': ['라멘타'],
    '루': ['루두스'],
    'P': ['P'],
    '느': ['없음']
  },
  'X': {
    'J': ['선배', '형'],
    'R': ['주인님'],
    '테': ['테리'],
    'F': ['형님'],
    'A': ['베르너'],
    'L': ['작고 귀여운 아이'],
    'E': ['선배님'],
    'N': ['언니', '누나'],
    'Y': ['Y 군'],
    'M': ['개새끼'],
    '오': ['오르티'],
    '라': ['예술가'],
    '루': ['연출가'],
    'P': ['P'],
    '느': ['없음']
  },
  '오': {
    'J': ['까망이!'],
    'R': ['화르륵!'],
    '테': ['짜릿짜릿!'],
    'F': ['팔락이', '하피'],
    'A': ['딱딱이'],
    'L': ['리퍼가 따라한 인간'],
    'E': ['반짝이'],
    'N': ['누나', '초콜릿 잘 주는 인간', '쌩쌩이'],
    'Y': ['하양이'],
    'M': ['슬라임'],
    'X': ['하늘이'],
    '라': ['비린내 나는 인간'],
    '루': ['펑펑이'],
    'P': ['으르렁!'],
    '느': ['없음']
  },
  '라': {
    'J': ['깨닫지 못한 자'],
    'R': ['닮되 닮지 못한 자'],
    '테': ['어리석은 개'],
    'F': ['위대한 존재를 잇는 자'],
    'A': ['길가를 나도는 개'],
    'L': ['선악과'],
    'E': ['잘못된 신념을 품은 자'],
    'N': ['진창에 빠짐을 모르는 자'],
    'Y': ['눈이 가려진 가여운 자'],
    'M': ['잃어버린 자'],
    'X': ['이해자'],
    '오': ['위대한 존재 중 하나'],
    '루': ['나의 오른팔'],
    'P': ['나의 맹수'],
    '느': ['없음']
  },
  '루': {
    'J': ['쇼를 방해하는 과묵하신 분'],
    'R': ['가장 거슬리는 분'],
    '테': ['멍청한 강아지'],
    'F': ['내 사랑의 옛 동료'],
    'A': ['처음 보는 개'],
    'L': ['관전자'],
    'E': ['안타까우신 분'],
    'N': ['쇼를 망치는 분'],
    'Y': ['보물을 숨긴 분'],
    'M': ['화려한 배우'],
    'X': ['연출가'],
    '오': ['위대하신 분'],
    '라': ['교주님'],
    'P': ['내 사랑', '나의 맹수'],
    '느': ['없음']
  },
  'P': {
    'J': ['깜짝 놀라는 애'],
    'R': ['뜨거운 애'],
    '테': ['멍멍이!'],
    'F': ['하피~ 하피!'],
    'A': ['공 던져주는 애'],
    'L': ['친구?'],
    'E': ['따뜻한 아저씨'],
    'N': ['같이 놀아주는 친구'],
    'Y': ['밥을 챙겨주는 좋은 사람'],
    'M': ['사탕을 주는 인간'],
    'X': ['인형놀이 친구'],
    '오': ['용용이'],
    '라': ['교주님'],
    '루': ['내 사랑'],
    '느': ['없음']
  },
  '느': {
    'J': ['없음'],
    'R': ['없음'],
    '테': ['없음'],
    'F': ['없음'],
    'A': ['없음'],
    'L': ['없음'],
    'E': ['없음'],
    'N': ['없음'],
    'Y': ['없음'],
    'M': ['없음'],
    'X': ['없음'],
    '오': ['없음'],
    '라': ['없음'],
    '루': ['없음'],
    'P': ['없음']
  }
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
