import React from "react";
import logo1 from "./main3.png";
import "./Body.css";
import stars from "./star.svg";
import girleat from "./girl.png";
import { Navigate, useNavigate } from "react-router-dom";

const Body = () => {
  const Navigate=useNavigate();
  return (
    <div className="main1">
      <div className="body1">
        <div className="block1">
          <h1>
            Beautiful food <br />& takeaway,
            <br />
            <span>delivered </span>to <br />
            your door{" "}
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <button className="button1" onClick={()=>Navigate('/order')}>place an order</button>
          <img className="star" src={stars} alt="star" />
          <p>
            <span>4.8 out of 5</span> based on 2000+ reviews
          </p>
        </div>
        <div className="block2">
          <img className="main3" src={logo1} alt="logo" />
        </div>
      </div>
      <div className="body2">
        <div className="block1">
          <h1>
            The home of <br />
            fresh products
            <br />
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <button className="button1" onClick={()=>Navigate('/company')}>Learn about us</button>
        </div>
        <div className="block2">
          <img className="main3" src={girleat} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Body;
