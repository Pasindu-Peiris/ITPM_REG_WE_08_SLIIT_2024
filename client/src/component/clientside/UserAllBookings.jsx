import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Link } from "react-router-dom";

function UserAllBookings({ userId }) {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/bookings/user/${userId}`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching user bookings:", error);
        alert("Something went wrong while fetching bookings");
      }
    };
    fetchUserBookings();
  }, [userId]);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Export report
  const handleExportReport = () => {
    const doc = new jsPDF();
    const tableColumns = ["Tour Name", "Price", "Day Details", "Name", "Email"];
    const tableRows = bookings.map((booking) => [
      booking.tourName,
      booking.price,
      booking.dayDetails,
      booking.name,
      booking.email,
    ]);
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    doc.text(`User Bookings Report - ${formattedDate}`, 15, 10);
    doc.save(`User Bookings Report - ${formattedDate}` + ".pdf");

    window.alert("Report downloaded successfully!");
  };

  // Delete booking
  const handleDelete = (id) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this booking?");
    if (confirmDeletion) {
      axios
        .delete(`http://localhost:8090/bookings/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setBookings(bookings.filter((booking) => booking._id !== id));
          }
        })
        .catch((err) => {
          console.error("Error deleting booking:", err);
          alert("Something went wrong while deleting the booking");
        });
    }
  };

  // Search bookings
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter bookings based on search term
  const filteredBookings = bookings.filter((booking) => {
    return (
      booking.tourName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.dayDetails.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={{ padding: "80px" }}>
      <p style={{ fontWeight: "bold", fontSize: "35px", paddingBottom: "20px" }}>Your Bookings</p>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <button
        className="mt-1 w-60 p-2 border bg-amber-500 text-white font-bold rounded-md"
        onClick={handleExportReport}
      >
        Export Report
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tour Name</th>
            <th scope="col">Price</th>
            <th scope="col">Day Details</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.tourName}</td>
              <td>{booking.price}</td>
              <td>{formatDate(booking.dayDetails)}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>
                <Link to={`/bookings/${booking._id}`} className="btn btn-primary mr-2">
                  View
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(booking._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserAllBookings;
