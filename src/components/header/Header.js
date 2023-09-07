import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../header/Header.css";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <>
      <nav>
        <ul>
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

          <span className="nav__btns">
            <Link to="/login">
              <button className="nav__btns-login">Login</button>
            </Link>
          </span>
        </ul>
      </nav>
    </>
  );
}

export default Header;
