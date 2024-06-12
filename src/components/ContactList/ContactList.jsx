import Contact from '../Contact/Contact.jsx'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.menu}>
      {filteredContacts.map(contact => (
        <li className={css.list} key={contact.id} >
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}