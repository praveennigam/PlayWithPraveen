import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ correct, wrong, totalQuestions, solvedQuestions }) => {
  // Calculate percentage if there are solved questions
  const percentage = solvedQuestions > 0 ? ((correct / solvedQuestions) * 100).toFixed(2) : 0;
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center  bg-gradient-to-br from-purple-800 to-blue-600 p-6 relative overflow-hidden shadow-2xl rounded-lg">
      <div className="absolute inset-0 bg-opacity-30 bg-black"></div>
      <div className="max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-2xl transition-transform transform mt-4 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Quiz Results</h2>

        <p className="text-lg text-white">Correct Answers: <span className="font-bold text-green-400">{correct}</span></p>
        <p className="text-lg text-white">Wrong Answers: <span className="font-bold text-red-400">{wrong}</span></p>
        <p className="text-lg text-white">Total Questions: <span className="font-bold text-blue-400">{totalQuestions}</span></p>
        <p className="text-lg text-white">Your Score: <span className="font-bold text-yellow-400">{percentage}%</span></p>

        <button
          onClick={() => navigate('/category')}
          className="mt-6 w-full p-4 bg-gradient-to-r from-blue-700 to-green-500 hover:from-green-400 hover:via-blue-800 hover:to-red-700 rounded-lg transition duration-300 transform hover:scale-105 text-white font-semibold shadow-lg"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
