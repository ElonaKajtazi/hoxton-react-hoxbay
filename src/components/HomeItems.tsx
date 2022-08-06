import { Link } from "react-router-dom";

export function HomeItems({ product }) {
  const title = product.title;
  return (
    <Link to={`/productDetails${product.id}`}>
      <li className="product-item">
        <img src={product.image} alt={product.title} />
        <h3>{`${title.slice(0, 21)}...`}</h3>
      </li>
    </Link>
  );
}
