import React, { useState } from 'react';
import Image1 from './m3m/m3m_72.jpg';
import Image2 from './m3m/m3m_72.jpg';
import Image3 from './m3m/m3m_72.jpg';
import ContactForm from './Contact_form';
import './Fonts.css';

const NextPage_2 = () => {
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
        <h1>Commercial Projects</h1>
      <div className="row">
          <div className="col-md-4 ">
            <img src={Image1} alt="M3M_1" className="img-fluid" style={{ marginBottom: '10px'}} />
          </div>
          <div className="col-md-4">
            <img src={Image2} alt="M3M_2" className="img-fluid"style={{ marginBottom: '10px'}} />
          </div>
          <div className="col-md-4">
            <img src={Image3} alt="M3M_3" className="img-fluid"style={{ marginBottom: '10px'}} />
          </div>
        </div>
     

        {/* Apply styles to the button */}
        <div className="col-md d-flex justify-content-center"> {/* Adjust the width by changing the col-md-6 value */}
          <button
            type="button"
            className="btn btn-primary btn-lg  bg-animation" // Adjust the size using btn-lg, btn-sm, etc.
            style={{ marginTop: '20px' }} // Add padding top
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleButtonClick}
          >
            Schedule Free Site Visit
          </button>
        </div>

        <div className={`modal ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">M3M The Line</h5>
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
    </div>
  </div>
  );
};

export default NextPage_2;
