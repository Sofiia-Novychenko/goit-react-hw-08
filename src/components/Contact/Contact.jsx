import styles from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact, patchContact } from '../../redux/contacts/operations';
import { useRef, useState } from 'react';

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const nameRef = useRef(null);
  const numberRef = useRef(null);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.error('Contact deleted');
      })
      .catch(() => {
        toast.error('Failed to delete contact');
      });
  };
  const handleEditToggle = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    const newName = nameRef.current.value;
    const newNumber = numberRef.current.value;

    dispatch(
      patchContact({
        contactId: id,
        updatedData: { name: newName, number: newNumber },
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Contact edited');
        setIsEditing(false);
      })
      .catch(() => {
        toast.error('Failed to update contact');
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {isEditing ? (
          <>
            <input defaultValue={name} ref={nameRef} className={styles.input} />
            <input
              defaultValue={number}
              ref={numberRef}
              className={styles.input}
            />
          </>
        ) : (
          <>
            <p className={styles.text}>
              <IoPerson />
              {name}
            </p>
            <p className={styles.text}>
              <FaPhone />
              {number}
            </p>
          </>
        )}
      </div>
      {isEditing ? (
        <button className={styles.editButton} onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className={styles.editButton} onClick={handleEditToggle}>
          Edit
        </button>
      )}

      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
