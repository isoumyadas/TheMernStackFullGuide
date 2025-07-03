import React, { forwardRef, useId } from "react";

// In React 19 ForwardRef is deprecated and their is no longer use of forwardRef, instead we can pass ref as prop and use it.
const Input = forwardRef(
  (label, type = "text", className = "", ref, ...props) => {
    const id = useId;
    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        )}

        <input
          type={type}
          className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
