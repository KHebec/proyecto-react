import { useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <img className="nav-logo" src={logo} alt="logo" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/products">Productos</Link>
        <Link to="/sucursales">Sucursales</Link>
        <Link to="/others">Otros</Link>
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
