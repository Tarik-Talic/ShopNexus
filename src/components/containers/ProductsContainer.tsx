import ProductCard from '../cards/product-card/ProductCard';
import { ProductContext } from '../context/ProductContext';
import { type ProductData } from '../types/Product.types';

type ProductsContainerProps = {
  data: ProductData[];
};

export default function ProductsContainer({ data }: ProductsContainerProps) {
  const ProductCardList = data?.map((item: ProductData) => {
    return (
      <ProductContext.Provider value={item}>
        <ProductCard />
      </ProductContext.Provider>
    );
  });
  return <div className="productContainer">{ProductCardList}</div>;
}
