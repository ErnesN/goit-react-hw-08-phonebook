import { lazy, Suspense } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const Phonebook = lazy(() => import('./modules/Phonebooks/Phonebooks'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route
          index
          element={
            <PublicRoute redirectTo="/contacts" component={<HomePage />} />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="*"
          element={
            <PublicRoute redirectTo="/contacts" component={<HomePage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Routes>
      <Outlet />
    </Suspense>
  );
};

export default App;
