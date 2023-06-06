
// import React, { useState } from 'react';
// import './login.css'; // Import the CSS file
// import { findBus } from '../service/travels.service';
// import {useHistory} from 'react-router-dom';
// const history = useHistory();


// const BusBookingPage = () => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [date, setDate] = useState('');

//   const handleSourceChange = (e) => {
//     setSource(e.target.value);
//   };

//   const handleDestinationChange = (e) => {
//     setDestination(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(source,destination,date)
//     findBus(source,destination,date).then(res=>{console.log(res.data)
//       history.push('/nav');
//     })
//     .catch(err=>console.log(err.message));
    
//   };

//   return (
//     <div className="bus-booking-container">
//       <div className="booking-details">
//       </div>
//       <h2>Bus Booking</h2>
//       <form className="bus-booking-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="source">Source:</label>
//           <input
//             type="text"
//             id="source"
//             value={source}
//             onChange={handleSourceChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="destination">Destination:</label>
//           <input
//             type="text"
//             id="destination"
//             value={destination}
//             onChange={handleDestinationChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             id="date"
//             value={date}
//             onChange={handleDateChange}
//           />
//         </div>
//         <button type="submit">Book Now</button>
//       </form>
//     </div>

//   );
// };

// export default BusBookingPage;


import React, { useState } from 'react';
import './login.css'; // Import the CSS file
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
    console.log(source, destination, date);
    findBus(source, destination, date)
      .then((res) => {
        localStorage.setItem('busDetail',JSON.stringify(res.data))
        navigate('/nav');
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="bus-booking-container">
      <div className="booking-details"></div>
      <h2>Bus Booking</h2>
      <form className="bus-booking-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={handleSourceChange}
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <div>
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
  );
};

export default BusBookingPage;
