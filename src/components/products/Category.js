import React from "react";
import ProductCard from "../productCard/ProductCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Category(props) {
  const fetchCategoryProducts = () => {
    return axios.get(`https://fakestoreapi.com/products/category/${props.categoryName}`);
  };

  const { data: categoryProducts } = useQuery(
    [`category/${props.categoryName}`],
    fetchCategoryProducts
  );
  console.log(categoryProducts);
  console.log(props.categoryName);
  console.log(props.active);

  const categoryProductsElements = categoryProducts
    ? categoryProducts.data.map((item) => {
        return (
          <ProductCard
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
