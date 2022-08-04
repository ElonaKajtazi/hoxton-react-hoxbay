// import { useEffect, useState } from "react";
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
    <ul className="categories-container">
      <li className="categories-container__list">
        <Link className="electronics" to="/electronics">
          Electronics
        </Link>
        <Link className="jewelery" to="/jewelery">
          Jewelery
        </Link>
        <Link className="mans-clothing" to="/mansClothing">
          Man's Clothing
        </Link>
        <Link className="womens-clothing" to="/womensClothing">
          Women's Clothing
        </Link>
      </li>
    </ul>
  );
}
