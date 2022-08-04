import { Link } from "react-router-dom";

export function WomensClothing({ products }) {
  const womensClothingItems = products.filter(
    (product) => product.categoryId === 4
  );
  return (
    <ul className="products-container__list">
      {womensClothingItems.map((product) => (
        <Link to={`/productDetails${product.id}`}>
          <li className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </li>
        </Link>
      ))}
    </ul>
  );
}
