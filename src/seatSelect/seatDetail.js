import React, { useState } from 'react';
import seatImage from './seat.png';
import seatSelectedImage from './seat-selected.png';
import './seat.css';
import PassengerDetailsPage from '../passengerDetail/passengerdetail';

const SeatSelectionPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numberOfPassengers, setNumberOfPassengers] = useState(1);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const handleSeatClick = (seatNumber, isLeft) => {
    if (isLeft) {
      if (selectedSeats.includes(seatNumber)) {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      } else {
        if (selectedSeats.length < numberOfPassengers) {
          setSelectedSeats([...selectedSeats, seatNumber]);
        }
      }
    } else {
      const leftSeatNumber = seatNumber.replace('R', 'L');
      if (selectedSeats.includes(leftSeatNumber)) {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== leftSeatNumber));
      } else {
        if (selectedSeats.length < numberOfPassengers) {
          setSelectedSeats([...selectedSeats, leftSeatNumber]);
        }
      }
    }
  };

  const handlePassengerChange = (event) => {
    const passengers = parseInt(event.target.value);
    setNumberOfPassengers(passengers);

    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.length > passengers) {
        return prevSelectedSeats.slice(0, passengers);
      }
      return prevSelectedSeats;
    });
  };

  const handleConfirmBooking = () => {
    setIsBookingConfirmed(true);
  };

  if (isBookingConfirmed) {
    return (
      <PassengerDetailsPage numberOfPassengers={numberOfPassengers} />
    );
  }

  return (
    <div>
      <h1>Seat Selection</h1>
      <div>
        <p>Select number of passengers:</p>
        <input id='one' type="number" value={numberOfPassengers} min={1} onChange={handlePassengerChange} />
      </div>
      <div>
        <p>Select your seats:</p>
        <div className="seat-map">
          <div className="seat-column">
            <SeatRow
              rowNumber={1}
              seatCount={4}
              selectedSeats={selectedSeats}
              onSeatClick={(seatNumber) => handleSeatClick(seatNumber, false)} // Pass false for right seat selection
              numberOfPassengers={numberOfPassengers}
            />
          </div>
          <div className="seat-column">
            <SeatRow
              rowNumber={2}
              seatCount={4}
              selectedSeats={selectedSeats}
              onSeatClick={(seatNumber) => handleSeatClick(seatNumber, false)} // Pass false for right seat selection
              numberOfPassengers={numberOfPassengers}
            />
          </div>
        </div>
      </div>
      <div>
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
        <button onClick={handleConfirmBooking}>Confirm Booking</button>
      </div>
    </div>
  );
};

const SeatRow = ({ rowNumber, seatCount, selectedSeats, onSeatClick, numberOfPassengers }) => {
  const seats = [];

  for (let i = 1; i <= seatCount; i++) {
    const seatNumber = `${rowNumber}-${i}`;
    const isSelected = selectedSeats.includes(seatNumber);

    seats.push(
      <Seat
        key={seatNumber}
        seatNumber={seatNumber}
        isSelected={isSelected}
        onSeatClick={onSeatClick}
        disabled={selectedSeats.length >= numberOfPassengers && !isSelected}
        numberOfPassengers={numberOfPassengers}
      />
    );
  }

  return <div className="seat-row">{seats}</div>;
};

const Seat = ({ seatNumber, isSelected, onSeatClick, disabled, numberOfPassengers }) => {
  const seatStyle = {
    backgroundImage: `url(${isSelected ? seatSelectedImage : seatImage})`,
  };

  return (
    <div
      className={`seat ${isSelected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
      style={seatStyle}
      onClick={() => !disabled && onSeatClick(seatNumber, false)} // Pass false for right seat selection
    >
      {seatNumber}
    </div>
  );
};

export default SeatSelectionPage;
