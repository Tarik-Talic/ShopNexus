import { useState } from 'react';
import './ProductCard.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductModal from '../../modals/product-modal/ProductModal';

type ProductCardProps = {
  item: any;
  data: any;
  title: string;
  description: string;
  price: number;
  img: string;
  rating: number;
  count: number;
};
export default function ProductCard({
  item,
  data,
  title,
  description,
  price,
  img,
  rating,
  count,
}: ProductCardProps) {
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
          <img className="productImg" src={img} alt={title} />
        </div>
        <div className="product-name">{title}</div>
      </div>

      {modalOpen && (
        <ProductModal
          item={item}
          setOpenModal={setModalOpen}
          img={img}
          productName={title}
          productDescription={description}
          price={price}
          rating={rating}
          count={count}
        />
      )}
    </>
  );
}
