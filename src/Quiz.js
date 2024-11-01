import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ quizData, handleResult }) => {
  const [qIndex, setQIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answered, setAnswered] = useState(false);
  const navigate = useNavigate();

  const currentQ = quizData[qIndex];

  const checkAnswer = (selected) => {
    setSelectedOptions((prev) => {
      const newOptions = [...prev];
      newOptions[qIndex] = selected;
      return newOptions;
    });
    setAnswered(true);
  };

  const finishQuiz = () => {
    handleResult(selectedOptions.length, selectedOptions);
    navigate('/result');
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    if (qIndex < quizData.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      finishQuiz();
    }
  };

  return (
    <div className="mt-10 mx-4 sm:mx-8 lg:mx-16 h-120 bg-gradient-to-br from-purple-800 to-blue-600 p-10 pb-12 mb-6 rounded-lg shadow-lg transition-transform transform">
      <h2 className="text-2xl font-bold text-white mb-4">{currentQ.q}</h2>
      <div className="flex flex-col">
        {currentQ.opts.map((opt, index) => {
          let buttonClass = 'mb-2 p-2 text-sm rounded-lg transition duration-300 ';
          if (answered) {
            buttonClass += index === currentQ.ans ? 'bg-green-600' : (selectedOptions[qIndex] === index ? 'bg-red-600' : 'bg-gray-600');
          } else {
            buttonClass += 'bg-gradient-to-r from-red-900 to-blue-900 hover:from-purple-900 hover:to-red-700';
          }

          return (
            <button
              key={index}
              onClick={() => checkAnswer(index)}
              className={buttonClass}
              disabled={answered}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={finishQuiz}
          className="p-2 text-sm bg-gradient-to-r from-red-500 to-purple-500 hover:from-purple-500 hover:to-green-500 rounded-lg transition duration-300 text-white"
        >
          End Quiz
        </button>
        {answered && (
          <button
            onClick={handleNextQuestion}
            className="p-2 text-sm bg-gradient-to-r from-yellow-900 to-red-800 hover:from-yellow-500 hover:to-purple-700 rounded-lg transition duration-300 text-white"
          >
            {qIndex < quizData.length - 1 ? 'Next Question' : 'Finish'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
