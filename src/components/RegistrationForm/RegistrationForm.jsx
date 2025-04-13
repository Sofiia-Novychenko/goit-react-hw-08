import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import styles from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .min(7, 'At least 7 characters')
    .required('This field is required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Username
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage
              name="name"
              className={styles.error}
              component="span"
            />
          </label>
          <label className={styles.label}>
            Email
            <Field type="email" name="email" className={styles.input} />
            <ErrorMessage
              name="email"
              className={styles.error}
              component="span"
            />
          </label>
          <label className={styles.label}>
            Password
            <Field type="password" name="password" className={styles.input} />
            <ErrorMessage
              name="password"
              className={styles.error}
              component="span"
            />
          </label>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
