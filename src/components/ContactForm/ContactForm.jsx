import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const initialValues = {
  name: '',
  number: '',
};
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('This field is required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('This field is required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Name
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage
              name="name"
              className={styles.error}
              component="span"
            />
          </label>
          <label className={styles.label}>
            Number
            <Field type="tel" name="number" className={styles.input} />
            <ErrorMessage
              name="number"
              className={styles.error}
              component="span"
            />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
