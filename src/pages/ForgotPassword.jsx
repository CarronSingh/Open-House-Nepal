
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic
    console.log('Forgot Password:', { email });
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-[500px]">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Forgot Password?</h1>
          <p className="text-gray-500 text-sm px-4 leading-relaxed">
            Please enter your email address and we will send you an email to update your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-gray-600 text-sm bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00C4B4] hover:bg-[#00b3a3] text-white font-medium py-3 rounded transition-colors duration-200"
          >
            Submit
          </button>

          <div className="text-center">
            <Link to="/login" className="inline-flex items-center text-[#00C4B4] text-sm hover:underline font-medium">
              <ChevronLeft size={16} className="mr-1" />
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
