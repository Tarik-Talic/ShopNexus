import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const { totalItems } = useCart();
  return (
    <nav>
      <NavLink to="/">
        <li> Home</li>
      </NavLink>

      <NavLink to="/products">
        <li> Products </li>
      </NavLink>

      <NavLink to="/shopping-cart">
        <li className="cartIcon">
          {totalItems ? <p className="cartIcon-count">{totalItems}</p> : ''}

          <FaShoppingCart />
        </li>
      </NavLink>
    </nav>
  );
}
