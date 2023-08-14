import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllProducts = () => {
  return axios.get(`https://fakestoreapi.com/products`);
};
export const useAllProductData = () => {
  return useQuery(["products"], fetchAllProducts);
};
