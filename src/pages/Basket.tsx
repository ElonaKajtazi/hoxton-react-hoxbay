import { StoreItemType } from "../App";
type Props = {
  products: StoreItemType[];
};

export function Basket({ products }: Props) {
  function getInBasketProducts() {
    return products.filter((product) => product.inBasket > 0);
  }
  const inBasketProducts = getInBasketProducts();
  function getTotal() {
    let total = 0;
    for (let item of inBasketProducts) {
      total += item.price * item.inBasket;
    }
    return `£ ${total.toFixed(2)}`;
  }
  const total = getTotal();
  
  return (
    <div className="basket-container">
      <h2>Your Basket </h2>
      <ul>
        {inBasketProducts.map((product) => (
          <li>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <p>Qty:{product.inBasket}</p>
            <p>Price: £{product.price * product.inBasket}</p>
          </li>
        ))}
      </ul>
      <h3>Your Total: {total}</h3>
    </div>
  );
}
