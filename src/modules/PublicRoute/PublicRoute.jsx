import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'redux/auth/auth-selector';

const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="/phonebooks" />;
  }
  return <Outlet />;
};

export default PublicRoute;
