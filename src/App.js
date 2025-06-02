import React, { useState } from 'react';
import BookingSystem from './components/Registration-form';
import AdminPanel from './components/Addmin-panel';
import "./App.css";

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [view, setView] = useState('user');

  function handleNewBooking(booking) {
    setBookings(prev => [...prev, booking]);
  }

  return (
    <div className='App-r'>
      <div style={{ marginBottom: '1rem' }}>
        <button  onClick={() => setView('user')} className='btn'>User View</button>
        <button  onClick={() => setView('admin')} className='btn'>Admin Panel</button>
      </div>

      {view === 'user' ? (
       <BookingSystem onSubmitBooking={handleNewBooking} />
      ) : (
        <AdminPanel bookings={bookings} />
      )}
    </div>
  );
};

export default App;


