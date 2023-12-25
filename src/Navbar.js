import React from 'react';
import { Link } from 'react-router-dom';
import './animations.css';
import logo from './m3mlogo.webp';
import phoneIcon from './m3m/phone.svg'; // Replace with the actual path to your phone icon

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ borderRadius: "2px", backgroundColor: 'aliceblue', padding: '0' }}>

      <Link className="navbar-brand" to="/" style={{ marginRight: 'auto', paddingLeft: '10px' }}>
        <img src={logo} alt="Logo" height="50" />
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item" style={{ paddingRight: '10px' }}>
          {/* Place the phone icon in front of the phone number */}
          
          <p style={{ fontSize: '18px', fontFamily: 'sans-serif' ,marginRight: '25px',marginTop:'10px'}}>
          <img src={phoneIcon} alt="Phone" height="30" />
            <strong ><a className='text-reset text-decoration-none' href='tel:9811628680'>Phone: 9811628680</a></strong>
          </p>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
