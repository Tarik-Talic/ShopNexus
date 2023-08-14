import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllProducts = () => {
  return axios.get(`https://fakestoreapi.com/products`);
};

const fetchCategory = () => {
  return axios.get(`https://fakestoreapi.com/products/categories`);
};

export const useAllProductData = () => {
  return useQuery(["products"], fetchAllProducts);
};

export const useCategoryData = () => {
  return useQuery(["category"], fetchCategory);
};
