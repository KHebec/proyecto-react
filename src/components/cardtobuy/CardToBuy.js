import { Button } from "../button/Button";
import { Link } from "react-router-dom";

const CardToBuy = ({ img, name, style, cites }) => {
  return (
    <article
      className={`flex flex-col ${style} justify-between border-t-2 border-b-2`}
    >
      <div className="flex flex-col items-center w-full md:w-1/2 lg:w-[60%] md:px-2 justify-evenly">
        <h2 className="my-4 text-xl font-bold md:text-2xl text-spirits">
          {name}
        </h2>
        <h3 className="mb-4 font-bold text-center text-md md:text-xl">
          {cites}
        </h3>
        <Link className="mb-4" to="/products">
          <Button name="Comprar" />
        </Link>
      </div>
      <img className="w-full md:w-[50%] lg:w-[40%]" src={img} alt={name} />
    </article>
  );
};

export default CardToBuy;
