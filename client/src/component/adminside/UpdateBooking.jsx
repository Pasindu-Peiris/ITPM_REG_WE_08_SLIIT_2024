import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBooking = () => {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState({
    tourName: "",
    dayDetails: "",
    travellers: "",
    price: "",
    name: "",
    email: "",
    phone: "",
    nic: "",
    country: "",
    address: "",
  });

  //State for validation errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/bookings/${id}`);
        const data = response.data;
        setBookingData({
          tourName: data.tourName,
          dayDetails: data.dayDetails,
          travellers: data.travellers,
          price: data.price,
          name: data.name,
          email: data.email,
          phone: data.phone,
          nic: data.nic,
          country: data.country,
          address: data.address,
        });
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };
    fetchBooking();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Perform live validation
    const newErrors = { ...errors };
    switch (name) {
      case "email":
        // Email validation
        if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors[name] = "Invalid email address";
        } else {
          delete newErrors[name];
        }
        break;
      case "phone":
        // Phone number validation
        if (!/^\d{10}$/.test(value)) {
          newErrors[name] = "Invalid phone number";
        } else {
          delete newErrors[name];
        }
        break;
      case "nic":
        // NIC/Passport validation
        if (!/^[A-Za-z0-9]{7,}$/i.test(value)) {
          newErrors[name] = "Invalid NIC/Passport";
        } else {
          delete newErrors[name];
        }
        break;
      case "name":
        // Name validation
        if (!value.trim()) {
          newErrors[name] = "Name is required";
        } else {
          delete newErrors[name];
        }
        break;
      case "country":
        // Country validation
        if (!value.trim()) {
          newErrors[name] = "Country is required";
        } else {
          delete newErrors[name];
        }
        break;
      case "address":
        // Address validation
        if (!value.trim()) {
          newErrors[name] = "Address is required";
        } else {
          delete newErrors[name];
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  
    // Set state for booking data after validation
    setBookingData({ ...bookingData, [name]: value });
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  

  const handleSubmit = async () => {
    try {
      console.log("Submitting updated booking data:", bookingData);
      const response = await axios.put(`http://localhost:8090/bookings/${id}`, bookingData);
      console.log("Booking updated:", response.data);
      toast.success("Booking successfully updated!");
    } catch (error) {
      console.error("Error updating booking:", error);
      // You can show an error message here if needed
    }
    setTimeout(() => {
      window.location.href = `/bookings/${id}`;
    }, 2000);
  };

  return (
    <div style={{ paddingTop: '50px', paddingLeft:"400px", paddingRight:"400px", paddingBottom:"80px" }}>
      <div className="card" style={{ padding: '10px', position: 'relative' }}>
        <div style={{ marginBottom: '10px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '27px', marginBottom: '5px' }}>Update Booking Details</h2>
        </div>

        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '2px', fontSize: '20px' }}>Tour Name:</label>
          <input
            type="text"
            className="form-control"
            id="tourName"
            name="tourName"
            value={bookingData.tourName}
            onChange={handleChange}
            readOnly
            style={{ fontSize: '16px', padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>Price :</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={bookingData.price}
            onChange={handleChange}
            readOnly
            style={{ fontSize: '16px', padding: '5px' }}
          />
        </div>


        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>Day Details:</label>
          <input
            type="text"
            className="form-control"
            id="dayDetails"
            name="dayDetails"
            value={formatDate(bookingData.dayDetails)}
            onChange={handleChange}
            readOnly
            style={{ fontSize: '16px', padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>Travellers :</label>
          <input
            type="text"
            className="form-control"
            id="travellers"
            name="travellers"
            value={bookingData.travellers}
            onChange={handleChange}
            readOnly
            style={{ fontSize: '16px', padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={bookingData.name}
            onChange={handleChange}
            style={{ fontSize: '16px', padding: '5px' }}
          />

        {/* Name error message */}
        {errors.name && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.name}</div>
        )}
        
        </div>

        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={bookingData.email}
            onChange={handleChange}
            style={{ fontSize: '16px', padding: '5px' }}
          />

           
            {/* Email error message */}
        {errors.email && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.email}</div>
        )}


        </div>

        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>Phone :</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={bookingData.phone}
            onChange={handleChange}
            style={{ fontSize: '16px', padding: '5px' }}
          />

        
        </div>
      
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>NIC/Passport:</label>
          <input
            type="text"
            className="form-control"
            id="nic"
            name="nic"
            value={bookingData.nic}
            onChange={handleChange}
            style={{ fontSize: '16px', padding: '5px' }}
          />
        {/* NIC/Passport error message */}
        {errors.nic && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.nic}</div>
        )}

        </div>

        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>Country :</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={bookingData.country}
            onChange={handleChange}
            style={{ fontSize: '16px', padding: '5px' }}
          />
          {/* Country error message */}
        {errors.country && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.country}</div>
        )}

        </div>

        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '20px' }}>Address :</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={bookingData.address}
            onChange={handleChange}
            style={{ fontSize: '16px', padding: '5px' }}
          />

          {/* Address error message */}
        {errors.address && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.address}</div>
        )}
        </div>


        <button 
          type="button" 
          className="btn" 
          style={{ 
            backgroundColor: '#fcb900', 
            color: 'black', 
            marginBottom: '10px',
            fontSize: '14px',
            padding: '5px 10px',
            borderRadius: '5px'
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateBooking;
