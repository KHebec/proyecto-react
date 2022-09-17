import linkedin from "./../../assets/images/LinkedIn_Logo.png";
import github from "./../../assets/images/GitHub-Logo.png";

const CardAuthor = ({ author }) => {
  return (
    <article className="flex flex-col items-center gap-4 p-4 border-2 rounded-lg shadow-lg">
      <h3 className="text-lg font-extrabold">{author.name}</h3>
      <h4 className="font-semibold text-center ">
        Desarrollador web fullstack
      </h4>
      <img className="w-48 " src={author.image} alt={author.name} />
      <a href={author.linkedin} target="_blank" rel="noreferrer">
        <img className="w-24 rounded-lg" src={linkedin} alt="linkedin" />
      </a>
      <a href={author.github} target="_blank" rel="noreferrer">
        <img className="w-24 rounded-lg" src={github} alt="github" />
      </a>
    </article>
  );
};

export default CardAuthor;
