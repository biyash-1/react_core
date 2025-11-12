// using callback props
// parent 
import { useState } from "react";
import ChildInput from "./ChildInput";
const Qn3 = () => {

  const [color, setColor] = useState(null);
const handleChangeColor   = (e) =>{
    setColor(e.target.value)
}
  return (
    <div className="flex flex-col gap-4 items-center py-8 justify-between">
      <h1 className="text-2xl">Question3</h1>

      <div
        className="w-32 border-2 h-32 rounded-2xl"
        style={{ backgroundColor:  color  }}
      ></div>
     <ChildInput color ={color} onChange={handleChangeColor}/>
    </div>
  );
};

export default Qn3;






// basic approach
// import { useState } from "react";

// const Qn3 = () => {
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div className="flex flex-col gap-4 items-center py-8 justify-between">
//       <h1 className="text-2xl">Question 3</h1>

//       <div
//         className="w-32 border-2 h-32 rounded-2xl"
//         style={{ backgroundColor: inputValue }}
//       ></div>

//       <input
//         type="text"
//         className="bg-gray-300 rounded px-2 py-4 text-xl"
//         placeholder="Type a color..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Qn3;

