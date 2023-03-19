import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLoadingContacts } from 'redux/contacts/contacts-selectors';

import PhonebookListItem from './PhonebookListItem/PhonebookListItem';
import Loader from 'shared/components/Loader/Loader';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import styles from './phonebook-list.module.scss';

const PhonebookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const list = useSelector(getFilteredContacts);
  const isContacts = Boolean(list.length);

  const loading = useSelector(getLoadingContacts);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.contactList}>
      {isContacts && (
        <ul className={styles.ul}>
          {list.map(({ id, name, number }) => {
            return (
              <PhonebookListItem
                key={id}
                name={name}
                number={number}
                nameId={id}
              />
            );
          })}
        </ul>
      )}
      {!isContacts && <p className={styles.text}>There are no contacts!</p>}
    </div>
  );
};
export default PhonebookList;
