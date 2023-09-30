import React from "react";
import "./Browse.css";
import logo1 from "./img1.png";
import logo2 from "./img2.png";
import logo3 from "./img3.png";
import logo4 from "./img4.png";
import logo5 from "./img5.png";
import logo6 from "./img6.png";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const imgdata = [
    {
      image: <img src={logo1} alt="img" />,
      name: "Burger Waldo",
      cost: "2.0 USD",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: <img src={logo2} alt="img" />,
      name: "Burger Cali",
      cost: "9.0 USD",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: <img src={logo3} alt="img" />,
      name: "Burger Bacon Buddy",
      cost: "5.0 USD",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: <img src={logo4} alt="img" />,
      name: "Burger Spicy",
      cost: "6.0 USD",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image:<img src={logo5} alt="img" />,
      name: "Burger Classic",
      cost: "8.0 USD",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: <img src={logo6} alt="img" />,
      name: "Burger Classic",
      cost: "8.0 USD",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const Navigate=useNavigate();

  return (
    <div className="browse">
      <div>
        <h1>Browse our menu</h1>
        <p>
          Use our menu to place an order online, or phone our store to
          <br />
          place a pickup order. Fast and fresh food.
        </p>
        <div className="buttons">
          <button>Burgers</button>
          <button>Sides</button>
          <button>Drinks</button>
        </div>
      </div>
      <div className="card">
        {imgdata.map((eachobj) => {
          return (
            <div className="eachcard">
              <div className="imag">
                <li>
                  {eachobj.image}
                </li>
              </div>
              <div className="data1">
                <span><h4>{eachobj.name}</h4></span>{eachobj.cost}
                <li>{eachobj.title}</li>
                <span><input type="number" /></span><button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="bottom" onClick={()=>Navigate('/order') }>See Full Menu</button>
    </div>
  );
};

export default Browse;
