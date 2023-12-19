import React, { useRef } from 'react';
import {NavLink } from 'react-router-dom';
import '../header/Header.css';
import Logo from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LoginButton from './LoginButton';
import Profile from './Profile';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
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
