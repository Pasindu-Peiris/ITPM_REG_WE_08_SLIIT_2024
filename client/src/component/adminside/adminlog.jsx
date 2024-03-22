import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const AddUserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(true);

  const handleChangePhone = (e) => {
    const { value } = e.target;
    // Check if the value starts with '+' or '0' and does not exceed 10 characters
    const isValid = /^[+0]\d{0,9}$/.test(value) || value === "";
    setPhoneValid(isValid); // Update phone number validity state
    if (isValid) {
      setPhone(value);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend API to add the user
      const response = await axios.post("http://localhost:8090/admins/reg", {
        username,
        email,
        phone
      });

      // Log the response data
      console.log("Response:", response.data);

      // Reset form fields after successful submission
      setUsername("");
      setEmail("");
      setPhone("");

      // Display a success message to the user (optional)
      alert("User added successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error adding user:", error);
      // Display an error message to the user (optional)
      alert("An error occurred while adding the user. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add a new Admin</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter username"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handleChangePhone}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter phone number"
            maxLength={10}
            required
          />
          {!phoneValid && <p className="text-red-500 text-sm mt-1">Phone number should start with + or 0</p>} {/* Error message */}
        </div>
        <Link to={"/clientsdetails"}>
        <button
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
        >
          Submit
        </button>
        </Link>
      </form>
    </div>
  );
};

export default AddUserForm;
