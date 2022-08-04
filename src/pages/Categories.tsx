import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Categories() {
  //   type CategoryType = {
  //     id: number;
  //     name: string;
  //   };
  //   const [categories, setcatecories] = useState<CategoryType[]>([]);
  //   useEffect(() => {
  //     fetch("http://localhost:4000/categories")
  //       .then((resp) => resp.json())
  //       .then((categoriesFromServer) => setcatecories(categoriesFromServer));
  //   }, []);
  return (
    <div className="categories-container">
      <ul className="categories-container__list">
        <li>
          <Link to="/electronics">Electronics</Link>
          <Link to="/jewelery">Jewelery</Link>
          <Link to="/mansClothing">Man's Clothing</Link>
        </li>
      </ul>
    </div>
  );
}
