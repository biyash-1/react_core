
import React from "react"
import { useState } from "react"

const Child = React.memo(({count}) =>{
  console.log("child component rendered");
  return <div>Child component count: {count}</div>
})

const Memo = () => {
const[text,settext] = useState("");
const[count,setCount] = useState(0);

  return (
    <div>
         <Child count={count}/>
      <button onClick={() =>setCount(count+1)}>Increment</button>
      <input value= {text} type="text"onChange={(e) =>settext(e.target.value)} />
    </div>
  )
}

export default Memo
