import { useContext, useState } from 'react';
import './ProductCard.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductModal from '../../modals/product-modal/ProductModal';
import { ProductContext } from '../../context/ProductContext';
import ProductTittle from '../../headings/ProductTittle';
import ImageContainer from '../../containers/ImageContainer';

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
        <ImageContainer classname="card-img">
          <img
            className="productImg"
            src={product?.image}
            alt={product?.title}
          />
        </ImageContainer>

        <ProductTittle classname="product-name">{product?.title}</ProductTittle>
      </div>

      {modalOpen && <ProductModal setOpenModal={setModalOpen} />}
    </>
  );
}
