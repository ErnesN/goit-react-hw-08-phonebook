import { useDispatch } from 'react-redux';

import { login } from 'shared/services/auth';

import LoginForm from 'modules/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <h1 className="page-title">Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
