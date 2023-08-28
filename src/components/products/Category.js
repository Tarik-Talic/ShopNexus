import React, { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { InfinitySpin } from "react-loader-spinner";

function Category(props) {
  const fetchCategoryProducts = () => {
    return axios.get(`https://fakestoreapi.com/products/category/${props.categoryName}`);
  };

  const { data: categoryProducts, isLoading } = useQuery(
    [`category/${props.categoryName}`],
    fetchCategoryProducts
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
          />
        );
      })
    : console.log("none");

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
