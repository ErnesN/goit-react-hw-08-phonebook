import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selector';

import LoginForm from 'modules/LoginForm/LoginForm';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
};

export default LoginPage;
