import React, { useState } from "react";
import "./Order.css";
import Browse from "../browse/Browse";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Data1 from "../Data1";
import Card from "../../pages/Productitems/Card";
import Buttons from "../../pages/Productitems/Buttons";
import { BsWindowSidebar } from "react-icons/bs";

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("laptop");
  const categories = Array.from(new Set(Data1.map((item) => item.category)));
  const filteredItems =
    selectedCategory === "laptop"
      ? Data1
      : Data1.filter((item) => item.category === selectedCategory);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="order">
      <Banner />
      <Navbar />
      <div className="heading">
        <h1>
          Get Your items <span>delivered</span>,<br /> or <span>pick-up</span> in
          store.
        </h1>
      </div>
      <Buttons
        categories={categories}
        handleCategoryChange={handleCategoryChange}
      />
      <div>
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            img={item.thumbnail}
            desc={item.description}
            price={item.price}
            addToCart={addToCart}
            cartItems={cartItems}
          />
        ))}
      </div>
      
      <Browse />
      <Footer />
    </div>
  );
};

export default Order;
