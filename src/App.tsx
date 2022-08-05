import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Basket } from "./pages/Basket";
import { Categories } from "./pages/Categories";
import { Electronics } from "./pages/Electronics";
import { Home } from "./pages/Home";
import { Jewelery } from "./pages/Jewelery";

import { MansClothing } from "./pages/MansClothing";
import { PageNotFound } from "./pages/PageNotFound";
import { ProductDetails } from "./pages/ProductDetails";
import { WomensClothing } from "./pages/WomensClothing";

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
          <Routes>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="electronics"
              element={<Electronics products={products} />}
            />
            <Route
              path="/jewelery"
              element={<Jewelery products={products} />}
            />
            <Route
              path="/mansClothing"
              element={<MansClothing products={products} />}
            />
            <Route
              path="/womensClothing"
              element={<WomensClothing products={products} />}
            />
            <Route path="/productDetails:id" element={<ProductDetails />} />
            <Route path="/basket" element={<Basket products={products} />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
