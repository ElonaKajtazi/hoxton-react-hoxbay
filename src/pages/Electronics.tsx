import { useEffect, useState } from "react";

export function Electronics() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  const electronicsItems = products.filter(
    (product) => product.categoryId === 1
  );
  return (
    <ul className="products-container__list">
      {electronicsItems.map((product) => (
        <li className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </li>
      ))}
    </ul>
  );
}
