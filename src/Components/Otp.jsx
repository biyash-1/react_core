import { useEffect, useRef } from "react";

const Otp = ({ length = 4 }) => {
  const inputsRef = useRef([]);

  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus(); // focus first input on mount
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      inputsRef.current[index].value = "";
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
      <div className="flex gap-2">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            type="text"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            className="w-8 h-8 rounded text-center"
            maxLength={1}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
