import { Link } from "react-router-dom";

export function Categories() {
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
