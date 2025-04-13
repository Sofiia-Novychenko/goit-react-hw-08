import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const getLinkStyles = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export default function Navigation() {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" className={getLinkStyles}>
            Home
          </NavLink>
        </li>
        {IsLoggedIn && (
          <li className={styles.item}>
            <NavLink to="/contacts" className={getLinkStyles}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
