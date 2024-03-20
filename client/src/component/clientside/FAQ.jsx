import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Img from "../../Images/page-title-bg.png";
import Hfotter from "./Hfotter";
import axios from "axios";

const FAQ =() => {
  /*const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user details from the backend API
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("YOUR_BACKEND_API_URL_HERE");
        setUserDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, []);
*/
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

      <div className="flex items-center" style={addImg}>
        <h1 className="text-center text-4xl font-semibold text-black">FAQ</h1>
        <br/>
        
      </div>
      <div>
      <p style={{ fontSize: "1.2rem", lineHeight: 1.5, textAlign: "center", marginTop: "1rem" }}>
          You can update your profile details
        </p>
      </div>

      <section style={{ padding: "4rem" }}>
        <div>
        
        <div className="grid grid-cols-2  ">
            <div>
          <p>Get in Touch: Click Here to<br/> Share your Questions or Concerns</p>
          
        </div>
        <div>
          <button className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md">
            <a href ="./ContactUs">Contact Us </a>
          </button>
        </div>
        </div>
        </div>
        <div>
        <div className="grid grid-rows gap-6 p-20 border-dashed border-red-400">
          {/*{isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>Subject: {userDetails.subject}</p>
              <p>Message: {userDetails.message}</p>
              <p>Response: {userDetails.response}</p>
          <p>Date: {userDetails.date}</p>*/}
            
            <p>Subject:</p>
            <p>Message:</p>
            <p>Response:</p>
            <p>Date:</p>

        </div>
        </div>
      </section>

      <div className="mt-10">
        <Hfotter />
      </div>
    </div>
  );
}

export default FAQ;
