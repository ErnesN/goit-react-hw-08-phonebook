import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

// import styles from './text-field.module.scss';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
