import React from 'react';

import './animations.css';
import './Fonts.css';

import NextPage from './NextPage';
import NextPage_1 from './NextPage_1';
import NextPage_2 from './NextPage_2';
import Whatsapp from './whats-app-logo.png'
import Navbar from './Navbar';
import Sliding from './Sliding';
import Footer from './Footer';
const Home = () => {
  
  
  const openWhatsApp = () => {
    window.open('https://wa.me/9811628680', '_blank');
  };
 
  return (
    <div className=' pb-5 background'>
      <div >
        <Navbar />
        
        <div className="container mt-5">
          <NextPage />
        </div>

        <div className="container mt-5">
          <NextPage_1 />
        </div>
        <div className="container mt-5">
          <NextPage_2 />
        </div>
        <div className="container mt-5">
          <Sliding />
        </div>
        <div className="container mt-5">
          <Footer />
        </div>

       



       
      </div>
 {/* WhatsApp logo in the right bottom corner */}
 <div className="whatsapp-logo bg-whats-animation" onClick={openWhatsApp}>
        <img
         src={Whatsapp}// replace with your WhatsApp logo image
          alt="WhatsApp Logo"
          className="whatsapp-logo-img" // Apply a class for styling
        />
      </div>
    </div>
  );
};

export default Home;