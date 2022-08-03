import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    
  }, []);
  return (
    <>
      <Header />
      <main>
        {/* Create your routes here. Don't forget to install the router package! */}
        <div className="products-container">
          <ul className="products-container__list">
            <li className="product-item">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="bag"
              />
              <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
