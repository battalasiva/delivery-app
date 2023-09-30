import React from "react";
import "./Footer.css";
import logo from "./fig.svg";
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer">
      <div className="f1">
        <img src={logo} alt="img" />
        <p>
          Takeaway & Delivery template <br /> for small - medium businesses.
        </p>
        <p1>Built by Flowbase · Powered by Webflow</p1>
      </div>
      <div className="f22">
        <div className="f2">
          <div className="f23">
            <h5>Company</h5>
            <p>Home</p>
            <p>Order</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="f23">
            <h5>Template</h5>
            <p>Style Guide</p>
            <p>changelog</p>
            <p>Licence</p>
            <p>webflow univercity</p>
          </div>
          <div className="f23 dif">
            <h5>Flowbase</h5>
            <p>More Clonebles</p>
          </div>
        </div>
        <div className="icons">
            <FiInstagram className="icon"/>
            <FaTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
