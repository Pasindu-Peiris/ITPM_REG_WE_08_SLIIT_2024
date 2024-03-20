import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams, Link } from "react-router-dom";

function ViewBooking() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/bookings/${id}`);
        setBooking(response.data);
      } catch (error) {
        console.error("Error fetching booking:", error);
        alert("Something went wrong while fetching the booking");
      }
    };
    fetchBooking();
  }, [id]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "white" }}>
      <div style={{ backgroundColor: "white", padding: "60px", borderRadius: "20px", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}>
        <p style={{ fontWeight: "bold", fontSize: "40px", paddingBottom: "30px", textAlign: "center" }}>View Booking</p>
        <div style={{ fontSize: "20px" }}>
          <p><strong>Tour Name:</strong> {booking.tourName}</p>
          <p><strong>Price:</strong> {booking.price}</p>
          <p><strong>Day Details:</strong> {booking.dayDetails}</p>
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Email:</strong> {booking.email}</p>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
            <Link to={`/update/${id}`} style={{ marginRight: "20px", backgroundColor: "#fd7e14", padding: "12px 24px", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "20px" }}>Update</Link>
            <Link to="/bookings" style={{ marginLeft: "20px", backgroundColor: "#fd7e14", padding: "12px 24px", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "20px" }}>Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBooking;
