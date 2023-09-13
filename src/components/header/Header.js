import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../header/Header.css";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
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
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </NavLink>
          <NavLink to="/login" style={linkStyle} className="resposive_login">
            <li> Login </li>
          </NavLink>

          <span className="nav__btns">
            <Link to="/login">
              <button className="nav__btns-login">Login</button>
            </Link>
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
