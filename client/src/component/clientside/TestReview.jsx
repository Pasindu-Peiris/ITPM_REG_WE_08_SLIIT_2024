/*import React, { useState } from "react";
import Nav from "./Nav";
import Img from "../../Images/page-title-bg.png";
import Hfotter from "./Hfotter";
import axios from "axios";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TestReview = () => {
  // Styles
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

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [review, setReview] = useState("");
 // New state for rating

  const [fullNameValid, setFullNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [destinationValid, setDestinationValid] = useState(true);
  const [reviewValid, setReviewValid] = useState(true);

  const validateFullname = (value) => {
    const isValid = /^[A-Za-z\s]+$/.test(value);
    setFullNameValid(isValid);
    return isValid;
  };

  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailValid(isValid);
    return isValid;
  };

  const validateDestination = (value) => {
    const isValid = value.trim() !== "";
    setDestinationValid(isValid);
    return isValid;
  };

  const validateDate = (value) => {
    const isValid = value.trim() !== "";
    setDateValid(isValid);
    return isValid;
  };

  const validateReview = (value) => {
    const isValid = value.trim() !== "";
    setReviewValid(isValid);
    return isValid;
  };

  const sendData = (e) => {
    e.preventDefault();

    // Perform validation
    const isFullnameValid = validateFullname(fullName);
    const isEmailValid = validateEmail(email);
    const isDestinationValid = validateDestination(destination);
    const isReviewValid = validateReview(review);
    const isDateValid = validateDate(date);

    if (
      isFullnameValid &&
      isEmailValid &&
      isDestinationValid &&
      isReviewValid &&
      isDateValid 
      
    ) {
      const formData = {
        fullName,
        email,
        date,
        destination,
        review,
        
      };
      axios
        .post("http://localhost:8090/testreview/add", formData)
        .then(() => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            theme: "dark",
            transition: Bounce,
          });
          setFullName("");
          setEmail("");
          setDate("");
          setDestination("");
          setReview("");
          
        })
        .catch((err) => {
          alert(err + "Please fill in all required fields and try again. ");
          console.log(err);
        });
    } else {
      toast.error("Please fill in all required fields correctly!", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <div className="flex items-center " style={addImg}>
        <h1 className=" text-center text-5xl font-semibold text-black pt-20 mt-10 ">
          Journey Diaries <br /> Share Your Travel Story
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-xl text-black text-center mr-10  p-5">
          "Embark on a journey of shared experiences! Your adventures deserve to
          be heard. Share the highlights of your travels with our community by
          leaving a review. From breathtaking destinations to hidden gems, your
          insights make the world smaller and more connected. Join us in
          creating a tapestry of travel tales – your story begins here!"
        </p>
      </div>

      <form onSubmit={sendData}>
        <div class="p-4 flex justify-between mx-36">
          <div class=" w-1/2 h-96 mr-3 ">
          <label
            placeholder="Email"
            htmlFor="fullName"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              
            }}>Full Name</label>
            
            <input
              type="text"
              className={` ${fullNameValid ? "" : "is-invalid"}`}
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                validateFullname(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            />
            {!fullNameValid && (
              <div className="invalid-feedback">Please enter a valid name.</div>
            )}

<label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Email</label>
            <input
              type="email"
              className={` ${emailValid ? "" : "is-invalid"}`}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            />
            {!emailValid && (
              <div className="invalid-feedback">
                Please enter a valid email.
              </div>
            )}

<label
            htmlFor="Review"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Review</label>
            <textarea
              id="review"
              className={` ${reviewValid ? "" : "is-invalid"}`}
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
                validateReview(e.target.value);
              }}
              placeholder="Write your review here"
              rows="4"
              cols="50"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            />
            {!reviewValid && (
              <div className="invalid-feedback">
                Please enter a valid review.
              </div>
            )}
          </div>

          <div class=" w-1/2 h-96 ">
          <label
            htmlFor="date"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Date</label>

            <input
              type="date"
              className={` ${dateValid ? "" : "is-invalid"}`}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                validateDate(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
                paddingLeft: "0.5rem",
              }}
            />
            {!dateValid && (
              <div className="invalid-feedback">Please enter a valid date.</div>
            )}

            <label
              htmlFor="destination"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Destination
            </label>
            <input
              type="text"
              className={` ${destinationValid ? "" : "is-invalid"}`}
              placeholder="Travel Destination (Optional)"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                validateDestination(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            />
            {!destinationValid && (
              <div className="invalid-feedback">
                Please enter a valid destination.
              </div>
            )}



          <label
            htmlFor="Image Upload"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Image Upload</label>
          <label htmlfor="image" >Add Image</label>

          
          <input type="file"  className="border p-2 rounded-lg w-full"></input>
            <div className="mt-10">
              <button
                type="submit"
                className="mt-1 p-2 w-full border bg-amber-500 text-white  font-bold"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-10">
        <Hfotter />
      </div>
    </div>
  );
};

export default TestReview;
*/

import React, { useState } from "react";
import Nav from "./Nav";
import Img from "../../Images/page-title-bg.png";
import Hfotter from "./Hfotter";
import axios from "axios";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TestReview = () => {
  // Styles
  const addImg = {
    width: "100%",
    minHeight: "40vh",
    backgroundImage: `url(${Img})`,
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [review, setReview] = useState("");

  // New state for validation
  const [fullNameValid, setFullNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [destinationValid, setDestinationValid] = useState(true);
  const [reviewValid, setReviewValid] = useState(true);

  const validateFullname = (value) => {
    const isValid = /^[A-Za-z\s]+$/.test(value);
    setFullNameValid(isValid);
    return isValid;
  };

  // Other validation functions...

  const sendData = (e) => {
    e.preventDefault();

    // Perform validation
    const isFullnameValid = validateFullname(fullName);
    // Other validations...

    if (isFullnameValid) { // Corrected comment syntax
      const formData = {
        fullName,
        email,
        date,
        destination,
        review,
      };
      axios
        .post("http://localhost:8090/testreview/add", formData)
        .then(() => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            theme: "dark",
            transition: Bounce,
          });
          setFullName("");
          setEmail("");
          setDate("");
          setDestination("");
          setReview("");
        })
        .catch((err) => {
          alert(err + "Please fill in all required fields and try again. ");
          console.log(err);
        });
    } else {
      toast.error("Please fill in all required fields correctly!", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <div className="flex items-center " style={addImg}>
        <h1 className=" text-center text-5xl font-semibold text-black pt-20 mt-10 ">
          Journey Diaries <br /> Share Your Travel Story
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-xl text-black text-center mr-10 p-5">
          "Embark on a journey of shared experiences! Your adventures deserve to
          be heard. Share the highlights of your travels with our community by
          leaving a review. From breathtaking destinations to hidden gems, your
          insights make the world smaller and more connected. Join us in
          creating a tapestry of travel tales – your story begins here!"
        </p>
      </div>

      <form onSubmit={sendData}>
        <div className="p-4 flex justify-between mx-36">
          {/* Form inputs */}
        </div>
      </form>
      <div className="mt-10">
        <Hfotter />
      </div>
    </div>
  );
};

export default TestReview;
