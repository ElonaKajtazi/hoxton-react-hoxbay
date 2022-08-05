import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { StoreItemType } from "../App";
import { StoreType } from "../App";
export function ProductDetails({increaseProductQuantity}) {
  const [product, setProduct] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.id}`)
      .then((resp) => resp.json())
      .then((productFromServer) => setProduct(productFromServer));
  }, []);

  if (product === null)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (product.id === undefined) return <Navigate to="/home" />;


  return (
    <ul>
      <li className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="product-detail__side">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>£ {product.price}</h3>
          <button
            onClick={function () {
              increaseProductQuantity(product);
            }}
          >
            Add to basket
          </button>
        </div>
      </li>
    </ul>
  );
}
