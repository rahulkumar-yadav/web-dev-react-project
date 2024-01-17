import React from "react";

const Button = (props) => {
  return (
    <button className="bg-gradient-to-b from-[#06286e] to-[#164ec0] text-white flex px-10 py-3 rounded-full capitalize">
      {props.name}
    </button>
  );
};

export default Button;
