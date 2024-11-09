import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md transition-all ease-in-out duration-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-semibold transform transition-all duration-500 hover:scale-110">
          <Link to="/" className="text-white hover:text-gray-200 transition-colors duration-300">SizeChart</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8">
            <li className="transform transition-all duration-500 hover:scale-110">
              <Link to="/" className="text-white hover:text-gray-200 text-lg transition-colors duration-300">Home</Link>
            </li>
            <li className="transform transition-all duration-500 hover:scale-110">
              <Link to="/size-recommendation" className="text-white hover:text-gray-200 text-lg transition-colors duration-300">Size Recommendation</Link>
            </li>
            <li className="transform transition-all duration-500 hover:scale-110">
              <Link to="/admin-dashboard" className="text-white hover:text-gray-200 text-lg transition-colors duration-300">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
