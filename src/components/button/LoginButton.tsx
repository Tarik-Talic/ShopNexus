
import { useAuth0 } from '@auth0/auth0-react';

export default function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    !isAuthenticated && (
      <button className="nav__btns-login" onClick={() => loginWithRedirect()}>
        Login
      </button>
    )
  );
}
