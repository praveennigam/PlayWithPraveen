import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPlay, FaFilm } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      src: "https://www.youtube.com/embed/6VLaYrjPJb8?si=OH6R4IHtnYKi0f3N",
      description: "React Overview: Essential concepts for beginners and developers.",
    },
    {
      src: "https://www.youtube.com/embed/TdVSnIQt83E?si=Cfdjikhkl-5K-W35",
      description: "Advanced Techniques: Deep dive into hooks and performance optimization.",
    },
    {
      src: "https://www.youtube.com/embed/jCXCIA7mGXM?si=ipDEMKiiRPZS3UVn",
      description: "Scalable Applications: Tips for efficient backend integration.",
    },
    {
      src: "https://www.youtube.com/embed/gQXmU9S3Kj8?si=_fjsYgkycKS7nzVa",
      description: "MERN Application: Summary of full-stack setup and deployment.",
    },
  ];

  const handlePlayClick = (src) => {
    setPlayingVideo(`${src}&autoplay=1`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto max-w-full p-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-bold mb-12 mt-12 text-transparent bg-gradient-to-r from-green-500 to-red-500 bg-clip-text "
        >
          Contact <span className="ml-2 text-4xl  text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text  ">Me</span>
        </motion.h1>

        <div className="flex items-center justify-center mb-8">
          <div className="rounded-lg shadow-lg p-2 max-w-md w-full text-white">
            <img
              src="/me.jpeg"
              alt="Contact Us"
              className="mb-4 rounded-lg  h-56 mx-auto animate-scale"
            />
            <div className="p-3 mb-4 text-center">
              <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-300 to-orange-700 bg-clip-text">About Me</h3>
              <p className="text-lg font-medium tracking-tight text-transparent bg-gradient-to-r from-blue-900 to-orange-900 bg-clip-text">
                I'm passionate about learning and sharing knowledge. Let's connect and grow together!
              </p>
            </div>
            <div className="text-center mb-4">
              <p className="text-2xl py-2 text-lg text-transparent bg-gradient-to-r from-purple-300 to-blue-700 bg-clip-text leading-6 hover:underline">Get in Touch:</p>
              <a
                href="https://impraveen.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center link-gradient underline text-xl font-bold transition-colors duration-300 ease-in-out animate-blink"
              >
                <FaEnvelope className="mr-2 text-blue-700 text-2xl " />
                <span className="text-2xl py-4 text-lg text-transparent bg-gradient-to-r from-purple-300 to-green-500 bg-clip-text leading-6 hover:underline">Visit: ImPraveen.com</span>
              </a>
              <p className="text-2xl py-2 text-lg text-transparent bg-gradient-to-r from-purple-300 to-blue-700 bg-clip-text leading-6 hover:underline font-bold">or</p>
              <a
                href="https://code-tech.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center link-gradient underline text-xl font-bold transition-colors duration-300 ease-in-out animate-blink "
              >
                <a href="https://code-tech.onrender.com" className="flex items-center justify-center space-x-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/logoic.jpeg`}
                    alt="Logo"
                    className="h-10 w-10 rounded-full border-none shadow-lg"
                  />
                  <span className="text-lg text-transparent bg-gradient-to-r from-purple-700 to-orange-700 bg-clip-text leading-6 hover:underline">
                    Visit: <span className="font-bold underline hover:underline">Thewebseller</span>
                  </span>
                </a>
              </a>
            </div>
          </div>
        </div>

        <div className="video-container flex flex-wrap justify-center gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="video-card flex flex-col"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="youtube-card relative">
                {playingVideo === `${video.src}&autoplay=1` ? (
                  <iframe
                    className="video-iframe"
                    src={playingVideo}
                    title={`YouTube Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="thumbnail  bg-gradient-to-r from-silver-900 to-blue-700 ">
                    <button className="play-button" onClick={() => handlePlayClick(video.src)}>
                      <FaPlay className="text-white text-2xl" />
                    </button>
                  </div>
                )}
                <div className="text-card   bg-gradient-to-r from-purple-300 to-blue-700 ">
                  <motion.div className="flex items-center text-lg text-transparent bg-gradient-to-r from-blue-700 to-orange-900 bg-clip-text font-bold">
                    <span>{video.description}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="footer mt-8">

        </div>
      </div>
    </div>
  );
};

export default Contact;
