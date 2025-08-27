
import React, { useState } from "react";
import questions from "./Data";
import Result from "./Result"; 

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionIndex, setOptionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (optionIndex === null) {
      alert("Please select one option");
      return;
    }

    const selectedAnswer = questions[currentQuestion].options[optionIndex];
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion >= questions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setOptionIndex(null);
  };

  const handleOptionClick = (index) => {
    setOptionIndex(index);
  };

  return (
    <>
      {showResult ? (
        <Result score={score} totalQuestion={questions.length} /> // Pass props to Result
      ) : (
        <div className="text-white flex flex-col justify-center items-center min-h-screen bg-black">
  <h1 className="text-white mb-5 text-3xl">Quiz app</h1>
  <div className="question_card bg-[#0a192f] bg-opacity-400 flex flex-col justify-start max-h-[80vh] w-[90%] md:w-[500px] border-black shadow-md p-4 rounded-t-2xl rounded-b-2xl overflow-auto">
    <div className="questions mb-4">
      <h2 className="text-xl text-white mb-2">
        {questions[currentQuestion].question}
      </h2>
    </div>
    <div className="options grid grid-cols-1 gap-4 text-white">
      {questions[currentQuestion].options.map((option, index) => (
        <div key={index}>
          <button
            className={`text-white w-full p-2 focus:outline-none rounded ${
              optionIndex === index ? "bg-gray-400" : "hover:bg-gray-400"
            }`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        </div>
      ))}
      <button
        className="text-black w-full p-2 focus:outline-none bg-green-400 hover:bg-gray-400 rounded"
        onClick={handleNext}
      >
        {currentQuestion < questions.length - 1 ? "Next ques" : "Submit"}
      </button>
    </div>
  </div>
</div>

      )}
    </>
  );
}

export default App;
