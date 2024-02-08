import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// For geting products
const fetchAllProducts = () => {
  return axios.get(`https://fakestoreapi.com/products`);
};
const fetchCategory = () => {
  return axios.get(`https://fakestoreapi.com/products/categories`);
};
const fetchCategoryProducts = (categoryName:string) => {
  return axios.get(
    `https://fakestoreapi.com/products/category/${categoryName}`
  );
};

export const useCategoryProductsData = (categoryName :string) => {
  return useQuery(['userInfo', categoryName], () =>
    fetchCategoryProducts(categoryName)
  );
};

export const useAllProductData = () => {
  return useQuery(['products'], fetchAllProducts);
};

export const useCategoryData = () => {
  return useQuery(['category'], fetchCategory);
};
