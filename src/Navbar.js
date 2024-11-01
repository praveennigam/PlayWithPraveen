import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaFacebook, FaWhatsapp, FaPhoneAlt, FaInstagram, FaYoutube, FaTelegram, FaBell } from 'react-icons/fa'; // Import the new icon

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 bg-gradient-to-r from-purple-800 to-blue-900 border-b border-neutral-700 shadow-lg">
      <div className="flex items-center">
        <img
          src={`${process.env.PUBLIC_URL}/logoic.jpeg`}
          alt="Logo"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-100"
          onClick={() => navigate("/")}
        />
        <Link to="/" className="hidden sm:block text-2xl font-bold text-white ml-4 hover:text-yellow-400 transition duration-300">
          Boost Your Brain
        </Link>
      </div>

      <div className="flex items-center gap-4 text-xl opacity-80">
        <Link to="/contact" className="flex items-center text-white hover:text-yellow-400 transition duration-300 text-lg">
          <FaBell className="mr-2 text-yellow-400 hover:text-red-400 animate-blink text-xl sm:text-2xl" /> {/* Replaced with a new icon */}
        </Link>
        <a
          href="https://www.linkedin.com/in/impraveen1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/share/7EXCGjcN6jhvLf4g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600 transition duration-300"
        >
          <FaFacebook className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://wa.me/+919109481480"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition duration-300"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </a>
        <a
          href="tel:+919109481480"
          className="text-blue-200 hover:text-blue-100 transition duration-300"
        >
          <FaPhoneAlt className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/_its_praveen_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-800 hover:text-pink-600 transition duration-300"
        >
          <FaInstagram className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://youtube.com/@thewebseller?si=lTc45AaTSu1hvAb3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-500 transition duration-300"
        >
          <FaYoutube className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://t.me/techshiksha1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FaTelegram className="text-xl sm:text-2xl" />
        </a>
      </div>

      {/* Add CSS for the animation */}
      <style jsx>{`
        @keyframes blink {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
