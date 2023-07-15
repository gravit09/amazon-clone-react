import React, { useContext } from "react";
import { productData } from "./App";
import "./Product.css";

function Product(props) {
  const { getData } = useContext(productData);

  const submitHandler = (event) => {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(),
      title: props.title,
      price: props.price,
      rating: props.rating,
      url: props.url,
    };

    getData(newItem);
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{props.title}</p>
        <p>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="rating">
          {Array(props.rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.url} alt="product-img" />
      <button onClick={submitHandler}>Add to Cart</button>
    </div>
  );
}

export default Product;
