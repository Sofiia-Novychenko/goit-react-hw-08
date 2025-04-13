import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './AppBar.module.css';

export default function AppBar() {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {IsLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
