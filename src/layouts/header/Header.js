import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../header/Header.css';
import Logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LoginButton from '../../components/button/LoginButton';
import Profile from '../../components/header-cards/Profile';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from 'react-use-cart';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  const { totalItems } = useCart();
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };
  return (
    <>
      <nav>
        <ul ref={navRef}>
          <img src={Logo} alt="LogoImage" className="mainLogo" />

          <NavLink to="/" style={linkStyle}>
            <li> Home</li>
          </NavLink>

          <NavLink to="/products" style={linkStyle}>
            <li> Products </li>
          </NavLink>

          <NavLink to="/shopping-cart" style={linkStyle}>
            <li>
              <FaShoppingCart />
              {totalItems}
            </li>
          </NavLink>
          <span className="profile-container">
            <LoginButton />
            <Profile />
          </span>
          <button className="hamBars" onClick={showNavBar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Header;
