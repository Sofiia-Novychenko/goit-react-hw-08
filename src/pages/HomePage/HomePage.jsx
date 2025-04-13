import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <title>Welcome</title>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Contact Manager</h1>
        <p className={styles.subtitle}>
          Keep your contacts organized, secure, and easily accessible.
        </p>
        <div className={styles.infoBlock}>
          <h2>🛠 What can you do here?</h2>
          <ul>
            <li>Add new contacts</li>
            <li>Edit or delete existing ones</li>
            <li>Sync them with your account</li>
          </ul>
        </div>
        <div className={styles.authorBlock}>
          <h2>👨‍💻 Developer</h2>
          <p>
            Created by <strong>Sofiia Novychenko</strong> using React, Redux &
            Formik.
          </p>
        </div>
      </div>
    </>
  );
}
