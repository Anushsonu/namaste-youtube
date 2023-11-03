import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="text-sm font-semibold px-3 py-1 mx-2 my-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
