import React, { useState } from "react";
import "../../component/order/Order.css";
import SuccessMessage from "../../component/SuccessMessage";
import Cart from "../../component/order/Cart";
const Card = ({ title, img, desc, price, addToCart, cartItems }) => {
  const [showCart, setShowCart] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleAddItem = () => {
    // Logic to add item here
    // After adding the item, show the success message
    setIsSuccessVisible(true);

    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSuccessVisible(false);
    }, 2000); // Display the message for 2 seconds
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
    <div className="o-cards">
      <div className="o-card">
        <div className="o-eachcard">
          <img className="card-img" src={img} />
          <h3> {title}</h3>
          <p>{desc}</p>
          {/* () => addToCart(title,alert("item added")) */}
          <button onClick={handleAddItem}>
            Add to Cart
          </button>
          <button className="cart-toggle-button" onClick={toggleCart}>
            {showCart ? "Hide Cart" : "Show Cart"}
          </button>
          {showCart && <Cart cartItems={cartItems} />}
        </div>
      </div>
    </div>
    {isSuccessVisible && <SuccessMessage />}
    </>
  );
};

export default Card;
