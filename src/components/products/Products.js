import React, { useState } from "react";
import "./Products.css";
import ProductCard from "../productCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

function Products() {
  const [categoryData, setCategoryData] = useState("");
  console.log("this is the category selected " + categoryData);
  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: () => {
      const data = axios.get("https://fakestoreapi.com/products").then((res) => res.data);
      return data;
    },
  });
  const categoryQuery = useQuery({
    queryKey: ["category"],
    queryFn: () => {
      const data = axios.get(
        `https://fakestoreapi.com/products/category/${categoryData}`
      );
      return data;
    },
  });
  console.log(productQuery);
  if (productQuery.isLoading)
    return (
      <div className="loader">
        <InfinitySpin width="200" color="#41b9fb" />
      </div>
    );

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

  return (
    <>
      <span className="productCategories">
        <p>All</p>
        <p onClick={() => setCategoryData("eletronics")}>Electronics</p>
        <p onClick={() => setCategoryData("jewelery")}>Jewelry</p>
        <p onClick={() => setCategoryData("men's clothing")}>Mens Clothing</p>
        <p onClick={() => setCategoryData("women's clothing")}>Womens Clothing</p>
      </span>
      <div className="productContainer">{productsElemenets}</div>
    </>
  );
}

export default Products;
