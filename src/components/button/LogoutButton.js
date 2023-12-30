import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { TbLogout } from 'react-icons/tb';
function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <p className="profile-link" onClick={() => logout()}>
        Logout <TbLogout/>
      </p>
    )
  );
}

export default LogoutButton;
