import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useUser } from '../user';

function MemberStatus({ className, openNoteModal }) {
  const navigate = useNavigate();
  const user = useUser();

  const handleLogout = () => {
    user.logout();
    navigate('/');
  };

  if (user.isLoggedIn()) {
    return (
      <div className={className}>
        <div className="flex">
          <div>
            {user.hasNewNotes ? (
              <button onClick={openNoteModal} className="cursor-pointer">새쪽지함</button>
            ) : (
              <button onClick={openNoteModal} className="cursor-pointer">쪽지함</button>
            )}
          </div>
          <div className="">
            <span>{user.name} 님</span> 환영합니다!
          </div>
          <button
            onClick={handleLogout}
            className="text-xs border-[0.5px] border-gray-400 px-2 py-1 rounded flex items-center cursor-pointer"
          >
            로그아웃
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <Link to="/login">
          <button className="text-xs border-[0.5px] border-gray-400 px-2 py-1 rounded flex items-center cursor-pointer">
            구성원 로그인
          </button>
        </Link>
      </div>
    );
  }
}

export default MemberStatus;
