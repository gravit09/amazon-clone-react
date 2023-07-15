import React from "react";
import Carsoul from "./Carsoul";
import Product from "./Product";
import "./Home.css";
import "./Product.css";
import { Card1 } from "./Card";
import Card2 from "./Card2";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Carsoul />
        <div className="home-row">
          <Card1 />
          <Card2 />
        </div>
        <div className="home-row">
          <Product
            id={1}
            title="The Subtle Art of Not Giving a F*ck"
            url="https://upload.wikimedia.org/wikipedia/en/b/bd/The_Subtle_Art_of_Not_Giving_a_F%2Ack_by_Mark_Manson_-_Book_Cover.png"
            rating={5}
            price={20}
          />
          <Product
            id={2}
            title="MYFITNESS Chocolate Peanut Butter Smooth 510g"
            url="https://images-eu.ssl-images-amazon.com/images/I/61n+eB8dgmL._AC_UL160_SR160,160_.jpg"
            rating={4}
            price={5}
          />
          <Product
            id={3}
            title="Apple 2021 iPad Mini with A15 Bionic chip (Wi-Fi, 64GB) - Purple (6th Generation)"
            url="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41Ysn+-PrUL._AC_SR400,600_.jpg"
            rating={4}
            price={500}
          />
        </div>
        <div className="home-row">
          <Product
            id={4}
            title="LG 86cm Ultra Wide Curved Gaming LCD"
            url=" https://www.lg.com/in/images/monitors/md07546170/gallery/38WP85C-W-D-01.jpg"
            price={1200}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
