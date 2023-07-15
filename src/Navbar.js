/* import { useContext } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { productData } from "./App";

function Navbar() {
  const { cartData } = useContext(productData);
  const {isLoggedIn,setIsLoggedIn} = useContext(productData)
  const totalItems = cartData.length;

function logout()
{
  setIsLoggedIn(false)
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg header navbar-dark">
        <Link className="navbar-brand" to="/">
          <img
            className="header-logo"
            src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457529905/assets/41a.amazon_logo_RGB_REV.png"
            alt="amazon-logo"
          />
        </Link>
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="header-searchbar">
            <input className="search-bar" type="text" />
            <SearchIcon className="header-searchIcon" fontSize="large" />
          </div>
          <div className="header-components">
            <Link to="/login">
              <div className="header-option ">
                <span className="header-aboveLine">Hello guest</span>
                {isLoggedIn ? <span className="header-belowLine" onClick={logout}>Sign out</span> : <span className="header-belowLine">Sign in</span> }
              </div>
            </Link>
            <div className="header-option nav-item">
              <span className="header-aboveLine">Return</span>
              <span className="header-belowLine">& Orders</span>
            </div>
            <Link to="/add">
            <div className="header-option">
              <span className="header-aboveLine">Your</span>
              <span className="header-belowLine">Prime</span>
            </div>
            </Link>
            <Link to="/checkout">
              <div className="header-cart">
                <ShoppingCartCheckoutIcon className="cart-icon" />
                <span className="header-belowLine">{totalItems}</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
 */

import { useContext } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { productData } from "./App";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const { cartData } = useContext(productData);
  const {isLoggedIn,setIsLoggedIn} = useContext(productData)
  const totalItems = cartData.length;

  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg header navbar-dark">
        <Link className="navbar-brand" to="/">
          <img
            className="header-logo"
            src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457529905/assets/41a.amazon_logo_RGB_REV.png"
            alt="amazon-logo"
          />
        </Link>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="header-searchbar">
            <input className="search-bar" type="text" />
            <SearchIcon className="header-searchIcon" fontSize="large" />
          </div>
          <div className="header-components">
            <Link to="/login">
              <div className="header-option ">
                <span className="header-aboveLine">Hello guest</span>
                {isLoggedIn ? <span className="header-belowLine" onClick={logout}>Sign out</span> : <span className="header-belowLine">Sign in</span> }
              </div>
            </Link>
            <div className="header-option nav-item">
              <span className="header-aboveLine">Return</span>
              <span className="header-belowLine">& Orders</span>
            </div>
            <Link to="/add">
              <div className="header-option">
                <span className="header-aboveLine">Your</span>
                <span className="header-belowLine">Prime</span>
              </div>
            </Link>
            <Link to="/checkout">
              <div className="header-cart">
                <ShoppingCartCheckoutIcon className="cart-icon" />
                <span className="header-belowLine">{totalItems}</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;




