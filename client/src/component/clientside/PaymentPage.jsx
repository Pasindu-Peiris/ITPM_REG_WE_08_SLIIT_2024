import React, { useState } from "react";
import axios from 'axios';
import Img from "../../Images/page-title-bg.png";
import Nav from "./Nav";
import Hfotter from "./Hfotter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';


// Styles
const addImg = {
  width: "100%",
  minHeight: "40vh",
  backgroundImage: `url(${Img})`,
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const table = {
  width: "100%",
  justifyContent: "center",
};

const th = {
  alignItems: "center",
  width: "50%",
};

const ToastMessage = ({ message }) => (
  <div className="toast-message">
    <p>{message}</p>
  </div>
);


const PaymentPage = () => {

  const { id } = useParams();



  const [bookingData, setBookingData] = useState({
    trid: id,
    tourName: "Sigiriya, Eight Wonder of the world",
    dayDetails: " ",
    travellers: 4,
    price: 340,
    name: "",
    email: "",
    phone: "",
    nic: "",
    country: "",
    address: "",
    cardNumber: "",
    expDate: "",
    cvv: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

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

            case "cardNumber":
            // Card number validation
            if (!/^\d{16}$/.test(value)) {
                newErrors[name] = "Invalid card number";
            } else {
                delete newErrors[name];
            }
            break;
        case "expDate":
            // Expiry date validation
            // You can customize this validation according to your requirements
            // Example: Check if the expiry date is in the future
            const currentDate = new Date();
            const enteredDate = new Date(value);
            if (enteredDate <= currentDate) {
                newErrors[name] = "Expiry date must be in the future";
            } else {
                delete newErrors[name];
            }
            break;
        case "cvv":
            // CVV validation
            if (!/^\d{3,4}$/.test(value)) {
                newErrors[name] = "Invalid CVV";
            } else {
                delete newErrors[name];
            }
            break;

      default:
        break;
    }
    setErrors(newErrors);

    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting booking data:", bookingData);
      const response = await axios.post('http://localhost:8090/bookings', bookingData);
      console.log("Booking created:", response.data);
      // Reset form fields
      setBookingData({
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
        cardNumber: "",
        expDate: "",
        cvv: ""
      });
      // Show success message
      setSuccessMessage("Booking successfully added!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); 
      toast.success("Booking successfully added!");
      // Clear message after 3 seconds
    } catch (error) {
      console.error("Error creating booking:", error);
      // You can show an error message here if needed
      toast.error("Error creating booking. Please try again later.");
    }
  };

  

  return (

    <>
    <Nav/>
    <div style={{ position: "relative" }}>
      
      <div className="flex items-center " style={addImg}>
        <h1 className="text-center text-4xl font-semibold text-black">
          Payment Page
        </h1>
      </div>
      <table style={table}>
        <tr>
          {/* Left Column - Payment form */}
          <th style={th}>
            <p className="text-xl text-black text-center">Payment form</p>
            <br />
            <div className="w-[60%] mx-auto mt-4 border-b border-gray-400 pb-8">
              <div>
                <label className="block text-md font-medium">Full Name</label>
                <input
                  type="text"
                  className={`mt-1 p-2 border w-full`}
                  name="name"
                  value={bookingData.name}
                  onChange={handleChange}
                />
                {/* Address error message */}
        {errors.name && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.name}</div>
        )}
              </div>
              {/* Add other input fields for payment form */}

              <div>
      <label className="block text-md font-medium">Email Address</label>
      <input
        type="email"
        className={`mt-1 p-2 border w-full`}
        name="email"
        value={bookingData.email}
        onChange={handleChange}
      />

{/* Email error message */}
        {errors.email && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.email}</div>
        )}

    </div>
    <div>
      <label className="block text-md font-medium">Phone Number</label>
      <input
        type="tel"
        className={`mt-1 p-2 border w-full`}
        name="phone"
        value={bookingData.phone}
        onChange={handleChange}
      />
      {/* Address error message */}
      {errors.phone && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.phone}</div>
        )}
    </div>  
    <div>
                <label className="block text-md font-medium">NIC/Passport</label>
                <input
                  type="text"
                  className={`mt-1 p-2 border w-full`}
                  name="nic"
                  value={bookingData.nic}
                  onChange={handleChange}
                />
                {/* NIC/Passport error message */}
        {errors.nic && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.nic}</div>
        )}


              </div>
              <div>
                <label className="block text-md font-medium">Country</label>
                <input
                  type="text"
                  className={`mt-1 p-2 border w-full`}
                  name="country"
                  value={bookingData.country}
                  onChange={handleChange}
                />

                 {/* Country error message */}
        {errors.country && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.country}</div>
        )}
              </div>
              <div>
                <label className="block text-md font-medium">Address</label>
                <input
                  type="text"
                  className={`mt-1 p-2 border w-full`}
                  name="address"
                  value={bookingData.address}
                  onChange={handleChange}
                />
                {/* Address error message */}
        {errors.address && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.address}</div>
        )}
              </div>

              <br></br>

              <button
                type="button"
                onClick={handleSubmit}
                className="mt-1 p-2 w-full bg-amber-500 text-white font-bold"
              >
                Submit
              </button>
            </div>
          </th>
          {/* Right Column - Tour details */}
          <th style={th}>
            <p className="text-xl text-black text-center">Tour details</p>
            <br />
            <div className="w-[60%] mx-auto mt-4 border-b border-gray-400 pb-8">
              <div>
                <label className="block text-md font-medium">Tour Name</label>
                <input
                  type="text"
                  className={`mt-1 p-2 border w-full`}
                  name="tourName"
                  value={bookingData.tourName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md font-medium">Travel Date</label>
                <input
                  type="date"
                  className={`mt-1 p-2 border w-full`}
                  name="dayDetails"
                  value={bookingData.dayDetails}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md font-medium">Travellers</label>
                <input
                  type="number"
                  className={`mt-1 p-2 border w-full`}
                  name="travellers"
                  value={bookingData.travellers}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md font-medium">Cost</label>
                <input
                  type="number"
                  className={`mt-1 p-2 border w-full`}
                  name="price"
                  value={bookingData.price}
                  onChange={handleChange}
                />
              </div>
              {/* Add other tour details input fields */}
              
              <br></br>

              {/* Card details */}
    <div>
      <p className="text-xl text-black text-center">Card details</p>
      <div>
        <label className="block text-md font-medium">Card Number</label>
        <input
          type="text"
          className={`mt-1 p-2 border w-full`}
          name="cardNumber"
          value={bookingData.cardNumber}
          onChange={handleChange}
        />

            {/* Address error message */}
        {errors.cardNumber && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.cardNumber}</div>
        )}

      </div>
      <div>
        <label className="block text-md font-medium">Expiration Date</label>
        <input
          type="text"
          className={`mt-1 p-2 border w-full`}
          name="expDate"
          value={bookingData.expDate}
          onChange={handleChange}
        />
        {/* Address error message */}
        {errors.expDate && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.expDate}</div>
        )}

      </div>
      <div>
        <label className="block text-md font-medium">CVV</label>
        <input
          type="text"
          className={`mt-1 p-2 border w-full`}
          name="cvv"
          value={bookingData.cvv}
          onChange={handleChange}
        />
        {/* Address error message */}
        {errors.cvv && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{errors.cvv}</div>
        )}

      </div>
    </div>


            </div>
          </th>
        </tr>
      </table>
      <ToastContainer />
    </div>

    <Hfotter />
    </>
  );
};

export default PaymentPage;
