import styles from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          <IoPerson />
          {name}
        </p>
        <p className={styles.text}>
          <FaPhone />
          {number}
        </p>
      </div>

      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
