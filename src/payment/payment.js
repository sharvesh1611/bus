import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './payment.css';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('select');
  

  // function redir(event) {
  //   event.preventDefault();
  //   console.log('hii');
  //   window.location.href = 'http://172.16.0.14:3000';
  // }

  function togglePaymentOptions(event) {
    setPaymentMethod(event.target.value);
  }

  return (
    <div className="body">
      <div className="container">
        <h1>Payment Details</h1>
        <form>
          <div className="form-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select id="payment-method" onChange={togglePaymentOptions}>
            <option value="select">Select Payment Type</option>
              <option value="card">Debit or Credit Card</option>
              <option value="upi">UPI Payment</option>
              <option value="netbanking">Net Banking</option>
            </select>
          </div>
          <div id="card-options" style={{ display: paymentMethod === 'card' ? 'block' : 'none' }}>
            {/* Rest of the card options */}
            <div class="form-group">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" placeholder="Enter your card number" required></input>
        </div>
        <div class="form-group">
          <label for="card-name">Cardholder Name</label>
          <input type="text" id="card-name" placeholder="Enter cardholder name" required></input>
        </div>
        <div class="form-group">
          <label for="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" placeholder="MM/YY" required></input>
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="Enter CVV" required></input>
        </div>
          </div>
          <div id="upi-options" style={{ display: paymentMethod === 'upi' ? 'block' : 'none' }}>
            {/* Rest of the UPI options */}
            <div class="form-group">
          <label for="upi-id">UPI ID</label>
          <input type="text" id="upi-id" placeholder="Enter UPI ID" required></input>
        </div>
          </div>
          <div id="netbanking-options" style={{ display: paymentMethod === 'netbanking' ? 'block' : 'none' }}>
            {/* Rest of the netbanking options */}
            <div class="form-group">
          <label for="bank">Select Bank</label>
          <select id="bank">
          <option value="bank1">Select Bank</option>
            <option value="bank1">HDFC Bank</option>
            <option value="bank2">SBI</option>
            <option value="bank3">INDIAN BANK</option>
            <option value="bank1">Canara Bank</option>
            <option value="bank2">ICICI Bank</option>
            <option value="bank3">TMB Bank</option>
          </select>
        </div>
        <div class="form-group">
          <label for="netbanking-username">Username</label>
          <input type="text" id="netbanking-username" placeholder="Enter username" required></input>
        </div>
        <div class="form-group">
          <label for="netbanking-password">Password</label>
          <input type="password" id="netbanking-password" placeholder="Enter password" required></input>
        </div>

          </div>
          <div className="form-group" >
          <div style={{ display: paymentMethod ==='select' ? 'none' : 'block' }} >
            <button className="custom-button" type="submit"><Link to='/otp'>Submit</Link></button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Payment;
