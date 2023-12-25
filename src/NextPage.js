import React, { useState } from 'react';
import './Fonts.css';
import Video from './m3m_video.mp4';
import ContactForm from './Contact_form';

const NextPage = () => {
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
          {/* Your other content goes here */}
          <video width="100" height="auto" controls >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Apply styles to the button */}
          <div className="col-md d-flex justify-content-center"> {/* Adjust the width by changing the col-md-6 value */}
            <button
              type="button"
              className="btn btn-primary btn-lg  bg-animation" // Adjust the size using btn-lg, btn-sm, etc.
              style={{ marginTop: '10px' }} // Add padding top
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleButtonClick}
            >
              Enquire Now
            </button>
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
      </div>
    </div>
  );
};

export default NextPage;
