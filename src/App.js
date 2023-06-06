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


import { Routes, Route } from 'react-router-dom';

import BusBookingPage from './homePage/homePage';
import MyTable from './showAvailable buses/buses';
import AgentLogin from './agentLogin/agentLogin';
import Header from './header/header';
// const App = () => {
//   return (
//     <div className='app'>
//        <Header/>
//        <Routes>
//           <Route  path="/" element={<BusBookingPage />} />
//           <Route path="/nav" element={<MyTable />} />
//           <Route path='/agent' element={<AgentLogin/>}/>
//       </Routes>

// // import BusBookingPage from './homePage/homePage';
// // import MyTable from './navigation/nav';
// import Payment from './payment/payment';
// import Otp from './otp/otp';

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route  path="/" element={<BusBookingPage />} />
        <Route path="/nav" element={<MyTable />} />
<<<<<<< HEAD
    </Routes> */}
      <h1>Bus Booking App</h1>
      <SeatSelectionPage />

   {/* </div> </Routes>  */}
     {/* <Payment/>  */}
     <Routes>
      <Route path='/payment' element={<Payment />}></Route>
        <Route  path="/otp" element={<Otp />} />
    </Routes> 

    </div>
    
  );
};

export default App;
