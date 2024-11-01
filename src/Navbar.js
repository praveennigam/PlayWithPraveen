import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 fixed top-0 w-full shadow-lg p-4 flex justify-between items-center z-10">
      <div className="flex items-center">
        <Link to="/" className="flex items-center text-white hover:text-yellow-400 transition duration-300 mr-4">
          <FaHome className="text-yellow-400 hover:text-red-400 text-2xl mr-1 transform transition-transform duration-300 hover:scale-110" /> {/* Colorful Home icon */}
        </Link>
        <Link to="/" className="text-2xl font-bold transform transition-transform duration-300 hover:scale-105">
          Boost Your Brain
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/contact" className="flex items-center text-white hover:text-yellow-400 transition duration-300 text-lg">
          <FaEnvelope className="mr-2 text-yellow-400 hover:text-red-400 animate-pulse text-2xl" />
          <span className="hidden md:inline">Contact Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
