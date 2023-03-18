import { useSelector, useDispatch } from 'react-redux';

import styles from './phonebooks-filter.module.scss';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    const action = setFilter(e.target.value);
    dispatch(action);
  };

  return (
    <label className={styles.filter}>
      Find contact
      <input type="text" value={filter} onChange={handleFilter} />
    </label>
  );
};
