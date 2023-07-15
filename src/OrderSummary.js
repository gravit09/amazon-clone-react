import React from "react";
import CheckoutCard from "./CheckoutCard";
import Subtotal from "./Subtotal";
import "./orderSummary.css";
function OrderSummary() {
  return (
    <div className="checkouts">
      <div className="checkout-left">
        <div className="checkout-title">
          <h2>Shopping Cart</h2>
        </div>
        <div>
          <CheckoutCard />
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default OrderSummary;
