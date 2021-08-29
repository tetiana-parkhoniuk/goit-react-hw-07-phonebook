import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from 'components/ContactsListItem/';
import styles from 'components/ContactsList/ContactsList.module.css';
import contactsActions from 'redux/contacts/contacts-actions';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id))

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};