export function Jewelery({ products }) {
  const jeweleryItems = products.filter((product) => product.categoryId === 2);
  return (
    <ul className="products-container__list">
      {jeweleryItems.map((product) => (
        <li className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </li>
      ))}
    </ul>
  );
}
