import React, {useContext } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { productData } from "./App";

export default function Card2() {
  const { apiState, setApiState } = useContext(productData);

  function handleChange() {
    setApiState("/mobiles");
  }

  return (
    <div className="product">
      <div className="product-info">
        <h1>Up to 30% off | On Mobile's</h1>
      </div>
      <img
        src="https://1.bp.blogspot.com/-iPlzAn6k4BQ/XJMM2o4uUfI/AAAAAAAAHbQ/2QgIuRdkwmAbJH750M-Y3R4m139DxdknACLcBGAs/w1200-h630-p-k-no-nu/Fab-phones-sale-amazon-india.jpg"
        alt="product-img"
      />
      <Link to="electronics">
        <p className="card-link" onClick={handleChange}>
          see more
        </p>
      </Link>
    </div>
  );
}
