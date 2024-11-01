import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 fixed top-0 w-full shadow-lg p-4 flex justify-between items-center z-10">
      <h1 className="text-2xl font-bold transform transition-transform duration-300 hover:scale-105">
        Boost Your Brain
      </h1>
      <Link to="/contact" className="flex items-center text-white hover:text-yellow-400 transition duration-300 text-lg">
        <FaEnvelope className="mr-2 text-yellow-400 hover:text-red-400 animate-pulse" />
        <span className="hidden md:inline">Contact Us</span> {/* Show text only on medium and larger screens */}
      </Link>
    </nav>
  );
};

export default Navbar;
