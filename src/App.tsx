import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  return (
    <>
      <Header />
      <main>
        {/* Create your routes here. Don't forget to install the router package! */}
        <div className="products-container">
          <ul className="products-container__list">
            {products.map((product) => (
              <li className="product-item">
                <img
                  src={product.image}
                  alt={product.title}
                />
                <h3>{product.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
