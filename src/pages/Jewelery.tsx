import { Link } from "react-router-dom";
import { StoreItemType } from "../App";
type Props = {
  products: StoreItemType[];
};
export function Jewelery({ products }: Props) {
  const jeweleryItems = products.filter((product) => product.categoryId === 2);
  return (
    <ul className="products-container__list">
      {jeweleryItems.map((product) => (
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
