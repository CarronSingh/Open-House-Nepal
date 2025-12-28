
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    phoneNumber2: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Signup:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-[500px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Open House Nepal</h1>
          <p className="text-gray-500 text-sm">Sign Up to AgentNet</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-gray-600 text-sm bg-white"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-gray-600 text-sm bg-white"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-gray-600 text-sm bg-white"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phoneNumber2"
              value={formData.phoneNumber2}
              onChange={handleChange}
              placeholder="Phone Number 2 (Optional)"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-gray-600 text-sm bg-white"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-gray-600 text-sm bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00C4B4] hover:bg-[#00b3a3] text-white font-medium py-3 rounded transition-colors duration-200 mt-2"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            By continuing, you agree to OHN's <a href="#" className="text-[#00C4B4]">Terms and Conditions</a> & <a href="#" className="text-[#00C4B4]">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
