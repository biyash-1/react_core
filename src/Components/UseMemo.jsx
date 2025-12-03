// without  useMemo expenisve number reders on every input value change
// import { useState } from "react";
// export default function useMemo() {
//   const [text, setText] = useState("");

//   const expensiveNumber = (() => {
//     console.log("Expensive calculation running...");
//     let total = 0;
//     for (let i = 0; i < 200000000; i++) total++;
//     return total + Math.random();
//   })();

//   return (
//     <div>
//       <h2>Without useMemo</h2>
//       <p>Expensive Result: {expensiveNumber}</p>

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// }

// with useMemo expensive number renders only once
import { useState, useMemo } from "react";

export default function MemoExample() {
  const [text, setText] = useState("");

  const expensiveNumber = useMemo(() => {
    console.log("Expensive calculation running (WITH useMemo)...");
    let total = 0;
    for (let i = 0; i < 200000000; i++) total++;
    return total + Math.random(); // 👈 would change, BUT only runs once
  }, []); // 👈 no dependencies → runs ONCE

  return (
    <div>
      <h2>With useMemo</h2>

      <p>Expensive Result: {expensiveNumber}</p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

