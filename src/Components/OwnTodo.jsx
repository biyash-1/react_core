import React from 'react'
import { useState } from 'react'


const OwnTodo = () => {

  const [value,setValue] = useState("");
  const [todo,setTodo]  = useState([]);

 const addTask = () =>{
  if(value.trim()==0){
    return;
  }
  setTodo([...todo,value])
  setValue("")
   console.log("todo i get",[...todo,value])
 }
  return (
    <div className=' h-screen  flex flex-col items-center  mx-auto mt-14'>
      <div className='flex gap-3 items-center justify-between'>
        <input type="text"value = {value} onChange= {(e) => setValue(e.target.value)} className='bg-gray-400' />
        <button className='bg-green-400 px-4' onClick = {addTask}>Add task</button>
      </div>

      <div className='w-1/4 pt-4 max-h-[700px] overflow-y-auto '>
           <ul className='flex flex-col items-center justify-between '>
            {
              todo.map((todos,index) => (
                
                
                <li className='bg-gray-300 p-2 mb-2 w-full flex items-center justify-between gap-4  '>
               {todos}
                <button 
        className='bg-red-400 rounded-xl px-2 '
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
                  </li>

              )
            )}
           </ul>
      </div>
    </div>
  )
}

export default OwnTodo















































// import  { useState } from "react"; 

// const OwnTodo = () => {
//   const [value, setValue] = useState("");
//   const [todos, setTodo] = useState([]);

//   const handleAdd = () => {
//     if (value.trim() === "") return; 
//     setTodo([...todos, value]);
//     setValue("");
//   };

//   const handleDelete = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index); 
//     setTodo(updatedTodos);
//   };

//   return (
//     <div className="h-screen mx-auto p-4">
//       <div className="flex flex-col justify-center items-center p-3 mt-4">
//         <h1>enter tdos to create</h1>
//         <div className="flex justify-between items-center">
//           <input
//             className="bg-slate-200"
//             type="text"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//           <button className="bg-green-400 p-1 rounded ml-3" onClick={handleAdd}>
//             Add
//           </button>
//         </div>
//         <div className="w-1/4 flex flex-col items-center flex-wrap mt-4">
//           <ul className="w-[50vh] relative">
//             {todos.map((todo, index) => (
//               <li
//                 key={index}
//                 className="bg-blue-950 text-white p-2 mb-2 rounded w-full relative"
//               >
//                 {todo}
//                 <button
//                   className="bg-red-500 text-white p-1 rounded absolute left-[350px] mb-2"
//                   onClick={() => handleDelete(index)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OwnTodo;
