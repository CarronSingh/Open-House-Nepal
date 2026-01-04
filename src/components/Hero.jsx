import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl">
          We Have Over Million Properties For You.
        </p>

        {/* Search Tabs */}
        <div className="bg-white/10 backdrop-blur-md p-1 rounded-t-lg inline-flex mb-0">
          <button className="bg-[#00C4B4] text-white px-8 py-2 rounded-md font-medium text-lg">Buy</button>
          <button className="bg-white text-gray-800 px-8 py-2 rounded-md font-medium text-lg ml-2 hover:bg-gray-100">Rent</button>
          <button className="bg-white text-gray-800 px-8 py-2 rounded-md font-medium text-lg ml-2 hover:bg-gray-100">Sell</button>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white p-2 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full relative">
                <input 
                    type="text" 
                    placeholder="Search for a property" 
                    className="w-full pl-4 pr-4 py-3 text-gray-700 focus:outline-none text-lg rounded-md"
                />
            </div>
            <button className="w-full md:w-auto bg-[#00C4B4] hover:bg-[#00b3a3] text-white px-10 py-3 rounded-md font-bold text-lg transition-transform transform hover:scale-105 shadow-md">
                Search
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
