import React, { useState } from 'react';
import './ProductCard.css';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductModal from './ProductModal';

export default function ProductCard(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const { addItem } = useCart();

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
    <>
      <div
        className="card"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div
          className="card-img"
        >
          <img className="productImg" src={props.img} />
        </div>
        <div className="product-name">{props.title}</div>
      </div>

      {modalOpen && (
        <ProductModal
          item={props.item}
          setOpenModal={setModalOpen}
          img={props.img}
          productName={props.title}
          productDescription={props.description}
          price={props.price}
          rating={props.rating}
          count={props.count}
        />
      )}
    </>
  );
}
