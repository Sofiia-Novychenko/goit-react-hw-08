import styles from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.error('Contact deleted');
      })
      .catch();
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
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
