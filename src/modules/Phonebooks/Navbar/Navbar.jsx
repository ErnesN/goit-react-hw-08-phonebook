import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { isUserLogin } from 'redux/auth/auth-selector';
import styles from './navbar.module.scss';
const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {!isLogin && <NavbarAuth />}
        {isLogin && <NavbarUser />}
      </div>
    </div>
  );
};
export default Navbar;
