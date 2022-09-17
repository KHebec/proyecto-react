import LAAS from "../../assets/images/Laas.png";
import LMW from "../../assets/images/LoMW.webp";
import LFADA from "../../assets/images/Lfada.png";

const Partner = () => {
  return (
    <div className="flex flex-col items-center pb-8 bg-spirits w-vw">
      <h2 className="my-4 text-xl font-bold text-white">Estamos asociados!!</h2>
      <ul className="flex flex-col items-center justify-center w-full h-48 sm:flex-row sm:justify-evenly">
        <li className="my-2 w-30">
          <a
            href="https://whiskymaltargentina.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-14 md:w-20"
              src={LMW}
              key="abcd"
              alt="Museo del whisky"
            />
          </a>
        </li>
        <li className="my-2 w-30">
          <a
            href="http://www.aasommeliers.com.ar/nosotros/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-16 md:w-24"
              src={LAAS}
              key="abc"
              alt="Asociación Argentina de Sommelier"
            />
          </a>
        </li>

        <li className="my-2 w-30">
          <a
            href="https://fada-argentina.org.ar/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img className="w-20 md:w-28" src={LFADA} key="abcde" alt="fada" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Partner;
