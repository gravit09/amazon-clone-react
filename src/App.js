import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Sign from "./Sign";
import Login from "./Login";
import Thanks from "./Thanks";
import Products from "./Products";
import { createContext, useState } from "react";
import OrderSummary from "./OrderSummary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import AddProduct from "./AddProduct";

export const productData = createContext();

function App() {
  const [cartData, setCartData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [apiState,setApiState] = useState("");

  const getData = (order) => {
    setCartData((prevData) => [...prevData, order]);
    console.log(cartData);
  };

  const deleteItem = (itemId) => {
    const index = cartData.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const updatedItems = [...cartData];
      updatedItems.splice(index, 1);
      setCartData(updatedItems);
    }
  };
  
  console.log(apiState)
  
  const lData = () =>{
    setCartData([])
  }

  return (
    <productData.Provider value={{ getData, cartData, deleteItem,apiState,setApiState ,isLoggedIn,setIsLoggedIn,lData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ [<Navbar />, <Home />, <Footer />]} />
          <Route
            path="checkout"
            element={[<Navbar />, <OrderSummary />, <Footer />]}
          />
          <Route
            path="/electronics"
            element={[<Navbar />, <Products />, <Footer />]}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/Sig" element={<Sign />} />
          <Route path="/add" element={[<Navbar />,<AddProduct />]} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </productData.Provider>
  );
}

export default App;
