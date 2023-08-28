import React from "react";
import "./Cart.css";
import CartCard from "./CartCard";
import { useCart } from "react-use-cart";
function Cart() {
  const { items, isEmpty, cartTotal, emptyCart } = useCart();
  console.log(items);
  return (
    <div className="flex-container">
      <div className="cart-container">
        <h2>Shoping Cart</h2>
        {isEmpty && <h3>Cart is Empty</h3>}

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
        <span className="total-pricing-summit">US {cartTotal}$</span>
        <button className="pricingBtn" onClick={() => emptyCart()}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
