import React from 'react';
import { useCart } from 'react-use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
function CartCard(props) {
  const { updateItemQuantity, removeItem } = useCart();
  const { productName, price, item, img } = props;

  return (
    <div className="product-container">
      <img className="productImg" alt="productImg" src={img} />
      <p>{price}$</p>
      <div className="product-descrption">
        <div className="productName">{productName}</div>
        <div className="productPricing">
          <div className="productPrice">Total: US {price * item.quantity}$</div>
          <span className="productQuantiy-container flex-row">
            <button
              className="productQuantity qnty-incr"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className="productQuantity qnty-decr"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </span>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="product-remove"
        onClick={() => removeItem(item.id)}
      />
    </div>
  );
}

export default CartCard;
