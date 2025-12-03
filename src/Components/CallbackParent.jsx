
// wihtout using callback
// import React, { useState } from 'react';

// // Child component that receives a function
// const ChildComponent = ({ onButtonClick }) => {
//   console.log('Child component rendered');
  
//   return (
//     <button onClick={onButtonClick}>
//       Click me from Child
//     </button>
//   );
// };

// // Parent component
// function CallbackParent() {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(0);

//   // This function is recreated on EVERY render
//   const handleClick = () => {
//     console.log('Button clicked!');
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>Other State: {otherState}</h2>
      
//       <button onClick={() => setOtherState(otherState + 1)}>
//         Change Other State
//       </button>
      
//       <ChildComponent onButtonClick={handleClick} />
//     </div>
//   );
// }

// export default CallbackParent;


import React, { useState, useCallback } from 'react';

// Use React.memo to prevent unnecessary re-renders
const ChildComponent = React.memo(({ onButtonClick }) => {
  console.log('Child component rendered');
  
  return (
    <button onClick={onButtonClick}>
      Click me from Child
    </button>
  );
});

// Parent component
function CallbackParent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // This function is memoized and only recreated when 'count' changes
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount(prevCount => prevCount + 1);
  }, [count]); // Empty array means function never changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Other State: {otherState}</h2>
      
      <button onClick={() => setOtherState(otherState + 1)}>
        Change Other State
      </button>
      
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

export default CallbackParent;