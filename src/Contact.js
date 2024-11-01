import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-primary to-secondary">
      <div className="rounded-lg shadow-lg p-8 max-w-sm w-full text-white bg-blue-700"> {/* Increased padding */}
        <h2 className="text-2xl mb-3 text-center font-semibold">Contact Us</h2>

        <img
          src="/me.jpeg"
          alt="Contact Us"
          className="mb-4 rounded-full w-20 h-20 mx-auto"
        />

        <div className="p-3 mb-4 text-center">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-md font-medium">
            I'm passionate about learning and sharing knowledge. Let's connect and grow together!
          </p>
        </div>

        <div className="text-center mb-4">
          <p className="text-md">Get in Touch:</p>
          <a
            href="https://impraveen.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-yellow-400 underline hover:text-yellow-300"
          >
            <FaEnvelope className="mr-2 text-yellow-300" />
            impraveen.onrender.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
