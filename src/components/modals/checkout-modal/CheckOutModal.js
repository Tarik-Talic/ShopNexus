import React, { useState } from 'react';
import './CheckOutModal.css';
import { useCart } from 'react-use-cart';
import ChekcoutCard from '../../card/checkout-card/ChekcoutCard';
import PaymentForm from '../../forms/payment/PaymentForm';
import { CompleteIcon } from '../../../assets';

function CheckOutModal({ closeModal }) {
  const [succPayment, setSuccPayment] = useState(false);
  const { items, cartTotal, emptyCart, isEmpty } = useCart();

  return (
    <div className="checkout-container ">
      <div className="checkout-card flex">
        <div className="payment-methods flex ">
          {succPayment ? (
            <div className="succes-paymentContainer flex">
              <img
                src={CompleteIcon}
                alt="complete icon"
                className="succes-icon"
              />
              <h1>Thank you for you're purchase.</h1>
              <p>The purchase was succesful</p>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                Get back to shooping
              </button>
            </div>
          ) : (
            <>
              <h2>Payment Methods</h2>

              <PaymentForm
                totalPrice={cartTotal}
                emptyCart={emptyCart}
                setSuccPayment={setSuccPayment}
                closeModal={closeModal}
              />
            </>
          )}
        </div>

        {isEmpty ? (
          <></>
        ) : (
          <div className="order-details flex">
            <h2 className="title">Order Details</h2>
            <h3>Order Summary</h3>
            <div className="products-container flex">
              {items.map((item) => {
                return (
                  <ChekcoutCard
                    key={item.id}
                    productName={item.title}
                    price={item.price}
                    img={item.image}
                    item={item}
                  />
                );
              })}
            </div>
            <div className="purchase-info flex">
              <h3 className="faded">Subtotal:{Math.round(cartTotal)}$</h3>
              <h3 className="faded">Shipping fees : 0$</h3>
              <h3 className="faded">Discount : 0$</h3>
              <h3>Total Amount:{Math.round(cartTotal)}$</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOutModal;
