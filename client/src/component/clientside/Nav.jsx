import React from 'react';
import logo from '../../Images/logo.png'
import '../CSS/style.css'
import { Link } from 'react-router-dom';

const Nav = () => {

    const style = {
        menu: {
            backgoundColor: "red",
            color: "white"

        },
        button: {
            backgroundColor: "red",
        },
        nav:{
            zIndex: "9999",
        }
    }


    return (
      <div
        style={style.nav}
        className="Nav w-100 flex justify-between items-center px-5 p-4 bg-black text-gray-100 fixed top-0 left-0 right-0"
      >
        <div className="logo">
          <img
            className="object-contain"
            src={logo}
            alt="logo.png"
            width={80}
          />
        </div>

        <div className="menu">
          <ul className="flex justify-between items-center " id="menu">
            <li className="px-4">
              <a href="/" className="hover:text-yellow-400 text-lg">
                Home
              </a>
            </li>
            <li className="px-4">
              <a href="/tours" className="hover:text-yellow-400 text-lg">
                Tour List
              </a>
            </li>
            <li className="px-4">
              <a href="/tours" className="hover:text-yellow-400 text-lg">
                Tour Search
              </a>
            </li>
            <li className="px-4">
              <a href="./ContactUs" className="hover:text-yellow-400 text-lg">
                Contact Us
              </a>
            </li>
            <li className="px-4">
              <a href="./Blogs" className="hover:text-yellow-400 text-lg">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="side-button w-24 h-12 flex justify-center items-center rounded bg-amber-500">
          <Link to="/login" className="text-lg p-2">
            Log In
          </Link>
        </div>
      </div>
    );

}

export default Nav