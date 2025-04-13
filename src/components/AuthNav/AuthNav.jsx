import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import clsx from 'clsx';

const getLinkStyles = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export default function AuthNav() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/register" className={getLinkStyles}>
          Register
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/login" className={getLinkStyles}>
          Log in
        </NavLink>
      </li>
    </ul>
  );
}
