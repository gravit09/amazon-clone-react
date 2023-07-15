import { useContext, useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { productData } from "./App";
import { Link } from "react-router-dom";

function Subtotal() {
  const { cartData, isLoggedIn } = useContext(productData);
  const totalItems = cartData.length;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartData.forEach((item) => {
      sum += item.price;
    });
    setTotalPrice(sum);
  }, [cartData]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalItems} items): <strong>{value}</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={totalPrice}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {cartData.length > 0 && isLoggedIn === true ? (
        <Link to="/thanks">
          <button className="proceed-btn">Proceed to Buy</button>
        </Link>
      ) : isLoggedIn === false ? (
        <h3 className="checkout-message">Please sign in to proceed</h3>
      ) : (
        <h3 className="checkout-message">Add item to cart</h3>
      )}
    </div>
  );
}

export default Subtotal;
