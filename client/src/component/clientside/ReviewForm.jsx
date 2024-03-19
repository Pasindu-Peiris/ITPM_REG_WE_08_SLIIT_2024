import React, { useState } from "react";
import Nav from "./Nav";
import Img from "../../Images/page-title-bg.png";
import Hfotter from "./Hfotter";

function ReviewForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [review, setReview] = useState("");


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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", {
      fullName,
      email,
      date,
      destination,
      review,
    });

  
  };

  return (
    
     
     <div style={{ position: "relative" }}>
      <Nav />

      <div className="flex items-center " style={addImg}>
        <h1 className=" text-center text-4xl font-semibold text-black ">
        Journey Diaries - Share Your Travel Story
        </h1>
      </div>
   

      <section style={{ padding: "4rem" }}>
        
        <p style={{ fontSize: "1.2rem", lineHeight: 1.5 ,textAlign: "center" ,margingTop : "1rem"}}>
          "Embark on a journey of shared experiences! Your adventures deserve to
          be heard. Share the highlights of your travels with our community by
          leaving a review. From breathtaking destinations to hidden gems, your
          insights make the world smaller and more connected. Join us in
          creating a tapestry of travel tales – your story begins here!"
        </p>
       
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "5px",
          }}
        >
            <label
            htmlFor="fullName"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />

          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />

          <label
            htmlFor="date"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />

          <label
            htmlFor="destination"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Destination</label>
          <input
            type="text"
            placeholder="Travel Destination (Optional)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />

          <label
            htmlFor="review"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}>Review</label>
          <textarea
            placeholder="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
          {/* Add star rating component */}
          <button type ="submit" className="mt-1 ml-[25%] p-2 w-[50%] alignItems-center border bg-amber-500 text-white  font-bold">
                    Submit Now
                  </button>
        </form>
      </section>

      <div className="mt-10">
        <Hfotter />
      </div>
    </div>
    
    
  );
}

export default ReviewForm;