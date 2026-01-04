import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1828] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Info */}
          <div>
            <div className="flex items-center mb-6">
                 {/* Placeholder logo matching the circular one in the image */}
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-2">
                     <img src="https://via.placeholder.com/40" alt="Logo" className="w-full h-full rounded-full object-cover" /> 
                </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0A1828] flex items-center justify-center hover:bg-[#00C4B4] hover:text-white transition-colors">
                <i className="fab fa-facebook-f font-bold">f</i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0A1828] flex items-center justify-center hover:bg-[#00C4B4] hover:text-white transition-colors">
                 <i className="fab fa-twitter font-bold">t</i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0A1828] flex items-center justify-center hover:bg-[#00C4B4] hover:text-white transition-colors">
                 <i className="fab fa-instagram font-bold">i</i>
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0A1828] flex items-center justify-center hover:bg-[#00C4B4] hover:text-white transition-colors">
                 <i className="fab fa-youtube font-bold">y</i>
              </a>
            </div>
          </div>

          {/* Offers */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Offers</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#00C4B4] transition-colors">Properties</a></li>
              <li><a href="#" className="hover:text-[#00C4B4] transition-colors">Agents</a></li>
              <li><a href="#" className="hover:text-[#00C4B4] transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-[#00C4B4] transition-colors">Clients Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Company</h3>
             <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#00C4B4] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#00C4B4] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#00C4B4] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#00C4B4] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Have a Questions?</h3>
             <ul className="space-y-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#00C4B4] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#00C4B4] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+2 392 3929 210</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#00C4B4] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>info@openhousenepal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-500">Copyright ©2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
