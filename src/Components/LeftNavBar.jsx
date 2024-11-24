import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function LeftNavBar() {
  let [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);

  return (
    <div className="news-categories flex flex-col gap-2">
      <h2 className="font-bold text-2xl">All categories</h2>
      {categories.map((category) => (
        <NavLink
          className="text-xl font-semibold text-gray-600"
          key={category.category_id}
          to={`/category/${category.category_id}`}
        >
          {category.category_name}
        </NavLink>
      ))}
    </div>
  );
}

export default LeftNavBar;
