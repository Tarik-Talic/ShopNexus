import React from "react";
import "../header/Header.css";
import Logo from "../../assets/Logo.png";
function Header() {
  return (
    <nav>
      <img src={Logo} />
      <p>About</p>
      <p>Products</p>
      <p>Categories</p>
      <p>FAQ</p>
      <span className="nav__btns">
        <button className="nav__btns-login">Login</button>
        <button className="nav__btns-singUp">SingUp</button>
      </span>
    </nav>
  );
}

export default Header;
