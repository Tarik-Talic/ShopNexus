import React from 'react';
import ProductCard from '../productCard/ProductCard';
import { InfinitySpin } from 'react-loader-spinner';
import { useCategoryProductsData } from '../../hooks/useApiData';
function Category(props) {
  const { data: categoryProducts, isLoading } = useCategoryProductsData(
    props.categoryName
  );

  if (isLoading)
    return (
      <div className="loader">
        <InfinitySpin width="200" color="#41b9fb" />
      </div>
    );

  const categoryProductsElements = categoryProducts
    ? categoryProducts.data.map((item) => {
        return (
          <ProductCard
            item={item}
            data={props.data.data}
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.image}
            rating={item.rating.rate}
            count={item.rating.count}
          />
        );
      })
    : console.log('none');
  const productsElemenets = props.data?.data.map((item) => {
    return (
      <ProductCard
        item={item}
        data={props.data.data}
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        img={item.image}
        rating={item.rating.rate}
        count={item.rating.count}
      />
    );
  });

  return (
    <div className="productContainer">
      {props.active ? categoryProductsElements : productsElemenets}
    </div>
  );
}

export default Category;
