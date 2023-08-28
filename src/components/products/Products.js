import React, { useState } from "react";
import "./Products.css";

import { InfinitySpin } from "react-loader-spinner";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useAllProductData, useCategoryData } from "../../hooks/useApiData";
import Category from "./Category";

function Products() {
  const [active, setActive] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const { isLoading, data } = useAllProductData();
  const { data: category } = useCategoryData();

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
        key={item}
        style={linkStyle}
        to={`category/${item}`}
        onClick={() => handleClick(item)}
      >
        <p key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
      </NavLink>
    );
  });

  return (
    <>
      <span className="productCategories">
        <Link style={linkStyle} to={`/products`}>
          <p onClick={() => setActive(false)}>All</p>
        </Link>
        {categories}
      </span>
      <Outlet />

      <Category data={data} categoryName={categoryData} active={active} />
    </>
  );
}

export default Products;
