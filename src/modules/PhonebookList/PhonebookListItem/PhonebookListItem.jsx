import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-operations';

import styles from './phonebook-list-item.module.scss';

const PhonebookListItem = ({ nameId, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.contactInfo}>
        <span className={styles.name}>{name}:</span>
        <span className={styles.number}>{number}</span>
      </div>
      <button
        className={styles.button}
        onClick={() => handleDeleteContact(nameId)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
export default PhonebookListItem;

PhonebookListItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
