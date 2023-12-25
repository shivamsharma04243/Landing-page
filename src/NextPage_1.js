import React, { useState } from 'react';
import Image from './m3m/m3m_72.jpg';
import ContactForm from './Contact_form';
import './Fonts.css';


const NextPage_1 = () => {

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex flex-column">
      <div className="flex-grow-1 container-fluid">
        <div className="row p-5 shadow-lg" style={{ marginTop: 'auto', backgroundColor: "aliceblue", borderRadius: "10px" }}>
          <div className="col-md-6">
           

            <h2 style={{ marginTop: '50px', fontFamily: 'Raleway, sans-serif', color: '#1e3a8a' }}>Studio Apartments & Premium Retail Shops</h2>
            <p className="strong" style={{ marginTop: 'auto', color: '#1e3a8a' }}>
              
              <strong style={{ color: '#32CD32' }}>Sector-72, Central Noida</strong><br />
            </p>
           
              <ul style={{ fontFamily: 'Lato, sans-serif', textAlign: 'left' }}>
                <li>Fully Furnished Studio Apartments & Premium Retail Shops</li>
                <li>Double Height Shops up to 3000 Sq.ft.</li>
                <li>Studio Apartments up to 750 Sq.ft.</li>
                <li>Hi-Street Retail & Food Court Space Starting 450 sq.ft.</li>
                <li>Assured Rental & Lease Guarantee</li>
                <li style={{ color: '#32CD32' }}><strong>Avail The Inaugural Offers</strong></li>
                <li style={{ color: '#32CD32' }}><strong>Investment Starts From ₹65 lacs*</strong></li>
              </ul>
          
            <button
              type="button"
              className="btn btn-primary bg-animation"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ marginBottom: '10px' }} // Add padding top
              onClick={handleButtonClick}
            >
              Get Inaugural Offers
            </button>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Merriweather, sans-serif', color: '#1e3a8a' }}>M3M The Line</h2>
            <p style={{ fontFamily: 'Merriweather, sans-serif', color: '#1e3a8a' }}>
              M3M Sector 72 Noida
            </p>
            <img
              src={Image}
              alt="m3m"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      <div className={`modal ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">M3M</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
            </div>
            <div className="modal-body">
              <ContactForm link="link1" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextPage_1;
