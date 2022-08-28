import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <img className="nav-logo" src={logo} alt="logo" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">Sobre Nosotros</a>
        <a href="/products">Productos</a>
        <a href="/contact">Sucursales</a>
        <a href="/others">Otros</a>
      </div>
      <div className="icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-user-alt"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
