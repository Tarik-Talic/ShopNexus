import { Item, useCart } from 'react-use-cart';
import { BsTrash } from 'react-icons/bs';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

type CardCardProps = {
  productName: string;
  price: number;
  img: string;
  item: any;
};

function CartCard({ productName, price, img, item }: CardCardProps) {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <div className="product-container">
      <div className="imgContainer">
        <img className="productImg" alt="productImg" src={img} />
      </div>
      <p>{price}$</p>
      <div className="product-descrption">
        <div className="productName">{productName}</div>
        <div className="productPricing">
          <div className="productPrice">
            Total: US <i>{price * item?.quantity}$</i>
          </div>

          <span className="productQuantiy-container flex-row">
            <FaMinusCircle
              className="productQuantity qnty-incr"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            />

            <p>{item.quantity}</p>

            <FaPlusCircle
              className="productQuantity qnty-decr"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            />
          </span>
        </div>
      </div>
      <BsTrash className="product-remove" onClick={() => removeItem(item.id)} />
    </div>
  );
}

export default CartCard;
