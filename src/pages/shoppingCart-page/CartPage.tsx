import React, { useState } from 'react';
import './CartPage.css';
import { CartCard } from '../../components';
import CheckoutModal from '../../components/modals/checkout-modal/CheckOutModal';
import { useCart } from 'react-use-cart';
import { EmptyCart } from '../../assets';

function CartPage() {
  const [openCheckout, setOpenCheckout] = useState(false);
  const { items, isEmpty, cartTotal, emptyCart } = useCart();
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
        <h2>Order Summary </h2>
        <span className="total-pricing-summit">
          Total price: US {Math.round(cartTotal)}$
        </span>
        <button
          className="pricingBtn"
          disabled={isEmpty}
          onClick={() => setOpenCheckout(true)}
        >
          Checkout
        </button>
        <button className="pricingBtn" onClick={() => emptyCart()}>
          Clear Cart
        </button>
      </div>
      {openCheckout && <CheckoutModal closeModal={setOpenCheckout} />}
    </div>
  );
}

export default CartPage;
