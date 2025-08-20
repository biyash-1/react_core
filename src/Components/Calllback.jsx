import React from 'react'
import { useCallback,useState } from 'react'

function Button({ onClick }) {
    console.log("Rendered Button");
    return <button onClick={onClick}>Click me</button>;
}
const Calllback = () => {
    const [count,setCount] = useState(0);

      const memoizedFn = useCallback(() => {
    console.log("Button clicked");
  }, []); 
  return (
    <div>
      <p>{count}</p>
           <Button onClick={memoizedFn} />
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
     
    </div>
  )
}

export default Calllback
