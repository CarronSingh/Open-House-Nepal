import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A202C] mb-8">
          Find Your Dream Home Today
        </h2>
        
        <button className="bg-[#00C4B4] hover:bg-[#00b3a3] text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 transform hover:scale-105 mb-12">
          Book Now
        </button>

        <div className="w-full max-w-5xl mx-auto relative">
           {/* Gradient overlay to blend image top with white background if needed, 
               but the design looks like a clean cut image. 
               We'll use a clean image with rounded corners or just full width. 
               The reference image shows the image cut cleanly. 
           */}
           <img 
            src="https://images.unsplash.com/photo-1516156008625-3a9d60da4804?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Family using tablet" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
