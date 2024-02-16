import React, { useRef, useState } from 'react';
import { useCategoryData } from '../../services/productsApi';
import { Link, NavLink } from 'react-router-dom';

type CategoryNavProps = {
  setCategoryData: React.Dispatch<React.SetStateAction<string | null>>;
  setAllProductDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CategoryNav({
  setAllProductDisplay,
  setCategoryData,
}: CategoryNavProps) {
  const { data: category } = useCategoryData();

  function handleClick(categoryName: string) {
    setCategoryData(categoryName);
    setAllProductDisplay(false);
  }

  const categories = category?.data.map((item: string) => {
    return (
      <>
        <NavLink key={item} to={`category/${item}`}>
          <p key={item} onClick={() => handleClick(item)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </p>
        </NavLink>
      </>
    );
  });
  return (
    <nav className="productNavigation">
      <Link to={'/products'}>
        <p onClick={() => setAllProductDisplay(true)}>All</p>
      </Link>
      {categories}
    </nav>
  );
}
