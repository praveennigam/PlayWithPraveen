import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaGraduationCap, FaCode, FaClipboardCheck, FaStar, FaNodeJs } from 'react-icons/fa';  // Import FaNodeJs here
import { SiReact, SiMongodb, SiCss3 } from 'react-icons/si'; // Keep other icons as they are

const Category = ({ startQuiz }) => {
  const navigate = useNavigate();

  const categories = [
    { name: "UPSC", icon: <FaGraduationCap className="text-yellow-400" /> },
    { name: "Patwari", icon: <FaClipboardCheck className="text-blue-400" /> },
    { name: "Samvida", icon: <FaBookOpen className="text-green-400" /> },
    { name: "CLAT", icon: <FaStar className="text-red-400" /> },
    { name: "MPPSC", icon: <FaGraduationCap className="text-yellow-400" /> },
    { name: "JavaScript", icon: <FaCode className="text-purple-400" /> },
    { name: "Java", icon: <FaCode className="text-orange-400" /> },
    { name: "Python", icon: <FaCode className="text-blue-500" /> },
    { name: "C", icon: <FaCode className="text-cyan-400" /> },
    { name: "CPlus", icon: <FaCode className="text-green-500" /> },
    { name: "DotNet", icon: <FaCode className="text-red-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-500" /> },
    { name: "Node", icon: <FaNodeJs className="text-green-600" /> },  // Changed to FaNodeJs
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  ];

  const handleCategoryClick = (category) => {
    startQuiz(category);  // Pass the category name to start the quiz
    navigate('/quiz');    // Navigate to the quiz page
  };

  return (
    <div className="flex flex-wrap justify-center mt-6 p-4">
      {categories.map(({ name, icon }) => (
        <button
          key={name}
          onClick={() => handleCategoryClick(name)}
          className="m-2 w-full sm:w-1/3 md:w-1/4 p-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
          aria-label={`Start quiz for ${name}`}
        >
          <span className="mr-2 text-2xl">{icon}</span>
          <span className="text-center">{name}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
