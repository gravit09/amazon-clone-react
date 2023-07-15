import React, { useContext } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { productData } from "./App";

export function Card1() {
  const { apiState, setApiState } = useContext(productData);
  function handleClick() {
    setApiState("/");
  }
  return (
    <div className="product">
      <div className="product-info">
        <h1>Up to 70% off | Clearance store</h1>
      </div>
      <img
        src="https://1.bp.blogspot.com/-iPlzAn6k4BQ/XJMM2o4uUfI/AAAAAAAAHbQ/2QgIuRdkwmAbJH750M-Y3R4m139DxdknACLcBGAs/w1200-h630-p-k-no-nu/Fab-phones-sale-amazon-india.jpg"
        alt="product-img"
      />
      <Link to="electronics">
        <p className="card-link" value="electronics" onClick={handleClick}>
          see more
        </p>
      </Link>
    </div>
  );
}
