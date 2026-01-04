import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
            <Link to="/" className="flex items-center">
                {/* Placeholder logo matching the circular one in the image */}
                <div className="w-10 h-10 rounded-full border-2 border-[#00C4B4] p-1 flex items-center justify-center overflow-hidden mr-2">
                     <img src="https://via.placeholder.com/40" alt="Logo" className="w-full h-full rounded-full object-cover" /> 
                     {/* Replace with actual logo if available */}
                </div>
                {/* <span className="font-bold text-xl text-gray-800">RealEstate</span> */}
            </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-[#00C4B4] transition-colors">Buy</Link>
          <Link to="/" className="hover:text-[#00C4B4] transition-colors">Sale</Link>
          <Link to="/" className="hover:text-[#00C4B4] transition-colors">Rent</Link>
          <Link to="/" className="hover:text-[#00C4B4] transition-colors">New Projects</Link>
          <Link to="/" className="hover:text-[#00C4B4] transition-colors">Mortgages</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/add-listing" className="bg-[#00C4B4] hover:bg-[#00b3a3] text-white px-5 py-2 rounded-md font-medium transition-colors shadow-md">
            Add Listing
          </Link>
          <Link to="/login" className="border border-[#00C4B4] text-[#00C4B4] hover:bg-[#00C4B4] hover:text-white px-5 py-2 rounded-md font-medium transition-colors">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-[#00C4B4] focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          <Link to="/" className="text-gray-600 hover:text-[#00C4B4] font-medium">Buy</Link>
          <Link to="/" className="text-gray-600 hover:text-[#00C4B4] font-medium">Sale</Link>
          <Link to="/" className="text-gray-600 hover:text-[#00C4B4] font-medium">Rent</Link>
          <Link to="/" className="text-gray-600 hover:text-[#00C4B4] font-medium">New Projects</Link>
          <Link to="/" className="text-gray-600 hover:text-[#00C4B4] font-medium">Mortgages</Link>
          <div className="border-t border-gray-100 pt-4 flex flex-col space-y-3">
            <Link to="/add-listing" className="bg-[#00C4B4] text-white text-center py-2 rounded-md font-medium">
              Add Listing
            </Link>
            <Link to="/login" className="border border-[#00C4B4] text-[#00C4B4] text-center py-2 rounded-md font-medium">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
