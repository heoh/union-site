import React from 'react';
import BannerSlide from './components/BannerSlide';
import MainLayout from '@/shared/MainLayout';

function MainPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-8 mt-8 flex">
        {/* 왼쪽 배너 */}
        <div className="w-1/2 pr-4">
          <BannerSlide />
        </div>

        {/* 오른쪽 영역 */}
        <div className="w-1/2">
          <div className="space-y-12">
            {/* 게이트 현황 */}
            <div className="panel gate-status">
              <h2>이번 주 게이트 현황</h2>
              <div className="status-grid">
                {[
                  { grade: 'EX', count: 0, className: 'ex' },
                  { grade: 'S', count: 4, className: 's' },
                  { grade: 'A', count: 7, className: 'a' },
                  { grade: 'B', count: 10, className: 'b' },
                  { grade: 'C', count: 15, className: 'c' },
                  { grade: 'D', count: 23, className: 'd' },
                ].map(({ grade, count, className }, idx) => (
                  <div key={idx} className={`status-card ${className}`}>
                    <div className="label-section">{grade}</div>
                    <div className="count-section">{count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
