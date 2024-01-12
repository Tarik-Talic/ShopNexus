import React from 'react';
import { LogoutButton } from '../';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
const ProfileMenu = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <div className="profile-menu slide-bottom">
      <NavLink to="/profile-info" style={linkStyle}>
        <p className="profile-link">
          Profile <FaUser />
        </p>
      </NavLink>
      <LogoutButton />
    </div>
  );
};

export default ProfileMenu;
