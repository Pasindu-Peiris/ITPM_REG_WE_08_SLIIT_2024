import React, { useState } from "react";
import axios from 'axios';
import Img from "../../Images/page-title-bg.png";
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";

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

const PaymentPage = () => {
  const [bookingData, setBookingData] = useState({
    tourName: "Galle , DownSouth",
    dayDetails: " 2023 aug 3to 2023 aug 10 ",
    travellers: 4,
    price: 12000,
    name: "",
    email: "",
    phone: "",
    nic: "",
    country: "",
    address: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
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
        travellers: 1,
        price: 0,
        name: "",
        email: "",
        phone: "",
        nic: "",
        country: "",
        address: ""
      });
      // Show success message
      alert("Booking successfully added!");
    } catch (error) {
      console.error("Error creating booking:", error);
      // You can show an error message here if needed
      setErrorMessage("Error creating booking. Please try again later.");
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
              </div>



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
                  type="text"
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
            </div>
          </th>
        </tr>
      </table>
    </div>
    <Hfotter />
    </>
  );
};

export default PaymentPage;
