import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <nav className="flex space-x-6 mb-4">
          {/* Social Media Links with Animations */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transform transition-all duration-300 hover:scale-125">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transform transition-all duration-300 hover:scale-125">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transform transition-all duration-300 hover:scale-125">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transform transition-all duration-300 hover:scale-125">
            <FaGithub size={24} />
          </a>
          <a href="mailto:your-email@example.com" className="text-white hover:text-gray-400 transform transition-all duration-300 hover:scale-125">
            <FaEnvelope size={24} />
          </a>
        </nav>

        {/* Contact Info */}
        <p className="text-center text-sm md:text-base">
          Contact us via email or follow us on social media!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
