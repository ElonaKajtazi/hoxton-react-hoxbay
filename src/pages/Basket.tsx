import { ProductsType } from "../App";
type Props = {
  products: ProductsType[];
};

export function Basket({ products }: Props) {
  function getInBasketProducts (){
    return products.filter(product => product.inBasket > 0);
  };
  const inBasketProducts = getInBasketProducts();

  return (
    <div className="basket-container">
      <h2>Your Basket </h2>
      <ul>
        {inBasketProducts.map((product) => (
          <li>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <p>Qty:{product.inBasket}</p>
            <p>Price:£{product.price * product.inBasket}</p>
          </li>
        ))}
      </ul>
      <h3>Your Total: £100</h3>
    </div>
  );
}
