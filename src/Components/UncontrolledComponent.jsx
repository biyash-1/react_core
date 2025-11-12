import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h2>Uncontrolled Input</h2>
      <input
        ref={inputRef}
        className="border p-2 rounded"
        placeholder="Type your name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UncontrolledInput;
