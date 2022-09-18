import { Button } from "../button/Button";

const CardProduct = ({ data, addToCart }) => {
  const { name, price, image, content, category } = data;

  return (
    <article className="flex flex-col items-center p-4 rounded-lg w-72 border-2 border-[#004225]  hover:shadow-2xl ">
      <h5 className="mb-2 font-bold">{category}</h5>
      <h5 className="mb-2 font-bold">{name}</h5>
      <h5 className="mb-2 font-bold text-green-800">
        {" "}
        <span className="text-black">Precio:</span> ${price}
      </h5>
      <img
        src={image}
        width={150}
        heigth={200}
        alt={name}
        className="object-fit"
      />
      <h5 className="italic font-semibold">
        {" "}
        <span className="font-bold">Contenido:</span> {content * 1000} ml
      </h5>
      <br />
      <Button name="Agregar al carrito" click={() => addToCart(name, data)} />
    </article>
  );
};

export default CardProduct;
