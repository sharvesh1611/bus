// import React from 'react';
// import LoginPage from './component/login';

// const App = () => {
//   return (
//     <div>
//       <h1>My App</h1>
//       <LoginPage />
//     </div>
//   );
// };

// export default App;
import React from 'react';
import BusBookingPage from './component/login';

const App = () => {
  return (
    <nav>
          <ul>
             <li><a href="/">Home</a></li>
            <li><a href="/bookings">Bookings</a></li>
            <li><a href="/transactions">Transactions</a></li>
             <li><a href="/about">About</a></li>
           </ul>
           <h1>My Bus Booking App</h1>
            <BusBookingPage />
        </nav>
  );
};

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/bookings">Bookings</a></li>
//         <li><a href="/transactions">Transactions</a></li>
//         <li><a href="/about">About</a></li>
//       </ul>
//     </nav>
//   );
// };

export default App;


