import { Link } from "react-router-dom";

export function HomeItems({ product }) {
  return (
    <Link to={`/productDetails${product.id}`}>
      <li className="product-item">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </li>
    </Link>
  );
}
