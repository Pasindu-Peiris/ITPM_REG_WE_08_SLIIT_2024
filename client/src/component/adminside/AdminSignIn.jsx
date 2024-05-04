import React, { useState } from 'react';
import axios from 'axios';

function AdminSignIn() {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://localhost:3000/admin/login', { username, password });

      if (response.data.message === "Success") {
        if (response.data.role === "client_mgr") {
          window.location.href = '/clientsdetails'; // Redirect to clientsdetails page
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while processing your request");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminSignIn;
