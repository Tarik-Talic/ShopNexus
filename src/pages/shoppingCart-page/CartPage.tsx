import React, { useState } from 'react';
import './CartPage.css';
import { CartCard } from '../../components';
import CheckoutModal from '../../components/modals/checkout-modal/CheckOutModal';
import { useCart } from 'react-use-cart';
import { EmptyCart } from '../../assets';
import SubHeading from '../../components/headings/SubHeading';
import Button from '../../components/buttons/Button';

function CartPage() {
  const [openCheckout, setOpenCheckout] = useState(false);
  const { items, isEmpty, cartTotal, emptyCart } = useCart();
  return (
    <div className="flex-container">
      <div className="cart-container">
        {!isEmpty && <SubHeading>ITEMS IN YOUR CART</SubHeading>}

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
        <Button
          classname="pricingBtn checkOutBtn"
          disabled={isEmpty}
          onClick={() => setOpenCheckout(true)}
        >
          Checkout
        </Button>

        <Button classname="pricingBtn clearBtn" onClick={() => emptyCart()}>
          Clear Cart
        </Button>
      </div>
      {openCheckout && <CheckoutModal closeModal={setOpenCheckout} />}
    </div>
  );
}

export default CartPage;
