import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListElement from './ContactListElement';
// import { removeContact } from '../../redux/contacts/contacts-actions';
import {
  fetchItems,
  deleteItem,
} from '../../redux/contacts/contacts-operations';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const filteredContacts = useSelector(({ contacts: { items, filter } }) =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // При первом рендере загружаем контакты из базы данных
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
                // whenDelete={() => dispatch(removeContact(id))}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
