import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

// For geting products
const fetchAllProducts = () => {
  return axios.get(`https://fakestoreapi.com/products`);
};
const fetchCategory = () => {
  return axios.get(`https://fakestoreapi.com/products/categories`);
};
const fetchCategoryProducts = (categoryName) => {
  return axios.get(
    `https://fakestoreapi.com/products/category/${categoryName}`
  );
};

export const useCategoryProductsData = (categoryName) => {
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
