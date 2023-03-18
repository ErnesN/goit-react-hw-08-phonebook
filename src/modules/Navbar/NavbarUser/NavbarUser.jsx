import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selector';
import styles from './navbar-user.module.scss';

const NavbarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navbarUser}>
      <p className={styles.email}>{email}</p>
      <button className={styles.button} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default NavbarUser;
