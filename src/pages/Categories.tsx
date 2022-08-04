import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Categories() {
  type CategoryType = {
    id: number;
    name: string;
  };
  const [categories, setcatecories] = useState<CategoryType[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((resp) => resp.json())
      .then((categoriesFromServer) => setcatecories(categoriesFromServer));
  }, []);
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <ul className="categories-container__list">
          <li>
            <Link to="/jewelery">{category.name}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
