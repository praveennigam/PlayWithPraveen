import React, { useState, useEffect } from 'react'; 
import { FaCheckCircle, FaTimesCircle, FaArrowRight } from 'react-icons/fa';

const Quiz = ({ quizData, handleResult }) => {
  const [qIndex, setQIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoSelected, setIsAutoSelected] = useState(false);

  const currentQ = quizData[qIndex];

  const checkAnswer = (selected) => {
    setSelectedOptions((prev) => {
      const newOptions = [...prev];
      newOptions[qIndex] = selected;
      return newOptions;
    });
    setAnswered(true);
    setShowAnswer(true);

    if (selected === currentQ.ans) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setShowAnswer(false);
    setIsTransitioning(true);
    setTimeout(() => {
      if (qIndex < quizData.length - 1) {
        setQIndex(qIndex + 1);
        setIsTransitioning(false);
      } else {
        // Reset quiz after the last question
        resetQuiz();
      }
    }, 500);
  };

  const resetQuiz = () => {
    setQIndex(0);  // Reset to the first question
    setSelectedOptions([]);  // Clear selected options
    setCorrectAnswers(0);  // Reset correct answers count
    setAnswered(false);  // Reset answered status
    setShowAnswer(false);  // Reset show answer state
    setCountdown(3);  // Reset countdown for the next quiz round
    setIsTransitioning(false);  // Reset transitioning state
  };

  const progress = ((qIndex + 1) / quizData.length) * 100;

  const autoSelectRandomOption = () => {
    const randomOption = Math.floor(Math.random() * 4);
    checkAnswer(randomOption);
    setIsAutoSelected(true);
  };

  useEffect(() => {
    setLoading(true);
    setCountdown(3);
    setIsAutoSelected(false);
    setAnswered(false);
    setShowAnswer(false);
  }, [qIndex]);

  useEffect(() => {
    if (countdown > 0) {
      const countdownTimer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(countdownTimer);
    } else {
      setLoading(false);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0 && !answered && !isAutoSelected) {
      const selectionTimer = setTimeout(() => {
        autoSelectRandomOption();
      }, 4000);
      return () => clearTimeout(selectionTimer);
    }
  }, [countdown, answered, isAutoSelected]);

  useEffect(() => {
    if (showAnswer) {
      const nextQuestionTimer = setTimeout(() => {
        handleNextQuestion();
      }, 6000);
      return () => clearTimeout(nextQuestionTimer);
    }
  }, [showAnswer]);

  return (
    <div className="quiz-container bg-gradient-to-br from-voilet-300 to-blue-900 p-10 pb-12 mb-0 mt-0 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out relative">
      
      <div className="progress-bar w-full h-2 bg-gray-400 rounded-lg mb-6">
        <div className="progress-bar-fill h-full bg-gradient-to-r from-green-400 to-blue-600 transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      <h2 className="question text-3xl font-extrabold text-white mb-6">{currentQ.q}</h2>

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
            buttonClass += ' bg-gradient-to-r from-blue-900 to-purple-200 text-white hover:from-orange-400 hover:to-blue-900';
          }

          return (
            <button
              key={index}
              onClick={() => checkAnswer(index)}
              className={buttonClass}
              disabled={answered}
              aria-label={`Choose option ${opt}`}
            >
              {answered && index === currentQ.ans ? <FaCheckCircle /> : answered && selectedOptions[qIndex] === index ? <FaTimesCircle /> : null}
              {opt}
            </button>
          );
        })}
      </div>

      {showAnswer && !answered && (
        <div className="answer-feedback text-lg font-bold text-white mt-4">
          <p>The correct answer is: {currentQ.opts[currentQ.ans]}</p>
        </div>
      )}

      <div className="actions flex justify-between items-center mt-6">
        <button
          onClick={resetQuiz}
          className="end-quiz-btn p-3 text-sm bg-gradient-to-r from-red-500 to-purple-500 hover:from-purple-500 hover:to-green-500 rounded-lg transition duration-300 text-white flex items-center"
        >
          <FaTimesCircle className="mr-2" /> Reset Quiz
        </button>

        {answered && (
          <button
            onClick={handleNextQuestion}
            className="next-question-btn p-3 text-sm bg-gradient-to-r from-orange-200 to-blue-400 hover:from-yellow-500 hover:to-purple-500 rounded-lg transition duration-300 text-white flex items-center"
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
