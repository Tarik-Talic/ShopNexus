import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import { Rating } from 'react-simple-star-rating';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from '@auth0/auth0-react';


function ProductModal(props) {
  
  const { addItem } = useCart();
  const { isAuthenticated } = useAuth0();
  const notifyCart = () => {
    addItem(props.item);
    toast.success('Item added to cart.', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <div className="modalBackground flex ">
      <div className="modalContainer flex scale-in-center">
        <div className="flex left-side">
          <div className="modal-info flex">
            <h2>{props.productName}</h2>
            <span className="modal-rating flex">
              <p>
                Product rating:{' '}
                <Rating
                  initialValue={props.rating}
                  size={15}
                  fillColor="white"
                  emptyColor="grey"
                  readonly={true}
                  allowFraction={true}
                />
              </p>
              <p>Reviews: {props.count}+</p>
            </span>
            <p className="modal-product-description">
              {props.productDescription}
            </p>
          </div>
          <div className="modal-checkout-container flex">
            <div className="modal-price">
              {props.price}
              <span>$</span>
            </div>
            <div className="cheeckout-container flex">
              {isAuthenticated ? (
                <>
                  <div className="modal-cart" onClick={notifyCart}>
                    + Add to cart
                    <ToastContainer />
                  </div>
                  <div className="modal-cart">Buy Now</div>
                </>
              ) : (
                <p>Please Login to add items to cart.</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex right-side">
          <img
            className="modal-product-image"
            src={props.img}
            alt={props.productName}
          />
          <button
            className="closeModal"
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
