import React, { useState } from 'react';
import './ProductCard.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductModal from './ProductModal';

export default function ProductCard(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div className="card-img">
          <img className="productImg" src={props.img} alt={props.title} />
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
