import React, { useState } from 'react';
import './animations.css';
import "./contactform.css";

const ContactForm = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = user;

    if (name && email && phone && message) {
      const res = await fetch("https://propertydealhub-9d101-default-rtdb.firebaseio.com/propertydealhub.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          link: props.link, // Include the link prop value in the body
        }),
      });

      if (res) {
        setUser({
          name: '',
          email: '',
          phone: '',
          message: '',
        });

        alert('Thank you for your submission');
      }
    } else {
      alert('Please fill in the data');
    }
  };

  return (
    <div className="container rounded" >
      <form className="contact-form" method="POST">
        <h2 className="title">More Information</h2>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className=""
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={user.name}
            onChange={getUserData}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className=""
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={user.email}
            onChange={getUserData}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            className=""
            id="phone"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={user.phone}
            onChange={getUserData}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className=""
            id="message"
            name="message"
            placeholder="Your Message"
            value={user.message}
            onChange={getUserData}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn  bg-animation"
            onClick={postData}
            style={{ marginTop: '10px' }}
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;