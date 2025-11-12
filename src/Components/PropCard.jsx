import React from 'react'

const PropCard = ({value}) => {
  return (
    <div className='mt-5 rounded-xl px-2 py-5 border-2 h-[100px] w-[100px] flex'>
     
         <div className='flex flex-col'>

     <h1>propcard</h1>
      <p>value is: {value}</p>
    </div>     
    </div>
  )
}

export default PropCard
