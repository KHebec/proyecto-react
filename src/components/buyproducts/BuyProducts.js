import { useContext } from "react";
import { ShoppingContext } from "./../../context/ShoppingContext";
import { useModal } from "../../hooks/useModal";
import CardProduct from "./CardProduct";
import CartEmpty from "../cart/CartEmpty";
import Cart
import "./BuyProducts.css";

const BuyProducts = () => {
  const data = useContext(ShoppingContext);
  const { products, addToCart } = data;

  return (
    <section>
      <h2 className="my-4 text-xl font-bold text-center">Productos</h2>
      <div className="card">
        {products.map((product) => (
          <CardProduct key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default BuyProducts;
