import React, { useState } from "react";
import Nav from "./Nav";
import Hfotter from "./Hfotter";
import axios from "axios";
import Img from "../../Images/page-title-bg.png";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
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

  const addImg2 = {
    width: "100%",
    height: "30vh",
    justifyContent: "center",
  };

  const table = {
    width: "100%",
    justifyContent: "center",
  };

  const th = {
    width: "50%",
  };

  // State variables for form inputs and validations
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [nicValid, setNicValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  // Validation functions
  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailValid(isValid);
    return isValid;
  };
  const validateNic = (value) => {
    const isValid = /^[0-9]{9}[VvXx]|[0-9]{12}$/.test(value);
    setNicValid(isValid);
    return isValid;
  };
  const validatePhone = (value) => {
    const isValid = /^\+?\d{10,}$/.test(value);
    setPhoneValid(isValid);
    return isValid;
  };

  // Function to handle form submission
  const sendData = (e) => {
    e.preventDefault();
  
    // Perform validation
    const isValidEmail = validateEmail(email);
    const isValidNic = validateNic(nic);
    const isValidPhone = validatePhone(phone);
  
    if (isValidEmail && isValidNic && isValidPhone) {
      const newBooking = {
        name,
        email,
        phone,
        nic,
        country,
        address,
      };
  
      axios
        .post("http://localhost:8090/bookings", newBooking)
        .then((response) => {
          toast.success("Booking created successfully!");
          setName("");
          setEmail("");
          setPhone("");
          setNic("");
          setCountry("");
          setAddress("");
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.error(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error", error.message);
          }
          console.error(error.config);
          alert("Failed to create booking. Please try again.");
        });
    } else {
      toast.error("Please fill in all required fields correctly!", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  
  return (
    <div style={{ position: "relative" }}>
    
    
    <ToastContainer />
    <div>
      <table style={{ width: "100%", justifyContent: "center" }}>
        <tr>
          <th style={{ width: "50%" }}>
            {/* Your payment form here */}
            <div className="w-[60%] mx-auto mt-4 border-b border-gray-400 pb-8">
              <form onSubmit={sendData}>
                <label className="block text-md font-medium">Full Name</label>
                <br />
                <input
                  type="text"
                  className="mt-1 p-2 border w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label className="block text-md font-medium">Email</label>
                <br />
                <input
                  type="email"
                  className="mt-1 p-2 border w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label className="block text-md font-medium">
                  Phone Number
                </label>
                <br />
                <input
                  type="text"
                  className="mt-1 p-2 border w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <label className="block text-md font-medium">NIC</label>
                <br />
                <input
                  type="text"
                  className="mt-1 p-2 border w-full"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
                <br />
                <label className="block text-md font-medium">Country</label>
                <br />
                <input
                  type="text"
                  className="mt-1 p-2 border w-full"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <br />
                <label className="block text-md font-medium">Address</label>
                <br />
                <input
                  type="text"
                  className="mt-1 p-2 border w-full"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                
              </form>
            </div>
          </th>
          <th style={{ width: "50%" }}>
            <div>
              <h2>Booking Details</h2>
              {/* Display booking details here */}
            </div>
          </th>
        </tr>
      </table>
      <button onClick={sendData} className="mt-1 p-2 w-full border bg-amber-500 text-white font-bold">Continue</button>
    </div>
    <div className="mt-10">
      <Hfotter />
    </div>
  </div>
  );
};
export default PaymentPage;
