// parent
import React from "react";
import Child from "./Child";
import { useState } from "react";
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col items-center justify-between py-8">
      <h1>Parent: cout value is{count}</h1>

      <div>
        <Child onIncrease={handleIncrease} onDecrease={handleDecrease} />
      </div>
    </div>
  );
};

export default Parent;
