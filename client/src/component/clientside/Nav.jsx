import React, { useState } from "react";
import logo from "../../Images/logo.png";
import "../CSS/style.css";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Importing confirm alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Importing confirm alert styles

const Nav = () => {
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
            <Link to="/" className="hover:text-yellow-400 text-lg">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/tours" className="hover:text-yellow-400 text-lg">
              Tour List
            </Link>
          </li>
          <li className="px-4">
            <Link to="/virtualtours" className="hover:text-yellow-400 text-lg">
              Virtual Tours
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contactUs" className="hover:text-yellow-400 text-lg">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/blogs" className="hover:text-yellow-400 text-lg">
              Blog
            </Link>
          </li>
          <li className="px-4">
            <Link to="/reviews" className="hover:text-yellow-400 text-lg">
              Review List
            </Link>
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <div className="side-button w-24 h-12 flex justify-center items-center rounded bg-amber-500">
          <Link to="/profile" className="text-lg p-2">
           Profile
          </Link>
        </div>
      ) : (
        <div className="side-button w-24 h-12 flex justify-center items-center rounded bg-amber-500">
          <Link to="/login" className="text-lg p-2">
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
