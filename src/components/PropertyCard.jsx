import React from 'react';

const PropertyCard = ({ image, title, price, address, beds, baths, sqft, agentName, agentImage, postedTime, tag }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group cursor-pointer h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {tag && (
          <div className="absolute top-4 left-4 bg-[#00C4B4] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
            {tag}
          </div>
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate" title={title}>{title}</h3>
        <p className="text-[#00C4B4] text-xl font-bold mb-3">Rs. {price.toLocaleString()}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg className="w-4 h-4 mr-1 text-[#00C4B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span className="truncate">{address}</span>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-center space-x-4 text-gray-600 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center">
               <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>

        {(agentName || postedTime) && (
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
             {agentName && (
                <div className="flex items-center">
                    {agentImage ? (
                        <img src={agentImage} alt={agentName} className="w-8 h-8 rounded-full object-cover mr-2" />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs font-bold text-gray-500">
                            {agentName.charAt(0)}
                        </div>
                    )}
                    <span className="text-sm font-medium text-gray-700">{agentName}</span>
                </div>
             )}
             {postedTime && (
                 <div className="flex items-center text-xs text-gray-400">
                     <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                     {postedTime}
                 </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
