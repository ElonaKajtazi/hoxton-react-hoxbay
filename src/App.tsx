import Header from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Create your routes here. Don't forget to install the router package! */}
        <div className="products-container">
          <Home />
        </div>
      </main>
    </>
  );
}

export default App;
