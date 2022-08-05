import { ProductsType } from "../App";
type Props = {
  products: ProductsType[];
};
export function Basket({ products }: Props) {
  return (
    <div className="basket-container">
      <h2>Your Basket </h2>
      <ul>
        {products.map((product) => (
          <li>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <p>Qty:1</p>
            <p>Price:£{product.price}</p>
          </li>
        ))}
      </ul>
      <h3>Your Total: £100</h3>
    </div>
  );
}
