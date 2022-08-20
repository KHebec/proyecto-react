import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/images/logo.svg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="Navbar">
      <img className="nav-logo" src={logo} alt="logo"/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
