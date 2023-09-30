import React from "react";
import logo1 from "./log1.png";
import logo2 from "./log2.png";
import logo3 from "./log3.png";
import "./How.css";
const How = () => {
  const imgdata = [
    {
      image: logo1,
      heading: "Adapt your menu items",
      para: "Easily adapt your menu using the webflow CMS and allow customers to browse your items.",
    },
    {
      image: logo2,
      heading: "Accept online orders & takeout",
      para: "Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.",
    },
    {
      image: logo3,
      heading: "Manage delivery or takeout",
      para: "Manage your own logistics and take orders simply through the ecommerce system.",
    },
  ];
  return (
    <div>
      <div className="head1">
        <h1>How it works.</h1>
        <div className="cardlist">
          {
            imgdata.map((eachobj)=>{
                return(
                    <div className="cardeach">
                        <li><img  className="cardimg"src={eachobj.image}/></li>
                        <li>{eachobj.heading}</li>
                        <li>{eachobj.para}</li>
                        
                    </div>
                )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default How;
