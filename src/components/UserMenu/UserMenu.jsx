import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Welcome, {user.name}!</p>
      <button
        className={styles.btn}
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}
