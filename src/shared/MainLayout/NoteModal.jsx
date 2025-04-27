import React from 'react';
import { useUser } from '../user';
import { useEffect } from 'react';
import ModalLayout from '../ModalLayout';

function NoteModal({ isOpen, handleClose }) {
  const user = useUser();

  useEffect(() => {
    if (isOpen && user.hasNewNotes) {
      user.clearNewNotes();
    }
  }, [isOpen, user]);

  return (
    <ModalLayout className="max-w-md w-full" isOpen={isOpen} handleClose={handleClose}>
      {/* 제목 */}
      <h2 className="text-xl font-semibold mb-4">쪽지함</h2>

      {/* 메시지 목록 */}
      <div className="space-y-4 max-h-64 overflow-y-auto">
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="font-medium">홍길동</p>
          <p className="text-sm text-gray-600">
            안녕하세요! 이번 주말에 시간 되세요?
          </p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="font-medium">이순신</p>
          <p className="text-sm text-gray-600">
            회의 자료 확인 부탁드립니다.
          </p>
        </div>
        {/* 필요한 만큼 메시지 추가 */}
      </div>
    </ModalLayout>
  );
};

export default NoteModal;
