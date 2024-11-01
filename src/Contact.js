import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Import an icon for contact

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 p-4">
      <div className="bg-blue-700 rounded-lg shadow-lg p-6 max-w-sm w-full text-white">
        <h2 className="text-2xl mb-3 text-center font-semibold">Contact Us</h2>
        
        <img 
          src="/me.jpeg" // Reference the image directly from the public folder
          alt="Contact Us"
          className="mb-4 rounded-full w-20 h-20 mx-auto" // Set fixed width and height
        />
        
        {/* About Me Section */}
        <div className="p-3 mb-4 text-center">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-md font-medium">
            I'm passionate about learning and sharing knowledge. Let's connect and grow together!
          </p>
        </div>
        
        {/* Get in Touch Section */}
        <div className="text-center mb-4">
          <p className="text-md">Get in Touch:</p>
          <a 
            href="https://impraveen.onrender.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center text-yellow-400 underline hover:text-yellow-300"
          >
            <FaEnvelope className="mr-2 text-yellow-300" /> {/* Colorful icon */}
            impraveen.onrender.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
