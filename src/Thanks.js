import { Link } from "react-router-dom";
import "./Thanks.css";
import { productData } from "./App";
import { useContext } from "react";


function Thanks() {
  const {lData} = useContext(productData);

  const handleEmpty = (e) =>{
    lData("");
  }
  return (
    <div className="thanks-container">
      <h1 className="thanks-heading">Thank You For Shopping With Us!</h1>
      <p className="thanks-text">
        We appreciate your business and hope you had a great shopping experience.
        If you have any feedback, please let us know.
      </p>
      <Link to="/">
        <button className="thanks-btn" onClick={handleEmpty}>Return to Home</button>
      </Link>
    </div>
  );
}

export default Thanks;
