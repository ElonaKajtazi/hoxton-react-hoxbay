import { Link } from "react-router-dom";

export function Electronics({ products }) {
  const electronicsItems = products.filter(
    (product) => product.categoryId === 1
  );
  return (
    <ul className="products-container__list">
      {electronicsItems.map((product) => (
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
