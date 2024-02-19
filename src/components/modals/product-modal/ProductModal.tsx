import React, { useContext } from 'react';
import './ProductModal.css';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import { Rating } from 'react-simple-star-rating';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from '@auth0/auth0-react';
import { ProductContext } from '../../context/ProductContext';
import { FaRegCircleXmark } from 'react-icons/fa6';
import ProductTittle from '../../headings/ProductTittle';

type ProductModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProductModal({ setOpenModal }: ProductModalProps) {
  const product = useContext(ProductContext);
  const { addItem } = useCart();
  const { isAuthenticated } = useAuth0();

  const notifyCart = () => {
    addItem(product);
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
            <ProductTittle as={'h2'} classname="product-tittle">
              {product?.title}
            </ProductTittle>
            <span className="modal-rating flex">
              <p>
                Product rating:{' '}
                <Rating
                  initialValue={product?.rating.rate}
                  size={15}
                  fillColor="#01c38e"
                  emptyColor="grey"
                  readonly={true}
                  allowFraction={true}
                />
              </p>
              <p>Reviews: {product?.rating.count}+</p>
            </span>
            <p className="modal-product-description">{product?.description}</p>
          </div>
          <div className="modal-checkout-container flex">
            <div className="modal-price">
              {product?.price}
              <span>$</span>
            </div>
            <div className="cheeckout-container flex">
              {isAuthenticated ? (
                <>
                  <div className="modal-cart" onClick={notifyCart}>
                    + Add to cart
                  </div>
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
            src={product?.image}
            alt={product?.title}
          />
          <button
            className="closeModal"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <FaRegCircleXmark size={20} />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductModal;
