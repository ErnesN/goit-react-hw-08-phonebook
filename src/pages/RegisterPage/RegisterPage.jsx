import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'shared/services/auth';
import { isUserLogin } from 'redux/auth/auth-selector';

import RegisterForm from 'modules/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/phonebooks" />;
  }

  return (
    <div className="container">
      <h1 className="page-title">Register page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
