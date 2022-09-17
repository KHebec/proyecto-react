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
      {authors.map((author) => (
        <CardAuthor key={author.id} author={author} />
      ))}
    </>
  );
};

export default AboutUs;
