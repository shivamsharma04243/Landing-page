import React , { useState, useEffect } from 'react';

import './Fonts.css';

const Admin = (props) => {
  const [user, setUser] = useState({
     heading: '',
    paragraph: '',
    heading1: '',
    paragraph1:'',
  });
  const [fetchedData, setFetchedData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Added state for login
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  useEffect(() => {
    // Fetch data from Firebase when the component mounts
    fetchDataFromFirebase().then((data) => {
      setFetchedData(data);
    });
  }, []);
  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { heading, paragraph, heading1, paragraph1 } = user;

    if (heading && paragraph && heading1 && paragraph1 ) {
      const res = await fetch("https://admin-ca0ed-default-rtdb.firebaseio.com/property-deal.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          heading,
          paragraph,
          heading1,
          paragraph1,
          link: props.link, // Include the link prop value in the body
        }),
      });

      if (res) {
        setUser({
          heading: '',
          paragraph: '',
          heading1: '',
          paragraph1:'',
          
        });

        alert('Thank you for your submission');
      }
    } else {
      alert('Please fill in the data');
    }
  };

 
  const fetchDataFromFirebase = async () => {
    try {
      const response = await fetch("https://admin-ca0ed-default-rtdb.firebaseio.com/property-deal.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      return null;
    }
  };
  
  const handleLogin = () => {
    if (userId === 'hub@123' && password === '123456789') {
      setLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (!loggedIn) {
    return (
      <div className="d-flex flex-column vh-100 align-items-center justify-content-center bg-dark">
        <div className="bg-light p-5 shadow-lg" style={{ borderRadius: '10px' }}>
          <h2>Admin Login</h2>
          <br></br> 
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <br></br> <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <br></br> <br></br>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
          {loginError && <p className="text-danger mt-2">Admin Not Found. Please try again.</p>}
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex flex-column vh-100">
      <div className="flex-grow-1 container-fluid">
        <div className="row p-5 shadow-lg" style={{ backgroundColor: 'aliceblue', borderRadius: '10px' }}>
          <div className="col">
            <h2 style={{ fontFamily: 'Merriweather, sans-serif' }}>Admin Panel</h2>
            <h2 className="bg-dark text-white p-3" style={{ borderRadius: '10px' }}>
              Here the section to update the details
            </h2>

            <form  method="POST">
              <p style={{ fontFamily: 'Merriweather, sans-serif' }}>Property Details With Image section</p>
              <div className="form-group">
                <label htmlFor="heading">Heading:</label>
                <input
                  type="text"
                  className="form-control"
                  id="heading"
                  name="heading"
                  placeholder="Enter Heading"
                  value={user.heading}
            onChange={getUserData}
                  required
               
                />
              </div>

              <div className="form-group">
                <label htmlFor="paragraph">Paragraph:</label>
                <input
                  type="text"
                  className="form-control"
                  id="paragraph"
                  name="paragraph"
                  placeholder="Enter Paragraph"
                  value={user.paragraph}
            onChange={getUserData}
                  required
                 
                />
                
              </div>

              <div className="form-group">
                <label htmlFor="heading1">Heading 1:</label>
                <input
                  type="text"
                  className="form-control"
                  id="heading1"
                  name="heading1"
                  placeholder="Enter Heading"
                  value={user.heading1}
            onChange={getUserData}
                  required
                 
                />
                
              </div>


              <div className="form-group">
                <label htmlFor="paragraph1">Paragraph 1:</label>
                <input
                  type="text"
                  className="form-control"
                  id="paragraph1"
                  name="paragraph1"
                  placeholder="Enter Paragraph"
                  value={user.paragraph1}
            onChange={getUserData}
                  required
                 
                />
                
              </div>

              <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary bg-animation"
            onClick={postData}
            style={{ marginTop: '10px' }}
          >
            Submit Now
          </button>
        </div>

             

             
            </form>
             {/* Display the fetched data */}
    {fetchedData && Object.keys(fetchedData).map((key) => (
      <div key={key}>
        <h3>Heading: {fetchedData[key].heading}</h3>
        <p>Paragraph: {fetchedData[key].paragraph}</p>
        {/* You can add more elements to display other data properties */}
      </div>
    ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
