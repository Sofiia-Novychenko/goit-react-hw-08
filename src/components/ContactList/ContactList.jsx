import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={styles.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={styles.item}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
