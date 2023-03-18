import { Outlet } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';

import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
