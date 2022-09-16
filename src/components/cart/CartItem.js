const CartItem = ({ data, addToCart, deleteFromCart }) => {
  const { id, name, price, quantity, image, category } = data;

  return (
    <div className="flex justify-evenly p-4 gap-8 rounded-lg w-100 border-2 border-[#004225] grayscale-50 hover:grayscale-0 hover:shadow-2xl ">
      <img src={image} alt={name} width={150} />
      <div className="flex flex-col items-center justify-evenly">
        <h5 className="font-bold ">{category}</h5>
        <h5 className="font-bold">{name}</h5>
        <h5>Precio ${price}</h5>
        <h5>Cantidad: {quantity}</h5>
        <h5>Total: ${price * quantity}</h5>
      </div>
      <div className="flex flex-col items-center justify-end">
        <button
          className="p-1 mt-4 font-bold text-black bg-orange-400 border-2 border-red-500 rounded"
          onClick={() => deleteFromCart(id, false, quantity, data)}
        >
          Eliminar uno
        </button>
        <button
          className="p-1 mt-4 font-bold text-red-500 border-2 border-red-500 rounded"
          onClick={() => deleteFromCart(id, true)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
