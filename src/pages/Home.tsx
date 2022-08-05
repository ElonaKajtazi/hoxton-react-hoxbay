import { useEffect, useState } from "react";
import { HomeItems } from "../components/HomeItems";

export function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);

  return (
    <ul className="products-container__list">
      {products.map((product) => (
        <HomeItems product={product} />
      ))}
    </ul>
  );
}
