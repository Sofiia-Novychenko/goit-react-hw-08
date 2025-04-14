import { useEffect } from 'react';
import styles from './ContactsPage.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { FadeLoader } from 'react-spinners';
import {
  selectContactCount,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contactsCount = useSelector(selectContactCount);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your number of contacts: {contactsCount}</h1>
      <div className={styles.formAndSearchContainer}>
        <ContactForm />
        <SearchBox />
      </div>
      {loading && !error && (
        <div className={styles.loaderContainer}>
          <b>Request in progress...</b>

          <FadeLoader color="#2e2f42" />
        </div>
      )}
      <ContactList />
    </div>
  );
}
