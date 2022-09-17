export const About = () => {
  return (
    <section className="about-container">
      <h2 className="my-2 text-xl font-bold text-center xl:text-2xl text-spirits">
        Acerca de Spirits
      </h2>
      <div className="flex flex-col md:flex-row ">
        <section className="flex flex-col justify-between mx-4 text-md lg:w-2/3 xl:text-xl">
          <p className="mb-2 font-semibold text-md">
            Spirits es una empresa que comercializa bebidas blancas desde 2022.
          </p>

          <p className="italic">
            Nuestra misión es brindar una experiencia única de compra de bebidas
            blancas.
          </p>

          <p className="my-2 font-semibold">Para ello nos ocupamos de:</p>

          <ul className="flex flex-col gap-4 ml-2">
            <li>- Ofrecer las mejores marcas y productos del mercado.</li>
            <li>- Brindar asesoramiento para obtener lo que se desea.</li>
            <li>- Tener una experiencia de compra sencilla y segura.</li>
            <li>
              - Disposición permanente a las sugerencias de nuestros clientes.
            </li>
          </ul>
        </section>
        <img
          className="object-contain mx-auto w-96 lg:w-1/4"
          src="https://www.drinksco.es/blog/assets/uploads/sites/2/2020/03/bes-liquor-brand-world-1024x683.jpg"
          alt="bebidas"
        />
      </div>
    </section>
  );
};
