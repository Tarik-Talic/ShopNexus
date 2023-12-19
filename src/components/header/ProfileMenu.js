import React from 'react';
import LogoutButton from './LogoutButton';
import { NavLink } from 'react-router-dom';
const ProfileMenu = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <div className="profile-menu slide-bottom">
      <p className="profile-link">Profile</p>
      <NavLink to="/shopping-cart" style={linkStyle}>
        <p className="profile-link">Cart</p>
      </NavLink>
      <p className="profile-link">Wish List</p>
      <LogoutButton />
    </div>
  );
};

export default ProfileMenu;
