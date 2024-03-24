import React from "react";
import Img from "../../Images/page-title-bg.png";
import Nav from "./Nav";
import Hfotter from "./Hfotter";
import { Link, json, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
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

   const [formData, setFormData] = useState({});
   const [isLoginSuccess, setIsLoginSuccess] = useState(false); // New state variable
   const navigate = useNavigate();

   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       const res = await fetch("http://localhost:8090/login/log", {
         method: "post",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });
       const data = await res.json();
       console.log("Token:", data.token);
       if (data.token) {
         console.log(data);
         localStorage.setItem("token", data.token);
         setIsLoginSuccess(true); 
         toast.success("Login Successful!", {
           position: "top-center",
           theme: "dark",
           transition: Bounce,
           onClose: () => navigate("/"),
         });
       } else if (data.error === "Password incorrect") {
         toast.error("Incorrect password. Please try again.", {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "dark",
           transition: Bounce,
         });
       } else {
         console.error("Login failed:", data.error);
         toast.error("User Does not exist", {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "dark",
           transition: Bounce,
         });
       }
     } catch (error) {
       console.error("error", error);
       toast.error("An error occurred. Please try again later.", {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         transition: Bounce,
       });
     }
   };
  return (
    <div>
      <Nav />
      <ToastContainer />
      <div className="flex items-center " style={addImg}>
        <h1 className=" text-center text-4xl font-semibold text-black">
          Login
        </h1>
      </div>
      <div className="w-[60%] mx-auto mt-4 border-b border-gray-400 pb-8">
        <form className="gap gap-3 w-[100%]" onSubmit={handleSubmit} >
          <div className="flex mt-6">
            <div className="w-1/2 mr-6">
              <label htmlFor="username" className="block text-md font-medium">
                Username*
              </label>
              <input
                type="username"
                id="username"
                name="username"
                className="mt-1 p-2 border w-full"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 ">
              <label htmlFor="password" className="block text-md font-medium">
                Password*
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 p-2 border w-full"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="mt-1 p-2 w-full border bg-amber-500 text-white  font-bold">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className="font-bold">DO NOT HAVE AN ACCOUNT?</h1>
        <div className="mt-2">
          <Link to={"/register"}>
            <span className="text-xs text-amber-500 p-2">
              CREATE AN ACCOUNT
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <Hfotter />
      </div>
    </div>
  );
};

export default Login;
