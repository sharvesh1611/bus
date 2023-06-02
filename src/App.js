// import React from 'react';
// import BusBookingPage from './booking/login';
// import MyTable from './navigation/nav';

// const App = () => {
//   return (
//     // <nav>
//     //       <ul>
//     //          <li><a href="/">Home</a></li>
//     //         <li><a href="/bookings">Bookings</a></li>
//     //         <li><a href="/transactions">Transactions</a></li>
//     //          <li><a href="/about">About</a></li>
//     //        </ul>
//     //        <h1>My Bus Booking App</h1>
//     //         <BusBookingPage />
//     //     </nav>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={BusBookingPage} />
//         <Route exact path="/nav" component={MyTable} />
//         <Redirect to="/" />
//       </Switch>
//     </Router> 
//   );
// };
// {/* <Router>
//       <Switch>
//         <Route exact path="/form" component={FormComponent} />
//         <Route exact path="/other-component" component={OtherComponent} />
//         <Redirect to="/form" />
//       </Switch>
//     </Router> */}



// export default App;


import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import BusBookingPage from './booking/login';
// import MyTable from './navigation/nav';
import PassengerForm from './seatSelect/seatDetail';
import SeatSelectionPage from './seatSelect/seatDetail';

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route  path="/" element={<BusBookingPage />} />
        <Route path="/nav" element={<MyTable />} />
    </Routes> */}
      <h1>Bus Booking App</h1>
      <SeatSelectionPage />
    </div>
    
  );
};

export default App;
