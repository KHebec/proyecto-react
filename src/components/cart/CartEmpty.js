import { Button } from "../button/Button";
import empty from "./../../assets/images/empty-cart.svg";

const CartEmpty = ({ closeModal }) => {
  return (
    <div className="flex flex-col h-[80vh] justify-evenly items-center ">
      <h2 className="text-2xl font-bold text-center">Carrito de compras</h2>
      <img src={empty} alt="empty cart" width={400} />
      <h4 className="text-lg font-bold text-center">
        El carrito de compras esta vacío
      </h4>
      <div className="mx-auto">
        <Button click={closeModal} name={"Ir a Comprar"} />
      </div>
    </div>
  );
};

export default CartEmpty;
