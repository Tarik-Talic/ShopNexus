import React from 'react';
import './CartPage.css';
import CartCard from '../../components/card/cart-card/CartCard';
import { useCart } from 'react-use-cart';
import EmptyCart from '../../assets/images/undraw_empty_cart_co35.svg';

function CartPage() {
  const { items, isEmpty, cartTotal, emptyCart } = useCart();
  console.log(items);
  return (
    <div className="flex-container">
      <div className="cart-container">
        <h2>Shoping Cart</h2>
        {isEmpty && (
          <>
            <img
              className="emptyCart"
              src={EmptyCart}
              alt="Empty shoping cart"
            />
            <h2>Your shopping cart is empty.</h2>
          </>
        )}

        {items.map((item) => {
          return (
            <CartCard
              key={item.id}
              productName={item.title}
              price={item.price}
              img={item.image}
              item={item}
            />
          );
        })}
      </div>
      <div className="total-pricing flex-column">
        <h2>Total Price </h2>
        <span className="total-pricing-summit">
          US {Math.round(cartTotal)}$
        </span>
        <button className="pricingBtn" onClick={() => emptyCart()}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartPage;
