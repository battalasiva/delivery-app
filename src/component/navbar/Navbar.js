import React,{useState} from "react";
import "../navbar/Navbar.css";
import logo from "./fig.svg";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import Cart from "../order/Cart";
const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => {
    setCartOpen(prevState => !prevState);
  };


  const navlist = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Order",
      path: "/order",
    },
    {
      name: "Company",
      path: "/company",
    },
    {
      name: "FAQ",
      path: "/faqpages",
    },
  ];

  


  return (
    <div className="navbar">
      <div className="row1">
        <div className="nav-logo">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </div>
        <div className="nav-list">
          {navlist.map((eachobj) => {
            return (
              <li>
                <Link className="links" to={eachobj.path}>
                  {eachobj.name}
                </Link>
              </li>
            );
          })}
          <li>
            {/* <Link className="link" onClick={handleContactClick}> 
              Contact
            </Link> */} 
            <a className="link" href="mailto:battalasiva111@gmail.com">Contact</a>
          </li>
          <div className="cart" >
            <BsFillCartFill className="cart1" onClick={toggleCart}/>
            {
              cartOpen && <Cart /> 
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
