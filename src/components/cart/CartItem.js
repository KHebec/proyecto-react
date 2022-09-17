import { Button } from "../button/Button";

const CartItem = ({ data, deleteFromCart, addToCart }) => {
  const { id, image, name, price, category, quantity } = data;
  const item = { ...data };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:justify-evenly lg:mx-32 xl:mx-64 p-4 gap-8 rounded-lg w-50 border-2 border-[#004225] grayscale-50 hover:grayscale-0 hover:shadow-2xl ">
      <img src={image} alt={name} width={100} />
      <div className="flex flex-col items-start justify-evenly">
        <h5 className="font-semibold">{category}</h5>
        <h5 className="font-bold">{name}</h5>
        <h5 className="font-semibold">
          Precio: <span className="text-lg"> ${price}</span>
        </h5>
        <h5 className="font-semibold">
          Cantidad: <span className="text-lg">{quantity}</span>
        </h5>
        <h5 className="font-semibold">
          Total: <span className="text-lg">${price * quantity}</span>
        </h5>
      </div>
      <div className="flex flex-col items-center justify-evenly">
        <Button
          name="Agregar uno"
          click={() => addToCart(name, item)}
          bg={"bg-spirits"}
        />
        <Button
          name="Eliminar uno"
          click={() => deleteFromCart(id, false, quantity, data)}
          bg={"bg-[#bb695d]"}
        />
        <Button
          name="Eliminar Todos"
          click={() => deleteFromCart(id, true)}
          bg={"bg-[#ee1111]"}
        />
      </div>
    </div>
  );
};

export default CartItem;
