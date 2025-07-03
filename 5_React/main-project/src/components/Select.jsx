import React, { forwardRef, useId } from "react";

const Select = forwardRef((options, label, className = "", ref, ...props) => {
  const id = useId();

  return (
    <div>
      {label && <label htmlFor={id} className=""></label>}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {/* By default the options are always an array. */}
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

// You can also do in this way:
// export default forwardRef(Select);

export default Select;
