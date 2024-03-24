import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useParams, Link } from "react-router-dom";



// Define styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 50,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
});

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
  
    // PDF Document component
    const BookingPDF = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>Booking Details</Text>
            <View style={styles.section}>
              <Text style={styles.label}>Tour Name:</Text>
              <Text style={styles.value}>{booking.tourName}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Price:</Text>
              <Text style={styles.value}>{booking.price}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Day Details:</Text>
              <Text style={styles.value}>{booking.dayDetails}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Travellers:</Text>
              <Text style={styles.value}>{booking.travellers}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{booking.name}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{booking.email}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Phone:</Text>
              <Text style={styles.value}>{booking.phone}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>NIC/Passport:</Text>
              <Text style={styles.value}>{booking.nic}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Country:</Text>
              <Text style={styles.value}>{booking.country}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Address:</Text>
              <Text style={styles.value}>{booking.address}</Text>
            </View>
          </View>
        </Page>
      </Document>
    );

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "white" }}>
      <div style={{ backgroundColor: "white", padding: "100px", borderRadius: "20px", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}>
        <p style={{ fontWeight: "bold", fontSize: "40px", paddingBottom: "30px", textAlign: "center" }}>View Booking</p>
        <div style={{ fontSize: "20px" }}>
          <p><strong>Tour Name :</strong> {booking.tourName}</p>
          <p><strong>Price :</strong> {booking.price}</p>
          <p><strong>Day Details :</strong> {booking.dayDetails}</p>
          <p><strong>Travellers :</strong> {booking.travellers}</p>
          <p><strong>Name :</strong> {booking.name}</p>
          <p><strong>Email :</strong> {booking.email}</p>
          <p><strong>Phone :</strong> {booking.phone}</p>
          <p><strong>NIC/Passport :</strong> {booking.nic}</p>
          <p><strong>Country :</strong> {booking.country}</p>
          <p><strong>Address :</strong> {booking.address}</p>

          <div style={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
          <PDFDownloadLink document={<BookingPDF />} fileName="booking_report.pdf" style={{ marginRight: "20px", backgroundColor: "#fd7e14", padding: "12px 24px", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "20px" }}>
              {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : 'Export PDF')}
            </PDFDownloadLink>

            <Link to={`/update/${id}`} style={{ marginRight: "20px", backgroundColor: "#fd7e14", padding: "12px 24px", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "20px" }}>Update</Link>
            <Link to="/bookings" style={{ marginLeft: "20px", backgroundColor: "#fd7e14", padding: "12px 24px", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "20px" }}>Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBooking;
