import React from "react";
import "./Company.css";
import logo1 from "./img1.png";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import logo2 from './line.svg'
const Company = () => {
  return (
    <div className="company">
      <Banner />
      <Navbar />
      <div className="heading">
        <h1>
          Our company focuses <br />
          on <span>food and people.</span>
        </h1>
      </div>
      <div className="b">
        <div className="b1">
          <h1>
            The home of <br />
            fresh products
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <button>Learn about us</button>
        </div>
        <div className="c1">
          <img src={logo1} alt="img1" />
        </div>
      </div>
      <div className="transparent">
          <div className="t-body">
            <h1>62</h1>
            <img src={logo2} alt="line" />
            <p>Fiesty Menu Items</p>
          </div>
          <div className="t-body">
            <h1>136</h1>
            <img src={logo2} alt="line" />
            <p>Fiesty Menu Items</p>
          </div>
          <div className="t-body">
            <h1>78</h1>
            <img src={logo2} alt="line" />
            <p>Fiesty Menu Items</p>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;
