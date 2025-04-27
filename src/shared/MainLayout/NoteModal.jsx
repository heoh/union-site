import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useUser } from '../user';
import ModalLayout from '../ModalLayout';

function useMails(user) {
  return useMemo(() => {
    const group_mails = {
      헌터즈: [
        {
          from: '헌터즈 대장',
          title: '안녕',
          body: (
            <>
              {user.name}야, 잘 지내니?<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
            </>
          ),
        },
        {
          from: '엘사',
          title: '오~ 쑈열쎄에엛~',
          body: (
            <>
              아아~아아~<br />
              아아~아아~<br />
              아~아~~~아~~아~~~~ 빰!<br />
            </>
          ),
        },
      ],
      이글아이: [
        {
          from: '이글아이 대장',
          title: '안녕',
          body: (
            <>
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
            </>
          ),
        },
      ],
      울프독: [
        {
          from: '울프독 대장',
          title: '안녕',
          body: (
            <>
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
            </>
          ),
        },
      ],
      언더그라운드: [
        {
          from: '언더그라운드 대장',
          title: '안녕',
          body: (
            <>
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
            </>
          ),
        },
      ],
      드라칼: [
        {
          from: '드라칼 대장',
          title: '안녕',
          body: (
            <>
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
              우리 만날래 내가 지금 할말이 있어<br />
            </>
          ),
        },
      ],
    };
    return group_mails[user.group] || [];
  }, [user]);
}

function NoteModal({ isOpen, handleClose }) {
  const user = useUser();
  const mails = useMails(user);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const toggleItem = (index) => {
    selectedIndex == index ? setSelectedIndex(null) : setSelectedIndex(index);
  }

  useEffect(() => {
    if (isOpen && user.hasNewNotes) {
      user.clearNewNotes();
    }
  }, [isOpen, user]);

  return (
    <ModalLayout
      className="max-w-md w-full"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {/* 제목 */}
      <h2 className="text-xl font-semibold mb-4">쪽지함</h2>

      {/* 메시지 목록 */}
      <div className="space-y-4 max-h-dvh overflow-y-auto">
        {mails.map((mail, index) => (
          <NoteListItem key={index} from={mail.from} title={mail.title} isOpen={index == selectedIndex} toggle={() => toggleItem(index)} >
            {mail.body}
          </NoteListItem>
        ))}
      </div>
    </ModalLayout>
  );
}

export default NoteModal;

function NoteListItem({ key, from, title, children, isOpen, toggle }) {
  return (
    <div key={key} className="border-b border-slate-200">
      <button onClick={toggle} className="w-full flex justify-between items-center py-5 text-slate-800 cursor-pointer">
        <div className="flex-1">
          <div className="text-left font-bold">{title}</div>
          <div className="text-left text-xs text-slate-500">{from}</div>
        </div>
        <span id="icon-1" className="text-slate-800 transition-transform duration-300">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      <div className={`overflow-auto transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <div className="pb-5 text-sm text-slate-800">
          {children}
        </div>
      </div>
    </div>
  );
}
