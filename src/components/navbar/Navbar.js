import { useContext } from "react";
import { ShoppingContext } from "./../../context/ShoppingContext";
import { useModal } from "../../hooks/useModal";
import ModalCart from "../cart/ModalCart";
import { useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import CartEmpty from "../cart/CartEmpty";
import CartItem from "../cart/CartItem";

const Navbar = () => {
  const data = useContext(ShoppingContext);
  const { cart, deleteFromCart, cleanCart } = data;
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
          <i onClick={openModal} className="relative fas fa-shopping-cart">
            <div className="absolute circle-quantity"></div>{" "}
          </i>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
      <ModalCart isOpen={isOpenModal} closeModal={closeModal}>
        {cart.length === 0 && <CartEmpty closeModal={closeModal} />}
        {cart.length !== 0 && (
          <div className="">
            <section>
              <h2 className="my-4 text-xl font-bold text-center">Carrito</h2>
              <article className="flex flex-col gap-4">
                {cart.map((item) => (
                  <CartItem
                    key={item.name}
                    data={item}
                    deleteFromCart={deleteFromCart}
                  />
                ))}
              </article>
            </section>
            <section className="flex flex-col items-center">
              <button
                className="w-32 p-1 mt-4 font-bold border-2 border-yellow-500 rounded text-grey-500"
                onClick={() => {
                  cleanCart(cart);
                  closeModal();
                }}
              >
                Limpiar Carrito
              </button>
              <br />
              <h4 className="font-bold">
                {" "}
                Precio total: ${" "}
                <span className="text-xl">
                  {cart.reduce((previous, current) => {
                    return (
                      Number(previous) +
                      Number(current.price * current.quantity)
                    );
                  }, 0)}
                </span>
              </h4>
              <h5 className="font-bold">
                Cantidad Total:{" "}
                <span className="text-xl">
                  {cart.reduce((previous, current) => {
                    return Number(previous) + Number(current.quantity);
                  }, 0)}
                </span>
              </h5>
              <button
                className="w-32 p-1 mt-4 font-bold text-center border-2 border-yellow-500 rounded"
                onClick={closeModal}
              >
                Comprar
              </button>
            </section>
          </div>
        )}
      </ModalCart>
    </>
  );
};

export default Navbar;
