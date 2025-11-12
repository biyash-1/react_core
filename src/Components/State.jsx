import React from "react";
import { useState } from "react";
import PropCard from "./PropCard";
const state = () => {
  const [value, setValue] = useState(0);

  const handleDecrease = () => {
    setValue(value - 1);
  };
  const handleIncrease = () => {
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
  };
  return (
    <div className="p-4 flex flex-col items-center justify-center mx-auto">
      <h1 className="text-xl font-semibold mb-4">useState Example</h1>
      <div className="flex gap-2 items-center">
        <button onClick={handleDecrease}>-</button>
        <input
          className="bg-gray-300 text-center px-2 py-2 w-16"
          value={value}
          readOnly
        />
        <div className="card">
        </div>
        <button onClick={handleIncrease}>+</button>
      </div>
        <PropCard value ={value}/>
    </div>
  );
};

export default state;
