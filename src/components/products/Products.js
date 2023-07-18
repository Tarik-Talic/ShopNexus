import React from "react";
import "./Products.css";
import ProductCard from "../productCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Products() {
  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: () => {
      const data = axios.get("https://fakestoreapi.com/products").then((res) => res.data);
      return data;
    },
  });
  if (productQuery.isLoading) return <h1>Is Loading...</h1>;
  console.log(productQuery.data);
  const productsElemenets = productQuery.data.map((item) => {
    return (
      <ProductCard
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        img={item.image}
      />
    );
  });
  return <div className="productContainer">{productsElemenets}</div>;
}

export default Products;
