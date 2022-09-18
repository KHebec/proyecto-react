import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import CardAuthor from "../card/CardAuthor";

const AboutUs = () => {
  const data = useContext(StateContext);
  const { authors } = data;
  console.log(data);
  console.log(authors);
  return (
    <>
      <h2 className="mb-12 text-xl font-bold text-center text-spirits">
        Sobre los autores del proyecto en React
      </h2>
      <section className="flex flex-wrap justify-center gap-6 mb-10 xl:gap-8">
        {authors.map((author) => (
          <CardAuthor key={author.id} author={author} />
        ))}
      </section>
    </>
  );
};

export default AboutUs;
