import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminAllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('/bookings');
        setBookings(res.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Tour Name</th>
            <th>Day Details</th>
            <th>Travellers</th>
            <th>Price</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>NIC</th>
            <th>Country</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.tourName}</td>
              <td>{booking.dayDetails}</td>
              <td>{booking.travellers}</td>
              <td>{booking.price}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.nic}</td>
              <td>{booking.country}</td>
              <td>{booking.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllBookings;
