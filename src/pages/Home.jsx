import React from 'react';
import PropertyCard from '../components/PropertyCard';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const Home = () => {
  const properties = [
    {
      id: 1,
      tag: 'FOR SALE',
      title: 'Resort Valley Ocs',
      price: 7000,
      address: '778 Panama City, FL',
      beds: 4,
      baths: 3,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1600596542815-2a4fe0413238?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agentName: 'Carron Singh',
      agentImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      postedTime: '1 months ago',
    },
    {
      id: 2,
      tag: 'FOR SALE',
      title: 'Brand New Appartments',
      price: 7000,
      address: '778 Panama City, FL',
      beds: 4,
      baths: 3,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agentName: 'Carron Singh',
      agentImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      postedTime: '1 months ago',
    },
    {
      id: 3,
      tag: 'FOR SALE',
      title: 'Luxurious Villa',
      price: 7000,
      address: '778 Panama City, FL',
      beds: 4,
      baths: 3,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agentName: 'Carron Singh',
      agentImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      postedTime: '1 months ago',
    },
     {
      id: 4,
      tag: 'FOR SALE',
      title: 'Diamond Manco Apartment',
      price: 7000,
      address: '778 Panama City, FL',
      beds: 4,
      baths: 3,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agentName: 'Carron Singh',
      agentImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      postedTime: '1 months ago',
    },
    {
      id: 5,
      tag: 'FOR SALE',
      title: 'Resort Valley Ocs',
      price: 7000,
      address: '778 Panama City, FL',
      beds: 4,
      baths: 3,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agentName: 'Carron Singh',
      agentImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      postedTime: '1 months ago',
    },
    {
      id: 6,
      tag: 'FOR SALE',
      title: 'Spaceious 2 Story Bunglow',
      price: 7000,
      address: '778 Panama City, FL',
      beds: 4,
      baths: 3,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agentName: 'Carron Singh',
      agentImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      postedTime: '1 months ago',
    },
  ];

  const locations = [
      { id: 1, city: 'San Francisco, California', count: '1 property', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 2, city: 'San Francisco, California', count: '1 property', image: 'https://images.unsplash.com/photo-1449824913929-2b3a3e547196?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 3, city: 'San Francisco, California', count: '1 property', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 4, city: 'San Francisco, California', count: '1 property', image: 'https://images.unsplash.com/photo-1540932296235-d84c01570778?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 5, city: 'San Francisco, California', count: '1 property', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 6, city: 'San Francisco, California', count: '1 property', image: 'https://images.unsplash.com/photo-1484154218962-a1c00207099b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      <Hero />
      
      {/* Latest Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1A202C] sm:text-4xl mb-6">
                LATEST PROPERTY LISTINGS
            </h2>
            <div className="w-24 h-1.5 bg-[#00C4B4] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
                <PropertyCard
                key={property.id}
                {...property}
                />
            ))}
            </div>
            
            <div className="mt-16 text-center">
                <button className="bg-[#00C4B4] hover:bg-[#00b3a3] text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                    Load More
                </button>
            </div>
        </div>
      </section>

      {/* Find By Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-[#1A202C] sm:text-4xl mb-6">
                    Find By Locations
                </h2>
                {/* <div className="w-24 h-1.5 bg-[#00C4B4] mx-auto rounded-full"></div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locations.map((loc) => (
                    <div key={loc.id} className="relative h-80 rounded-lg overflow-hidden group cursor-pointer shadow-md">
                        <img 
                            src={loc.image} 
                            alt={loc.city} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute bottom-6 left-6 text-white text-left">
                            <h3 className="text-xl font-bold mb-1">{loc.city}</h3>
                            <p className="text-sm opacity-90">{loc.count}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-[#1A202C] sm:text-4xl">
                        Why Choose Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-20 h-20 mx-auto bg-[#E6F9F8] rounded-full flex items-center justify-center mb-6 text-[#00C4B4]">
                             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Trusted By Thousands</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        </p>
                    </div>

                     {/* Feature 2 */}
                     <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-20 h-20 mx-auto bg-[#E6F9F8] rounded-full flex items-center justify-center mb-6 text-[#00C4B4]">
                             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Wide Range Of Properties</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        </p>
                    </div>

                     {/* Feature 3 */}
                     <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-20 h-20 mx-auto bg-[#E6F9F8] rounded-full flex items-center justify-center mb-6 text-[#00C4B4]">
                             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Finance Made Easy</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        </p>
                    </div>

                     {/* Feature 4 */}
                     <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-20 h-20 mx-auto bg-[#E6F9F8] rounded-full flex items-center justify-center mb-6 text-[#00C4B4]">
                             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Life Time Assistance</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        </p>
                    </div>
                </div>
          </div>
      </section>

     <CTA />

      <Footer />
    </div>
  );
};

export default Home;
