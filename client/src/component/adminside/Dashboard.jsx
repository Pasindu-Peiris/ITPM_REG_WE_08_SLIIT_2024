import React, { useState } from "react";
import logo from "../../Images/logo.png";
import "../CSS/style.css";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Importing confirm alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Importing confirm alert styles

const Dashboard = () => {
  const style = {
    menu: {
      backgroundColor: "red", // Fixed typo
      color: "white",
    },
    button: {
      backgroundColor: "red",
    },
    nav: {
      zIndex: "9999",
    },
  };



  const isLoggedIn = localStorage.getItem("token");

  return (
    <div
      style={style.nav}
      className="Nav w-100 flex justify-between items-center px-5 p-4 bg-black text-gray-100 fixed top-0 left-0 right-0"
    >
      <div className="logo">
        <img className="object-contain" src={logo} alt="logo.png" width={80} />
      </div>

      <div className="menu">
        <ul className="flex justify-between items-center " id="menu">
          <li className="px-4">
            <Link to="/admin" className="hover:text-yellow-400 text-lg">
              Dashboard
            </Link>
          </li>
          <li className="px-4">
            <Link to="/alltours" className="hover:text-yellow-400 text-lg">
              Tours & Destinations
            </Link>
          </li>
          <li className="px-4">
            <Link to="/bookings" className="hover:text-yellow-400 text-lg">
              Bookings
            </Link>
          </li>
          <li className="px-4">
            <Link to="/AllBlog" className="hover:text-yellow-400 text-lg">
              Blogs
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/addvirtualtour"
              className="hover:text-yellow-400 text-lg"
            >
              Virtual Tours
            </Link>
          </li>
          <li className="px-4">
            <Link to="/alltestreview" className="hover:text-yellow-400 text-lg">
              Reviews
            </Link>
          </li>
          <li className="px-4">
            <Link to="/allcontactus" className="hover:text-yellow-400 text-lg">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/clientsdetails"
              className="hover:text-yellow-400 text-lg"
            >
              Clients
            </Link>
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <div className="side-button w-24 h-12 flex justify-center items-center rounded bg-amber-500">
          <Link to="/#" className="text-lg p-2">
            Profile
          </Link>
        </div>
      ) : (
        <div
          className="side-button w-24 h-12 flex justify-center items-center rounded bg-amber-500"
          style={{ backgroundColor: "red" }}
        >
          <Link to="#" className="text-lg p-2">
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
