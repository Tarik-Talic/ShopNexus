import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";
import Logo from "../../assets/Logo.png";
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
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" style={linkStyle}>
              Products
            </Link>
          </li>

          <li>FAQ</li>
          <span className="nav__btns">
            <Link to="/login">
              <button className="nav__btns-login">Login</button>
            </Link>
            <Link to="/singUp">
              <button className="nav__btns-singUp">SingUp</button>
            </Link>
          </span>
        </ul>
      </nav>
    </>
  );
}

export default Header;
