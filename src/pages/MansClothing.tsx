import { Link } from "react-router-dom";
import { ProductsType } from "../App";
type Props = {
  products: ProductsType[];
};
export function MansClothing({ products }: Props) { 
  const mansClothingItems = products.filter(
    (product) => product.categoryId === 3
  );
  return (
    <ul className="products-container__list">
      {mansClothingItems.map((product) => (
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
