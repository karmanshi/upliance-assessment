import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className={`text-white ${props.extra_css} focus:ring-4 focus:outline-none font-medium rounded-lg text-md font-bold px-5 py-2.5 text-center mb-2 w-56`}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
