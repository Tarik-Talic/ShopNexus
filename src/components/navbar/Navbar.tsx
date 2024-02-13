import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  const { totalItems } = useCart();
  return (
    <nav>
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
    </nav>
  );
}
