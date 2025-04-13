import { CiTextAlignCenter } from 'react-icons/ci';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Please log in</h1>
      <LoginForm />
    </>
  );
}
