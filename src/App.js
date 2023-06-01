import './app.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BusBookingPage from './homePage/homePage';
import MyTable from './showAvailable buses/buses';
import Header from './header/header';
const App = () => {
  return (
    <div className='app'>
       <Header/>
       <Routes>
          <Route  path="/" element={<BusBookingPage />} />
          <Route path="/nav" element={<MyTable />} />
      </Routes>
    </div>
      
  );
};

export default App;
