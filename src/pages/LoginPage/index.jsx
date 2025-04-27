import MainLayout from '@/shared/MainLayout';
import { useNavigate } from 'react-router';
import { useUser } from '@/shared/user';

function LoginPage() {
  const navigate = useNavigate();
  const user = useUser();

  const handleLogin = () => {
    const username = document.querySelector('#login_form input[name="username"]').value;
    const group = document.querySelector('#login_form input[name="group"]').value;
    user.login(username, group);
    navigate('/');
  };

  return (
    <MainLayout>
      <div>
        <form id="login_form" action={handleLogin}>
          <input name="username" type="text" />
          <input name="password" type="password" />
          <input name="group" type="text" />
          <button>로그인</button>
        </form>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
