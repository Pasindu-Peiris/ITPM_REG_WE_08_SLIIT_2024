import React, { useState } from "react";
import Nav from "../clientside/Nav";
import Img from "../../Images/page-title-bg.png";

import axios from "axios";

const ContactUsRes = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    try {
      // Send data to the server
      const response = await axios.post("URL_HERE", {
        name,
        email,
        phone,
        subject,
        message,
        response, // Corrected variable name here
      });

      // Handle success
      console.log("Response submitted:", response.data);
    } catch (error) {
      // Handle error
      setError(error.response.data.message);
    }
  };

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

  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <div className="flex items-center " style={addImg}>
        <h1 className="text-center text-4xl font-semibold text-black ">
          Add Response
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-10 ">
        <div>
          <form onSubmit={sendData}>
            <label className="block text-md font-medium mr-2">Full Name</label>
            <input type="text" className="mt-1 p-2 border w-full rounded" value={name} readOnly />
            <br />
            <label className="block text-md font-medium">Email</label>
            <input type="text" className="mt-1 p-2 border w-full rounded" value={email} readOnly />
            <br />
            <label className="block text-md font-medium">Phone</label>
            <input type="text" className="mt-1 p-2 border w-full rounded" value={phone} readOnly />
            <br />
            <label className="block text-md font-medium">Subject</label>
            <input type="text" className="mt-1 p-2 border w-full rounded" value={subject} readOnly />
            <br />
            <label className="block text-md font-medium">Message</label>
            <textarea className="mt-1 p-2 border w-full rounded" value={message} readOnly />
            <br />
          </form>
        </div>

        <div>
            <div>
          <label className="block text-md font-medium">Response</label>
          <textare
            className="mt-1 p-2 border w-full rounded"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            required
          />
          <br/>
          <div>
          <button type="submit" onClick={sendData}>
            Submit
          </button>
          </div>
          
        </div>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ContactUsRes;
