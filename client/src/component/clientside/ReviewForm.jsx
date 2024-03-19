import React, { useState } from "react";
import Nav from "./Nav";
import Img from "../../Images/page-title-bg.png";
import Hfotter from "./Hfotter";

const ReviewForm = () => {
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

      <div className="flex items-center justify-center">
        <p className="text-xs text-gray-600 ">
          "Embark on a journey of shared experiences! Your adventures deserve to
          be heard. Share the highlights of your travels with our community by
          leaving a review. From breathtaking destinations to hidden gems, your
          insights make the world smaller and more connected. Join us in
          creating a tapestry of travel tales – your story begins here!"
        </p>
      </div>
<form>
      <div class="p-4 flex justify-between mx-36">
        <div class=" w-1/2 h-96 mr-36 bg-red-500 ">Div 1</div>
        <div class=" w-1/2 h-96 bg-blue-500">Div 2</div>
      </div>
</form>
      <div className="mt-10">
        <Hfotter />
      </div>
    </div>
  );
};

export default ReviewForm;
