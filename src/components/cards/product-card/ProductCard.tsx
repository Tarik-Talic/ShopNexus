import { useContext, useState } from 'react';
import './ProductCard.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductModal from '../../modals/product-modal/ProductModal';
import { ProductContext } from '../../context/ProductContext';

export default function ProductCard() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const product = useContext(ProductContext);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div className="card-img">
          <img
            className="productImg"
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className="product-name">{product?.title}</div>
      </div>

      {modalOpen && <ProductModal setOpenModal={setModalOpen} />}
    </>
  );
}
