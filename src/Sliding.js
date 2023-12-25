import React, { useState, useEffect } from 'react';
import './Fonts.css';

import Vasudev from './m3m/vasudev.jpg';
import Entering_noida from './m3m/m3m_entering_noida_page-0001.jpg';
import Epitome from './m3m/m3m_epitome_luxury_page-0001.jpg';
import faces from './m3m/m3m_facets_page-0001.jpg';
import google_location from './m3m/m3m_google_location_page-0001.jpg';
import landmark from './m3m/m3m_landmark_page-0001.jpg';

const NextPage = () => {
  const images = [Vasudev, Entering_noida, Epitome, faces, google_location, landmark];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex, images.length]);

  const containerHeight = '100vh'; // Set your desired fixed height
  const paddingTopBottom = '20px'; // Set your desired padding

  return (
    <div className="d-flex flex-column">
      <div className="flex-grow-1 container-fluid">
        <div
          className="row p-1 shadow-lg"
          style={{
            marginTop: paddingTopBottom,
            marginBottom: paddingTopBottom,
            backgroundColor: 'aliceblue',
            borderRadius: '10px',
            position: 'relative',
            overflow: 'hidden',
            height: containerHeight,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Alphathum"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                left: `${(index - currentIndex) * 100}%`,
                transition: 'left 1s ease-in-out',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextPage;
