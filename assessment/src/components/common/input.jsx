import React from "react";

const InputComponent = (props) => {
  return (
      <div className="grid gap-6 md:grid-cols-2 w-full">
        <div className="col-span-2">
          <label
            htmlFor={props.inputId}
            className="block mb-2 px-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            {props.label}
          </label>
          <input
            type={props.type}
            id={props.inputId}
            name={props.inputName}
            onChange={props.onChange}
            value={props.value}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5"
            placeholder={props.placeholder}
            disabled={props.disabled || false}
          />
        </div>
      </div>
  );
};

export default InputComponent;
