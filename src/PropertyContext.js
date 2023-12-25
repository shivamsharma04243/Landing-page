// PropertyContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetchDataFromFirebase().then((data) => {
      setFetchedData(data);
    });
  }, []);

  const fetchDataFromFirebase = async () => {
    try {
      const response = await fetch("https://property-deal-dadb7-default-rtdb.firebaseio.com/property-deal.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      return null;
    }
  };

  return (
    <PropertyContext.Provider value={{ fetchedData }}>
      {children}
    </PropertyContext.Provider>
  );
};

const useProperty = () => {
  return useContext(PropertyContext);
};

export { PropertyProvider, useProperty };
