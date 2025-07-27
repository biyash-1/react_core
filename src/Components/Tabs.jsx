import React from 'react'

import { useState } from 'react';
const Tabs = () => {

  const[selectedTab,setSelectedTab] = useState(null);


  const handleClick = () =>{
    selectedTab(true);
  }
  return (
    <div className='min-h-screen flex flex-col items-center mx-auto px-4'>
      <div className='py-4 text-3xl'>
        <h1>hello this is my interview question</h1>
      </div>

      <div className="buttons flex items-center justify-between gap-2">
        <button className='px-2 bg-green-200 rounded-xl'onClick={ () => setSelectedTab('tab1')}>Tab1</button>
         <button className='px-2 bg-yellow-300 rounded-xl' onClick={ () =>setSelectedTab('tab2')}>Tab2</button>
      </div>
      <div className='flex justify-between items-center gap-3'>
       {selectedTab === 'tab1' && (

      <div className='tab-1'>
      
        
     <p> this is my tab1 content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed vitae labore cupiditate explicabo qui animi dicta temporibus, quas quae incidunt atque blanditiis quia aspernatur ratione necessitatibus harum perspiciatis nulla rem!
        </p> 

      </div>
       )}
     {selectedTab === 'tab2' && (

      <div className="tab-2">
       
      
        <p>
            this is my tab2 content Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi maiores maxime excepturi totam, eaque blanditiis sapiente enim dolor soluta.
        </p>

      </div>
     )}
      </div>
    </div>
  )
}

export default Tabs
