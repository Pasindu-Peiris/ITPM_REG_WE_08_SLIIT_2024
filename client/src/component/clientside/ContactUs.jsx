import React, { useState } from "react";
import Nav from "./Nav";
import Img from "../../Images/page-title-bg.png";
import Hfotter from "./Hfotter";
import Img1 from "../../Images/phone.png";
import Img2 from "../../Images/mail.png";
import Img3 from "../../Images/location.png";
import axios from "axios";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
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

  const addImg2 = {
    width: "100%",
    height: "30vh",
    justifyContent: "center",
  };

  const table = {
    /*border: "1px solid black",*/
    width: "100%",
    justifyContent: "center",
  };

  const th = {
    /*border: "1px solid black",*/
    allignItems: "center",
    width: "50%",
  };

  // State variables for form inputs and validations
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [subjectValid, setSubjectValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  // Validation functions
  const validateName = (value) => {
    const isValid = /^[A-Za-z\s]+$/.test(value);
    setNameValid(isValid);
    return isValid;
  };
  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailValid(isValid);
    return isValid;
  };
  const validatePhone = (value) => {
    const isValid = /^\d{10}$/.test(value);
    setPhoneValid(isValid);
    return isValid;
  };
  const validateSubject = (value) => {
    const isValid = /^[A-Za-z\s]+$/.test(value);
    setSubjectValid(isValid);
    return isValid;
  };
  const validateMessage = (value) => {
    const isValid = value.trim() !== "";
    setMessageValid(isValid);
    return isValid;
  };

  // Function to handle form submission
  const sendData = (e) => {
    e.preventDefault();

    // Perform validation
    const isValidName = validateName(name);
    const isValidEmail = validateEmail(email);
    const isValidPhone = validatePhone(phone);
    const isValidSubject = validateSubject(subject);
    const isValidMessage = validateMessage(message);

    if (
      isValidName &&
      isValidEmail &&
      isValidPhone &&
      isValidSubject &&
      isValidMessage
    ) {
      const newContact = {
         name,
         email,
         phone,
         subject,
         message,
      };

      axios
        .post("http://localhost:8090/contactus/add", newContact)
        .then(() => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            theme: "dark",
            transition: Bounce,
          });
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
        })
        .catch((err) => {
          alert(err + "Please fill in all required fields and try again. " );
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
      <ToastContainer />
      <div className="flex items-center " style={addImg}>
        <h1 className=" text-center text-4xl font-semibold text-black ">
          Contact Us
        </h1>
      </div>
      {/* Form section */}
      <div>
        <table style={table}>
          <tr>
            {/* Left Column */}
            <th style={th}>
              <p className=" text-xl text-black text-center mr-10">
                We're here to help!If you have any questions or concerns, please
                don't hesitate to reach out to us.
              </p>
              <br />
              <p className="text-xs text-gray-500 text-center ">
                Our customer service hours are Monday-Friday,9:00 AM - 5:00 PM
                EST
              </p>
            </th>
            {/* Right Column - Form */}
            <th style={th}>
              <p className=" text-xl text-black text-center ">
                Or use the form below
              </p>
            </th>
          </tr>
          <tr>
            <td style={th}>
              <tr style={addImg2}>
                <td style={th}>
                  <img src={Img1} alt="" width={140} className="mx-24 " />
                </td>
                <td style={th}>
                  <h1 className="text-2xl font-semibold p-1">
                    Reach Us By Phone
                  </h1>
                  <p className="p-1 text-xl">+1-2345-2345</p>
                </td>
              </tr>

              <tr style={addImg2}>
                <td style={th}>
                  <img src={Img2} alt="" width={140} className="mx-24" />
                </td>
                <td style={th}>
                  <h1 className="text-2xl font-semibold p-2">Email</h1>
                  <p className="p-1 text-xl">contact@campertheme.com</p>
                </td>
              </tr>

              <tr style={addImg2}>
                <td style={th}>
                  <img src={Img3} alt="" width={140} className="mx-24" />
                </td>
                <td style={th}>
                  <h1 className="text-2xl font-semibold p-2">Address</h1>
                  <p className="p-1 text-xl">
                    11086 Auahi St 170, Honolulu, HI 96814, United States
                  </p>
                </td>
              </tr>
            </td>

            <td style={th}>
              <div className="w-[60%] mx-auto mt-4 border-b border-gray-400 pb-8">
                <form onSubmit={sendData}>
                  <label className="block text-md font-medium">Full Name</label>
                  <br />
                  <input
                    type="text"
                    className={`"mt-1 p-2 border w-full
                     ${nameValid ? "" : "is-invalid"}`}
                    id="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      validateName(e.target.value);
                    }}
                  />
                  {!nameValid && <p className="text-red-500">Invalid name</p>}
                  <br />
                  <label className="block text-md font-medium">Email</label>
                  <br />
                  <input
                    type="email"
                    className={`"mt-1 p-2 border w-full 
                  ${emailValid ? "" : "is-invalid"}`}
                    id="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                  />
                  {!emailValid && <p className="text-red-500">Invalid email</p>}
                  <br />

                  <label className="block text-md font-medium">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="text"
                    className={`"mt-1 p-2 border w-full 
                  ${phoneValid ? "" : "is-invalid"}`}
                    id="Phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      validatePhone(e.target.value);
                    }}
                  />
                  {!phoneValid && (
                    <p className="text-red-500">Invalid phone number</p>
                  )}
                  <br />
                  <label className="block text-md font-medium">Subject</label>
                  <br />
                  <input
                    type="text"
                    className={`"mt-1 p-2 border w-full 
                  ${subjectValid ? "" : "is-invalid"}`}
                    id="Subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  {!subjectValid && (
                    <p className="text-red-500">Invalid subject</p>
                  )}
                  <br />
                  <label className="block text-md font-medium">Message</label>
                  <br />
                  <textarea
                    type="text"
                    className="mt-1 p-3 border w-full"
                    id="Message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      validateMessage(e.target.value);
                    }}
                  />
                  {!messageValid && (
                    <p className="text-red-500">Invalid message</p>
                  )}
                  <br />

                  <button
                    type="submit"
                    className="mt-1 p-2 w-full border bg-amber-500 text-white  font-bold"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </table>
      </div>
      {/* Footer Section */}
      <div className="mt-10">
        <Hfotter />
      </div>
    </div>
  );
};
export default ContactUs;
