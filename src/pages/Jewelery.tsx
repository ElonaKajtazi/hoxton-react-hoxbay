import { Link } from "react-router-dom";
import { StoreItemType } from "../App";
type Props = {
  products: StoreItemType[];
  search: string;
};
export function Jewelery({ products, search }: Props) {
  const jeweleryItems = products.filter((product) => product.categoryId === 2);

  const filteredProducts = jeweleryItems.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ul className="products-container__list">
      {filteredProducts.map((product) => (
        <Link to={`/productDetails${product.id}`}>
          <li className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{`${product.title.slice(0, 21)}...`}</h3>
          </li>
        </Link>
      ))}
    </ul>
  );
}
