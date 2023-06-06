import './app.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BusBookingPage from './homePage/homePage';
import MyTable from './showAvailable buses/buses';
import AgentLogin from './agentLogin/agentLogin';
import Header from './header/header';
const App = () => {
  return (
    <div className='app'>
       <Header/>
       <Routes>
          <Route  path="/" element={<BusBookingPage />} />
          <Route path="/nav" element={<MyTable />} />
          <Route path='/agent' element={<AgentLogin/>}/>
      </Routes>
    </div>
      
  );
};

export default App;
