import React from "react";
import Img from "../../Images/page-title-bg.png";
import Nav from "./Nav";
import Hfotter from "./Hfotter";
import { Link, json, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

  const [formData, setformData] = useState({});

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
      if (data.success === false) {
        return;
      }
      console.log(data);
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div>
      <Nav />
      <div className="flex items-center " style={addImg}>
        <h1 className=" text-center text-4xl font-semibold text-black">
          Login
        </h1>
      </div>
      <div className="w-[60%] mx-auto mt-4 border-b border-gray-400 pb-8">
        <form className="gap gap-3 w-[100%]" onSubmit={handleSubmit}>
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
