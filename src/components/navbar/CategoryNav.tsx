import React from 'react';
import { useCategoryData } from '../../services/productsApi';
import { NavLink } from 'react-router-dom';

type CategoryNavProps = {
  setCategoryData: React.Dispatch<React.SetStateAction<string | null>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CategoryNav({
  setActive,
  setCategoryData,
}: CategoryNavProps) {
  const { data: category } = useCategoryData();
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  function handleClick(categoryName: string) {
    setCategoryData(categoryName);
    setActive(true);
  }
  const categories = category?.data.map((item: string) => {
    return (
      <p key={item} style={linkStyle} onClick={() => handleClick(item)}>
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </p>
    );
  });
  return (
    <nav className="productCategories">
      <NavLink style={linkStyle} to={`/products`}>
        <p onClick={() => setActive(false)}>All</p>
      </NavLink>
      {categories}
    </nav>
  );
}
