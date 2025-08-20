import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context';
function Component1() {
    const counter = useContext(counterContext);
  return (
    <div  className='text-white'>
        {counter}
    
    </div>
  
  )
}

export default Component1
