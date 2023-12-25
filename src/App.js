import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Admin from './Admin'; // Make sure to import your AdminLogin component
import ContactForm from './Contact_form';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      
      <Route path="/" element={<Home />} />
          <Route path="/" element={<Home/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/Contact_form" element={<ContactForm/>}/>
     
      
      </Routes>
      </div>
    </Router>
  );
}

export default App;
