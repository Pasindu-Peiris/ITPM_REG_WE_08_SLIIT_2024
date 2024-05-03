import React from 'react'

function AdminSignIn() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        console.log("Username:", username);
        console.log("Password:", password);
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
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
            >
              Login
            </button>
          </form>
        </div>
      );
    };
export default AdminSignIn