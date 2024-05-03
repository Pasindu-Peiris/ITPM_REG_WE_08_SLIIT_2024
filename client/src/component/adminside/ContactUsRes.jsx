import React, { useState, useEffect } from "react";
import Nav from "../clientside/Nav";
import Img from "../../Images/page-title-bg.png";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsRes = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false); // State variable for edit mode
  

  useEffect(() => {
    // Fetch data from backend using ID (assuming you have the ID)
    const fetchContact = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/contactus/${id}`);
        setContact(response.data);

          // Set responseText to current response data only if not in edit mode
          if (!editMode) {
            setResponseText(response.data.response);
          }
      } catch (error) {
        console.log("Error fetching contact:", error);
        alert("Something went wrong" + error);
      }
    };
    fetchContact();
  },  [id, editMode]); // Add id and editMode to the dependency array

  if (!contact) {
    return <div>Loading...</div>;
  }

 /* const sendData = async (e) => {
    e.preventDefault();

    try {
      const postResponse = await axios.post("http://localhost:8090/contactus/addresponse", {
        id: contact._id,
        response: responseText,
      });
    
      console.log("Response submitted:", postResponse.data);
      toast.success("Response saved successfully", 
      {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      }
        );
      window.history.back();
    } catch (error) {
      toast.error("Error submitting response:", error ,
    {
      position: "top-center",
      theme: "dark",
      transition: Bounce,
    });
      setError("Something went wrong while submitting the response.");
    }
  };
*/

const sendData = async (e) => {
  e.preventDefault();

  try {
    if (editMode) {
      // If in edit mode, update the response
      await axios.put(`http://localhost:8090/contactus/${id}`, {
        response: responseText,
      });
      toast.success("Response updated successfully", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
    } else {
      // If not in edit mode, add a new response
      await axios.post("http://localhost:8090/contactus/addresponse", {
        id: contact._id,
        response: responseText,
      });
      toast.success("Response saved successfully", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
    }
    window.history.back();
  } catch (error) {
    toast.error("Error submitting response:", error, {
      position: "top-center",
      theme: "dark",
      transition: Bounce,
    });
    setError("Something went wrong while submitting the response.");
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

      <form onSubmit={sendData}>

      <div className="grid grid-cols-2 gap-4 p-10 ">
    
          <div>
            <label className="block text-md font-medium mr-2">Full Name</label>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded"
              value={contact.name}
              readOnly
            />
            <br />
            <label className="block text-md font-medium">Email</label>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded"
              value={contact.email}
              readOnly
            />
            <br />
            <label className="block text-md font-medium">Phone</label>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded"
              value={contact.phone}
              readOnly
            />
            <br />
            <label className="block text-md font-medium">Subject</label>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded"
              value={contact.subject}
              readOnly
            />
            <br />
            <label className="block text-md font-medium">Message</label>
            <textarea
              className="mt-1 p-2 border w-full rounded"
              value={contact.message}
              readOnly
            />
            <br />
          </div>
          
          
          
          <div>
            <label className="block text-md font-medium">Response</label>
            <textarea
              rows={10}
              className="mt-1 p-2 border w-full rounded"
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              required
            />
            <br />
            <div className="grid grid-cols-3 gap-6 p-10">
             {/* <button
                type="submit"
                className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md"
              >
                Save
              </button>
              <button className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md">
                 Update
              </button>

              <button
                className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md"
                onClick={() => window.history.back()}
              >
                Back
  </button>*/}
              
              <button
                type="submit"
                className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md"
              >
                {editMode ? "Update" : "Save"}
              </button>
              <button
                className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md"
                onClick={() => setEditMode(!editMode)} // Toggle edit mode
              >
                {editMode ? "Cancel" : "Edit"}
              </button>

              <button
                className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md"
                onClick={() => window.history.back()}
              >
                Back
              </button>
  
            </div>
          </div> 
        </div>
        </form>
      {error && <div className="error-message">{error}</div>}
      <ToastContainer />
    </div>
  );
};

export default ContactUsRes;
