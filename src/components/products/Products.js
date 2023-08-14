import React, { useState } from "react";
import "./Products.css";

import { InfinitySpin } from "react-loader-spinner";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useAllProductData, useCategoryData } from "../../hooks/useApiData";
import Category from "./Category";

function Products() {
  const [active, setActive] = useState(false);
  const [categoryData, setCategoryData] = useState("eletronics");
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const { isLoading, data } = useAllProductData();
  const { data: category } = useCategoryData();
  console.log(category);

  if (isLoading)
    return (
      <div className="loader">
        <InfinitySpin width="200" color="#41b9fb" />
      </div>
    );

  function handleClick(categoryName) {
    setCategoryData(categoryName);
    setActive(true);
  }
  const categories = category?.data.map((item) => {
    return (
      <NavLink
        style={linkStyle}
        to={`category/${item}`}
        onClick={() => handleClick(item)}
      >
        <li key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
      </NavLink>
    );
  });
  console.log(categoryData);
  return (
    <>
      <span className="productCategories">
        <Link style={linkStyle} to={`/products`}>
          <li onClick={() => setActive(false)}>All</li>
        </Link>
        {categories}
      </span>
      <Outlet />

      <Category data={data} categoryName={categoryData} active={active} />
    </>
  );
}

export default Products;
