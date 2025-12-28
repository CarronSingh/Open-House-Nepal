
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-[500px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Open House Nepal</h1>
          <p className="text-gray-500 text-sm">Log in to AgentNet</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-gray-600 text-sm bg-white"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-gray-600 text-sm bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00C4B4] hover:bg-[#00b3a3] text-white font-medium py-3 rounded transition-colors duration-200"
          >
            login
          </button>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center cursor-pointer">
              <span>Remember Me</span>
            </label>
            <Link to="/forgot-password" className="text-[#00C4B4] hover:underline">
              Forget Password?
            </Link>
          </div>

          <div className="pt-2 text-sm text-gray-500">
            Don't have an account? <Link to="/signup" className="text-[#00C4B4] hover:underline">Sign Up</Link>
          </div>
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

export default Login;
