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

export type StoreItemType = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  categoryId: number;
  inBasket: number;
};
export type StoreType = StoreItemType[];

function App() {
  const [products, setProducts] = useState<StoreType>([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  function increaseProductQuantity(product: StoreItemType) {
    const productCopy: StoreType = structuredClone(products);

    const match = productCopy.find((target) => target.id === product.id)!;
    match.inBasket++;

    setProducts(productCopy);
  }
  function decreaseProductQuantity(product: StoreItemType) {
    const productCopy: StoreType = structuredClone(products);

    const match = productCopy.find((target) => target.id === product.id)!;
    match.inBasket--;

    setProducts(productCopy);
  }
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
            <Route
              path="/productDetails:id"
              element={
                <ProductDetails
                  increaseProductQuantity={increaseProductQuantity}
                />
              }
            />
            <Route
              path="/basket"
              element={
                <Basket
                  products={products}
                  increaseProductQuantity={increaseProductQuantity}
                  decreaseProductQuantity={decreaseProductQuantity}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
