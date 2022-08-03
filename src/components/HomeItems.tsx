export function HomeItems({product}) {
  return (
    <li className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
    </li>
  );
}
