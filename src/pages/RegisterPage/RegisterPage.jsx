import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signup } from 'shared/services/auth';

import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

import RegisterForm from 'modules/RegisterForm/RegisterForm';
import styles from '../HomePage/home-page.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerBcg}>
        <div className={styles.contactBook}>
          <h1 className={styles.title}>Phonebook</h1>
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#4caf50',
              '&:hover': { backgroundColor: '#29972c' },
            }}
            startIcon={<HomeIcon />}
          >
            <NavLink className={styles.home} to="/">
              Home
            </NavLink>
          </Button>
          <div className={styles.mainContainer}>
            <RegisterForm onSubmit={handleSignup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
