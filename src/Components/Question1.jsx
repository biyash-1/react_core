import React from 'react'
import { useState } from 'react'

const Question1 = () => {

    const [count,setCount] = useState(0);
    const handleIncrease = ()=>{
        setCount(count+1)

        // setCount(count+1); 
        /*
React batches state updates when they happen in the same event cycle —
and when you use the same value (count) for both updates,
they both read the same stale value of count.

*/

    setCount(prev =>prev+1); 
    }
    const handleDecrease = () =>{
        setCount(count-1);
    }

   return (
    <div className='flex items-center jusr py-4 px-2 mx-auto'>

    <div>
        <button onClick={handleDecrease}>decrease</button>
        <input type="text" className='w-40px bg-slate-400' value={count} />
        <button onClick={handleIncrease}>increase</button>
    </div>
      
    </div>
  )
}

export default Question1
