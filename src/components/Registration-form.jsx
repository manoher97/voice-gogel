import React, { useState } from 'react';
import './Rig-form.css';
import { FaStar } from "react-icons/fa";

function BookingSystem({ onSubmitBooking }) {
  const [bookingType, setBookingType] = useState('Hotel');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    notes: '',
    item: '',
  });
  const err = {
    color: 'red'
  }

  const bookingItems = {
    Hotel: ['Standard Room', 'Deluxe Room', 'Suite'],
    Event: ['Conference Hall', 'Wedding Venue', 'Meeting Room'],
    Rental: ['Car', 'Bike', 'Camera']
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (formData.name == "") {
      alert('Enter requared details');
    } else {

      const booking = { bookingType, ...formData };
      const existing = JSON.parse(localStorage.getItem('bookings')) || [];
      localStorage.setItem('bookings', JSON.stringify([...existing, booking]));
      alert(`Hi ${formData.name} your Booking done`)
      if (typeof onSubmitBooking === 'function') {
        onSubmitBooking(booking);
      }

      setFormData({
        name: '',
        email: '',
        number: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        notes: '',
        item: '',
      });

    }
  };


  return (

    <form onSubmit={handleSubmit} className='rForm'>
      <h2>{bookingType} Booking Form</h2>
      <div>
        <label>Booking Type:</label>
        <select value={bookingType} onChange={(e) => setBookingType(e.target.value)}>
          <option>Hotel</option>
          <option>Event</option>
          <option>Rental</option>
        </select>
      </div>
      <div>
        <label>Your Name: <sup><FaStar style={{ err }} /></sup></label>
        <input name="name" type="text" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email Address: <sup><FaStar /></sup></label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Mobiel Numaber:<sup><FaStar /></sup></label>
        <input name="number" type="text" value={formData.number} onChange={handleChange} />
      </div>
      <div>
        <label>{bookingType === 'Rental' ? 'Pick-up Date' : 'Check-in Date'}:</label>
        <input name="checkIn" type="date" value={formData.checkIn} onChange={handleChange} />
      </div>
      <div>
        <label>{bookingType === 'Rental' ? 'Return Date' : 'Check-out Date'}:</label>
        <input name="checkOut" type="date" value={formData.checkOut} onChange={handleChange} />
      </div>
      <div>
        {bookingType !== 'Rental' && (
          <>
            <label>Number of Guests:</label>
            <input name="guests" type="number" min="1" value={formData.guests} onChange={handleChange} />
          </>
        )}
      </div>
      <div>

      </div>
      <div>
        <label>{bookingType} Option:</label>
        <select name="item" value={formData.item} onChange={handleChange} >
          <option value="">-- Select --</option>
          {bookingItems[bookingType].map((option, i) => (
            <option key={i} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Special Requests / Notes:</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} />
      </div>
      <button type="submit" className='btn'>Submit Booking</button>
    </form>
  );

}



export default BookingSystem;
