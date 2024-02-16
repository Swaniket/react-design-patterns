/* eslint-disable react/prop-types */
import useResource from "../hooks/useResource";

function ProductInfo({ productId }) {
  const product = useResource(`http://localhost:8080/products/${productId}`);

  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductInfo;
