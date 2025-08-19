import  { useState } from "react"; 

const OwnTodo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState([]);

  const handleAdd = () => {
    if (value.trim() === "") return; 
    setTodo([...todos, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); 
    setTodo(updatedTodos);
  };

  return (
    <div className="h-screen mx-auto p-4">
      <div className="flex flex-col justify-center items-center p-3 mt-4">
        <h1>enter tdos to create</h1>
        <div className="flex justify-between items-center">
          <input
            className="bg-slate-200"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-green-400 p-1 rounded ml-3" onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className="w-1/4 flex flex-col items-center flex-wrap mt-4">
          <ul className="w-[50vh] relative">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="bg-blue-950 text-white p-2 mb-2 rounded w-full relative"
              >
                {todo}
                <button
                  className="bg-red-500 text-white p-1 rounded absolute left-[350px] mb-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OwnTodo;
