import React, { useEffect, useState } from 'react';
import './Rig-form.css'

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('bookings');
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm(bookings[index]);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updated = [...bookings];
    updated[editingIndex] = editForm;
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditForm({});
  };

  return (
    <div>
      <h2>Admin Panel – Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found in localStorage.</p>
      ) : (
        <table border="1" cellPadding="8" className='edit-th'>
          <thead className={editingIndex !== null ? 'editing-mode' : ''}>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Item</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Guests</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                {editingIndex === i ? (
                  <>
                    <div className='E-table'>
                      <td>
                        <select name="bookingType" value={editForm.bookingType} onChange={handleEditChange}>
                          <option>Hotel</option>
                          <option>Event</option>
                          <option>Rental</option>
                        </select>
                      </td>
                      <td><input name="name" value={editForm.name} onChange={handleEditChange} /></td>
                      <td><input name="email" value={editForm.email} onChange={handleEditChange} /></td>
                      <td><input name="number" value={editForm.number} onChange={handleEditChange} /></td>
                      <td><input name="item" value={editForm.item} onChange={handleEditChange} /></td>
                      <td><input name="checkIn" type="date" value={editForm.checkIn} onChange={handleEditChange} /></td>
                      <td><input name="checkOut" type="date" value={editForm.checkOut} onChange={handleEditChange} /></td>
                      <td>{editForm.bookingType === 'Rental' ? '-' : (
                        <input name="guests" type="number" min="1" value={editForm.guests} onChange={handleEditChange} />
                      )}</td>
                      <td><input name="notes" value={editForm.notes} onChange={handleEditChange} /></td>
                      <td>
                        <button onClick={handleUpdate} className='btn'>Save</button>
                        <button onClick={handleCancel} className='btn'>Cancel</button>
                      </td>


                    </div>
                  </>

                ) : (
                  <>
                    <td data-label="Type">{b.bookingType}</td>
                    <td data-label="Name">{b.name}</td>
                    <td data-label="Email">{b.email}</td>
                    <td data-label="Mobile Number">{b.number}</td>
                    <td data-label="Item">{b.item}</td>
                    <td data-label="Check-In">{b.checkIn}</td>
                    <td data-label="Check-Out">{b.checkOut}</td>
                    <td data-label="Guests">{b.bookingType === 'Rental' ? '-' : b.guests}</td>
                    <td data-label="Notes">{b.notes}</td>
                    <td data-label="Actions">
                      <button onClick={() => handleEdit(i)} className='btn'>Edit</button>
                      <button onClick={() => handleDelete(i)} className='btn'>Delete</button>
                    </td>

                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
