import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import 'animate.css';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-center p-8">
      {/* Animated Gradient Icon with Bouncing Effect */}
      <div className="animate__animated animate__bounce animate__infinite animate__slow mb-4">
        <FaExclamationTriangle 
          size={100} 
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 animate__animated animate__fadeIn"
        />
      </div>

      {/* Heading with Gradient and Fade-in Effect */}
      <h1 className="text-4xl font-extrabold mb-2 animate__animated animate__fadeIn animate__delay-1s text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Oops! Page Not Found
      </h1>

      {/* Message with Gradient and Fade-in Effect */}
      <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1.5s text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
        This page is under construction, or it may not exist at all!
      </p>

      {/* Pulse Animation with Gradient Text */}
      <div className="animate__animated animate__pulse animate__infinite animate__delay-2s">
        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Keep Calm, we're working on it! 🚧🔨
        </p>
      </div>

      {/* Back Home Button with Animated Gradient and Bounce */}
      <div className="mt-8">
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg text-white font-bold text-xl hover:from-yellow-500 hover:to-red-500 transition-all animate__animated animate__bounceIn animate__delay-2.5s"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
