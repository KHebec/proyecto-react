import React from "react";

export const Button = ({ click, name, bg }) => {
  return (
    <button
      onClick={click}
      bg={bg}
      className={`p-2 font-bold border-2 text-white rounded-lg text-grey-500 bg-[#004225] hover:text-[#004225] hover:bg-white ${bg}`}
    >
      {name}
    </button>
  );
};
