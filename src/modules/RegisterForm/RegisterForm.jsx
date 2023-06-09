import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import fields from './fields';
import initialState from './initialState';

import styles from './register-form.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          value={name}
          onChange={handleChange}
          {...fields.name}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          value={email}
          onChange={handleChange}
          {...fields.email}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
      </label>
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
