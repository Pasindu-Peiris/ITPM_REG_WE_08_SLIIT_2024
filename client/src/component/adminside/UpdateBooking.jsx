// UpdateBooking.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function UpdateBooking() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/bookings/${id}`);
        setBooking(response.data);
        setUpdatedName(response.data.name);
        setUpdatedEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching booking:", error);
        alert("Something went wrong while fetching the booking");
      }
    };
    fetchBooking();
  }, [id]);

  const handleUpdate = async () => {
    try {
      // Implement your update logic here
      // Example: await axios.put(`http://localhost:8090/bookings/${id}`, { name: updatedName, email: updatedEmail });
      alert("Booking updated successfully!");
    } catch (error) {
      console.error("Error updating booking:", error);
      alert("Something went wrong while updating the booking");
    }
  };

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", maxWidth: "600px", width: "100%" }}>
        <p style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center", marginBottom: "20px" }}>Update Booking</p>
        <form onSubmit={handleUpdate}>
          <div>
            <p><strong>Tour Name:</strong> {booking.tourName}</p>
            <p><strong>Price:</strong> {booking.price}</p>
            <p><strong>Day Details:</strong> {booking.dayDetails}</p>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="name" style={{ fontSize: "18px" }}>Name:</label>
              <input type="text" id="name" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} style={{ fontSize: "18px", padding: "8px", borderRadius: "5px", width: "100%" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="email" style={{ fontSize: "18px" }}>Email:</label>
              <input type="email" id="email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} style={{ fontSize: "18px", padding: "8px", borderRadius: "5px", width: "100%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
            <Link to={`/bookings/${id}`} style={{ marginRight: "20px", backgroundColor: "#fd7e14", padding: "12px 24px", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "20px" }}>Continue</Link>
            <Link to="/bookings" style={{ marginLeft: "20px", backgroundColor: "#fd7e14", padding: "12px 24px", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "20px" }}>Back</Link>
          </div>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateBooking;
