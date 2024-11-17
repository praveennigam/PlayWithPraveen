import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaArrowRight } from 'react-icons/fa';

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
    // Pass total number of questions (quizData.length) to result page
    handleResult(selectedOptions.length, selectedOptions, quizData.length);
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

  const progress = ((qIndex + 1) / quizData.length) * 100;

  return (
    <div className="quiz-container bg-gradient-to-br from-purple-900 to-blue-800 p-10 pb-12 mb-6 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out">
      {/* Progress Bar */}
      <div className="progress-bar w-full h-2 bg-gray-400 rounded-lg mb-6">
        <div className="progress-bar-fill h-full bg-gradient-to-r from-green-400 to-blue-600" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Question */}
      <h2 className="question text-3xl font-extrabold text-white mb-6">{currentQ.q}</h2>

      {/* Options */}
      <div className="options flex flex-col space-y-4">
        {currentQ.opts.map((opt, index) => {
          let buttonClass =
            'option-btn p-4 text-lg rounded-lg transition-all duration-300 flex items-center justify-between w-full';

          if (answered) {
            buttonClass +=
              index === currentQ.ans
                ? ' bg-gradient-to-r from-green-400 to-green-600 text-white'
                : selectedOptions[qIndex] === index
                  ? ' bg-gradient-to-r from-red-400 to-red-600 text-white'
                  : ' bg-gray-600 text-gray-300';
          } else {
            buttonClass += ' bg-gradient-to-r from-blue-900 to-orange-900 text-white hover:from-green-900 hover:to-orange-900';
          }

          return (
            <button
              key={index}
              onClick={() => checkAnswer(index)}
              className={buttonClass}
              disabled={answered}
            >
              {answered && index === currentQ.ans ? <FaCheckCircle /> : answered && selectedOptions[qIndex] === index ? <FaTimesCircle /> : null}
              {opt}
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="actions flex justify-between items-center mt-6">
        <button
          onClick={finishQuiz}
          className="end-quiz-btn p-3 text-sm bg-gradient-to-r from-red-500 to-purple-500 hover:from-purple-500 hover:to-green-500 rounded-lg transition duration-300 text-white flex items-center"
        >
          <FaTimesCircle className="mr-2" /> End Quiz
        </button>

        {answered && (
          <button
            onClick={handleNextQuestion}
            className="next-question-btn p-3 text-sm bg-gradient-to-r from-yellow-900 to-red-800 hover:from-yellow-500 hover:to-purple-700 rounded-lg transition duration-300 text-white flex items-center"
          >
            <FaArrowRight className="mr-2" />
            {qIndex < quizData.length - 1 ? 'Next Question' : 'Finish'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
