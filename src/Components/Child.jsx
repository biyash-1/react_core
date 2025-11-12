// child

import React from 'react'

const Child = ({onIncrease,onDecrease}) => {
  return (
    <div className='flex gap-4'>
      <button onClick={onIncrease}>
              increase
      </button>
      <button onClick = {onDecrease}>
     Decrease
      </button>

    </div>
  )
}

export default Child
