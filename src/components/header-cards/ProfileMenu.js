import React from 'react';
import LogoutButton from '../button/LogoutButton';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
const ProfileMenu = () => {
  const { totalItems } = useCart();
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
      <NavLink to="/shopping-cart" style={linkStyle}>
        <p className="profile-link">
          Cart <FaShoppingCart />
          {totalItems}
        </p>
      </NavLink>
      <LogoutButton />
    </div>
  );
};

export default ProfileMenu;
