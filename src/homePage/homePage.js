
import React, { useState } from 'react';
import './homePage.css'; 
import { findBus } from '../service/travels.service';
import { useNavigate } from 'react-router-dom';

const BusBookingPage = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findBus(source, destination, date)
      .then((res) => {
        localStorage.setItem('busDetail',JSON.stringify(res.data))
        navigate('nav');
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="bus-booking-container">
      <div className="booking-details">
      <h2>Bus Booking</h2>
      <form className="bus-booking-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={handleSourceChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
      </div>
    </div>
  );
};

export default BusBookingPage;
