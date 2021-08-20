import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredItems } from '../../redux/contacts/contacts-selectors';
import ContactListElement from './ContactListElement';
import {
  fetchItems,
  deleteItem,
} from '../../redux/contacts/contacts-operations';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredItems);

  const dispatch = useDispatch();

  console.log('Render');

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      {filteredContacts.length > 0 && (
        <ul className={styles.ContactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li className={styles.ContactList__Item} key={id}>
              <ContactListElement
                name={name}
                number={number}
                whenDelete={() => dispatch(deleteItem(id))}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
