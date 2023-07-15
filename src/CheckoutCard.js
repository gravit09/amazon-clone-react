import React, { useContext } from "react";
import "./CheckoutCard.css";
import { productData } from "./App";

function CheckoutCard() {
  const { cartData, deleteItem } = useContext(productData);

  const handleClick = (id) => {
    deleteItem(id);
  };

  return (
    <div className="checkout-card">
      {cartData.length > 0 ? (
        cartData.map((item) => (
          <div className="checkout-info">
            <img className="checkout-img" src={item.url} alt="product-img" />
            <div className="checkout-data">
              <p className="checkout-titles">{item.title}</p>
              <p className="checkout-prices">
                <small>$</small>
                <strong>{item.price}</strong>
              </p>
              <div className="checkout-rating">
                {Array(Math.floor(item.rating))
                  .fill()
                  .map(() => (
                    <p>⭐</p>
                  ))}
              </div>
              <button className="cart-btn" onClick={() => handleClick(item.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="checkout-card">
          <h1 className="cart-message">No item in Cart</h1>
          <p className="message2">Shop now to get exciting offer's and free delivery</p>
        </div>
      )}
    </div>
  );
}

export default CheckoutCard;
