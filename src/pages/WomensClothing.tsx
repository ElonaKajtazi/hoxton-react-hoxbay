export function WomensClothing({ products }) {
  const womensClothingItems = products.filter(
    (product) => product.categoryId === 4
  );
  return (
    <ul className="products-container__list">
      {womensClothingItems.map((product) => (
        <li className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </li>
      ))}
    </ul>
  );
}
