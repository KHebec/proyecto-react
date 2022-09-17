import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import CardProduct from "./CardProduct";

const BuyProducts = () => {
  const data = useContext(StateContext);
  const { products, addToCart } = data;

  return (
    <section>
      <h2 className="my-4 mb-8 text-xl font-bold text-center text-spirits">
        Compra tus bebidas preferidas
      </h2>
      <div className="flex flex-wrap gap-8 justify-evenly">
        {products.map((product) => (
          <CardProduct key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default BuyProducts;
