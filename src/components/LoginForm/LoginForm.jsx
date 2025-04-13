import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import styles from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};
const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('This field is required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
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
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
}
