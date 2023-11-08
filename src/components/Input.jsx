import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextarea, ...props }, ref) {
  const inputStyles =
    "w-full max-w-lg rounded-xl shadow-sm text-stone-600 focus:outline-none focus:shadow-lg px-4 py-2";
  return (
    <p className="input [&:not(:first-of-type)]:mt-4 flex flex-col gap-2 ">
      <label className="text-sm font-bold uppercase text-stone-600">
        {label}
      </label>
      {isTextarea ? (
        <textarea {...props} className={inputStyles} ref={ref} />
      ) : (
        <input {...props} className={inputStyles} ref={ref} />
      )}
    </p>
  );
});

export default Input;
