import React from "react";
import Img from "../../Images/herobg.jpg";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HsectionOne = () => {
  const addImg = {
    width: "100%",
    height: "120vh",
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
  };

  const fontSize = {
    f0: {
      fontSize: "3rem",
      letterSpacing: "8px",
    },
    f1: {
      fontSize: "5rem",
      fontWeight: "bold",
      letterSpacing: "12px",
    },
    f2: {
      fontSize: "1.1rem",
      letterSpacing: "0.5px",
    },
  };

  const [formData, setformData] = useState({});
  const navigate = useNavigate();
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
      if (data._id) {
        console.log(data);
        toast.success("Login Successfull!", {
          position: "top-center",
          theme: "dark",
          transition: Bounce,
          onClose: () => navigate("/tours"),
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
    <div
      className="flex items-center justify-center  text-gray-100"
      style={addImg}
    >
      <div className="main-block block text-center">
        <div className="block-1 p-2 mt-12">
          <h2 className="" style={fontSize.f0}>
            EXPLORE
          </h2>
        </div>

        <div className="block-2 p-2">
          <TypeAnimation
            sequence={[1500, "THE NEW WORLD", 1000, 8500, ""]}
            style={fontSize.f1}
            repeat={Infinity}
            speed={10}
          />
        </div>

        <div className="block-3 p-1">
          <h3 style={fontSize.f2}>
            Discover and book tent camping, RV parks, cabins, treehouses, and
            glamping.
          </h3>
        </div>

        <div className="side-button flex justify-center items-center mt-6 ">
          <a
            href="#!"
            className="w-48 h-14 flex justify-center items-center rounded bg-amber-500 text-lg "
          >
            {" "}
            Discover Tours
          </a>
        </div>
      </div>

      {/* {model background} */}

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered max-w-2xl ">
          <div className="modal-content ">
            <div className="modal-header flex justify-between items-center">
              <h1 className="text-black text-2xl font-semibold flex justify-center w-full">
                LOGIN
              </h1>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              a
            </div>
            <div className="modal-body">
              <div className=" mt-2 ">
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="flex mt-6">
                      <div className="w-full mr-6">
                        <label
                          htmlFor="username"
                          className="block text-black font-medium"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          className="mt-1 p-2 border w-full text-black"
                          onChange={handleChange}
                        />
                      </div>
                      <div class="w-full ">
                        <label
                          htmlFor="password"
                          className="block text-black font-medium"
                        >
                          Password*
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="mt-1 p-2 border w-full text-black"
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
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <div className="text-center">
                <h2 className="text-black font-bold">DO NOT HAVE AN ACCOUNT</h2>
                <p className="text-amber-500  mt-1">
                  <a href="/register">
                    <span className="text-xs text-amber-500 p-2">
                      CREATE AN ACCOUNT
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HsectionOne;
