import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Category from './Category';
import Quiz from './Quiz';
import Result from './Result';
import Contact from './Contact';
import { questions } from './questions';
import NotFound from './NotFound'; // Import the NotFound component

function App() {
  const [quizData, setQuizData] = useState(null);
  const [results, setResults] = useState({ correct: 0, wrong: 0 });
  const [solvedQuestions, setSolvedQuestions] = useState(0);

  useEffect(() => {
    const totalSolved = localStorage.getItem('totalSolved') || 0;
    setSolvedQuestions(Number(totalSolved));
  }, []);

  const startQuiz = (cat) => {
    setQuizData(questions[cat]); // Set quiz data based on the selected category
  };

  const handleResult = (solvedQuestionsCount, selectedOptions) => {
    // Ensure selectedOptions is an array
    if (!Array.isArray(selectedOptions)) {
      console.error('selectedOptions is not an array');
      return;
    }

    const correctAnswers = quizData.map((q) => q.ans);
    const correctCount = selectedOptions.filter((option, index) => option === correctAnswers[index]).length;
    const wrongCount = solvedQuestionsCount - correctCount;

    setResults({ correct: correctCount, wrong: wrongCount });

    const newTotal = Number(localStorage.getItem('totalSolved') || 0) + solvedQuestionsCount;
    localStorage.setItem('totalSolved', newTotal);
    setSolvedQuestions(newTotal);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary to-secondary text-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center mt-16">
          <div className="  backdrop-blur-lg rounded-lg shadow-lg w-full max-w-lg">
            <Routes>
              <Route path="/" element={<Category startQuiz={startQuiz} />} />
              <Route path="/category" element={<Category startQuiz={startQuiz} />} />
              <Route
                path="/quiz"
                element={<Quiz quizData={quizData} handleResult={handleResult} />}
              />
              <Route
                path="/result"
                element={<Result correct={results.correct} wrong={results.wrong} totalQuestions={quizData?.length} solvedQuestions={solvedQuestions} />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} /> {/* Catch all undefined routes */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
