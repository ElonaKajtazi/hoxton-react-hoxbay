import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Categories } from "./pages/Categories";
import { Electronics } from "./pages/Electronics";
import { Home } from "./pages/Home";
import { Jewelery } from "./pages/Jewelery";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  // const [page, setPage] = useState("home");
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
            <Route path="electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
