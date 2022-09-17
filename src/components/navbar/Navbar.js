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
import { Button } from "../button/Button";

const Navbar = () => {
  const data = useContext(ShoppingContext);
  const { cart, addToCart, deleteFromCart, cleanCart } = data;
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = cart.reduce((previous, current) => {
    return Number(previous) + Number(current.quantity);
  }, 0);
  return (
    <>
      <div className="Navbar">
        <img className="nav-logo" src={logo} alt="logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/products">Productos</Link>
        </div>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-user-alt"></i>
          <i onClick={openModal} className="relative fas fa-shopping-cart">
            <div className="absolute text-center circle-quantity">
              {totalQuantity}
            </div>{" "}
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
              <h2 className="my-4 text-xl font-bold text-center text-spirits">
                Carrito de compras
              </h2>
              <article className="flex flex-col gap-4">
                {cart.map((item) => (
                  <CartItem
                    key={item.name}
                    data={item}
                    deleteFromCart={deleteFromCart}
                    addToCart={addToCart}
                  />
                ))}
              </article>
            </section>
            <section className="flex flex-col items-center">
              <div className="mx-auto mt-4">
                <Button
                  name="Limpiar carrito de compras"
                  click={() => {
                    cleanCart(cart);
                    closeModal();
                  }}
                  bg={"bg-slate-500"}
                />
              </div>

              <br />
              <h4 className="mb-4 font-bold">
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
              <h5 className="mb-4 font-bold">
                Cantidad Total: <span className="text-xl">{totalQuantity}</span>
              </h5>
              <Button name={"Agregar más productos"} click={closeModal} />
            </section>
          </div>
        )}
      </ModalCart>
    </>
  );
};

export default Navbar;
