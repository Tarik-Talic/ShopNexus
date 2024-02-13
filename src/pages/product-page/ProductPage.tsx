import { useState } from 'react';
import './ProductPage.css';

import { InfinitySpin } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import {
  useAllProductData,
  useCategoryProductsData,
} from '../../services/productsApi';
import CategoryNav from '../../components/navbar/CategoryNav';
import ProductsContainer from '../../components/containers/ProductsContainer';


function ProductPage() {
  const [active, setActive] = useState(false);
  const [categoryData, setCategoryData] = useState<string | null>(null);

  const { isLoading, data: allProducts } = useAllProductData();

  const { data: categoryProducts, isLoading: categoryLoading } =
    useCategoryProductsData(categoryData);

  if (isLoading || categoryLoading)
    return (
      <div className="loader">
        <InfinitySpin width="200" color="#41b9fb" />
      </div>
    );

  return (
    <>
      <CategoryNav setActive={setActive} setCategoryData={setCategoryData} />
      <Outlet />

      {active ? (
        <ProductsContainer data={categoryProducts?.data} />
      ) : (
        <ProductsContainer data={allProducts?.data} />
      )}
    </>
  );
}

export default ProductPage;
