import React, { useState } from "react";
import axios from 'axios';
import Img from "../../Images/page-title-bg.png";


 // Styles
 const addImg = {
  width: "100%",
  minHeight: "40vh",
  backgroundImage: `url(${Img})`,
  justifyContent: "center",
  allignItems: "center",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const table = {
  
  width: "100%",
  justifyContent: "center",
};

const th = {
  /*border: "1px solid black",*/
  allignItems: "center",
  width: "50%",
};

const PaymentPage = () => {
  const [bookingData, setBookingData] = useState({
    tourName: "Example Tour",
    dayDetails: "Example Day Details",
    travellers: 1,
    price: 100,
    name: "",
    email: "",
    phone: "",
    nic: "",
    country: "",
    address: ""
  });

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
    }
  };

  return (
    <div style={{ position: "relative" }}>
      
    
    <div className="flex items-center " style={addImg}>
        <h1 className=" text-center text-4xl font-semibold text-black ">
          Payment Page
        </h1>
      </div>
      <table style={table}>
      <tr>
            {/* Left Column */}
            <th style={th}>
              <p className=" text-xl text-black text-center mr-10">
                Payment form
              </p>
              <br />
              
            </th>
            {/* Right Column - Form */}
            <th style={th}>
              <p className=" text-xl text-black text-center ">
                Tour details
              </p>
            </th>
          </tr>
        <tr>
      <td style={th}>
      <div className="w-[60%] mx-auto mt-4 border-b border-gray-400 pb-8">
      <th style={th}>
              <p className=" text-xl text-black text-center ">
                 Use the form below
              </p>
            </th>
      <div>
        
      <label className="block text-md font-medium">Tour Name</label>
        <input
          type="text"
          className={`"mt-1 p-2 border w-full"`}
          name="tourName"
          value={bookingData.tourName}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">Travel Date</label>
        <input
          type="text"
          className={`"mt-1 p-2 border w-full"`}
          name="dayDetails"
          value={bookingData.dayDetails}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">Travellers</label>
        <input
          type="number"
          className={`"mt-1 p-2 border w-full"`}
          name="travellers"
          value={bookingData.travellers}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">Cost</label>
        <input
          type="number"
          className={`"mt-1 p-2 border w-full"`}
          name="price"
          value={bookingData.price}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">Full Name</label>
        
        <input
          type="text"
          className={`"mt-1 p-2 border w-full"`}
          name="name"
          value={bookingData.name}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">Email</label>
        <input
          type="email"
          className={`"mt-1 p-2 border w-full"`}
          name="email"
          value={bookingData.email}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">Phone Number</label>
        <input
          type="text"
          className={`"mt-1 p-2 border w-full"`}
          name="phone"
          value={bookingData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">NIC/Passport</label>
        <input
          type="text"
          className={`"mt-1 p-2 border w-full"`}
          name="nic"
          value={bookingData.nic}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">Country</label>
        <input
          type="text"
          className={`"mt-1 p-2 border w-full"`}
          name="country"
          value={bookingData.country}
          onChange={handleChange}
        />
      </div>
      <div>
      <label className="block text-md font-medium">Address</label>
        <input
          type="text"
          className={`"mt-1 p-2 border w-full"`}
          name="address"
          value={bookingData.address}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleSubmit} className="mt-1 p-2 w- bg-amber-500 text-white  font-bold">Submit</button>
    
    </div>
    
    </td>
    <th style={th}>
              <p className=" text-xl text-black text-center ">
                Card details
              </p>
            </th>
    </tr>
    </table>
    </div>
  );
};

export default PaymentPage;
