import React, { useState } from "react";
import axios from "axios";

const AddUserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend API to add the user
      const response = await axios.post("http://localhost:8090/admins/reg", {
        username,
        password,
        role,
      });

      // Log the response data
      console.log("Response:", response.data);

      // Reset form fields after successful submission
      setUsername("");
      setPassword("");
      setRole("");

      // Display a success message to the user (optional)
      alert("Admin added successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error adding user:", error);
      // Display an error message to the user (optional)
      alert(
        "An error occurred while adding the user. Please try again later."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add a new Admin
        </h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
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
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Temporarily Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Temporary Password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 font-bold mb-2"
          >
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="tour_mgr">Tour_Mgr</option>
            <option value="client_mgr">Client_Mgr</option>
            <option value="blog_mgr">Blog_Mgr</option>
            <option value="review_mgr">Review_Mgr</option>
            <option value="care_mgr">Care_Mgr</option>
            <option value="vtour_mgr">Vtour_Mgr</option>
          </select>
        </div>

        <button
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
        >
          Add Admin
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
