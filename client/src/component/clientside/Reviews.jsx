import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";
import titelImg from "../../Images/page-title-bg.png";

const Avatar = ({ size }) => {
  let width = "40";
  let height = "40";
  if (size === "lg") {
    width = "65";
    height = "65";
  }
  return (
    <div
      className={`w-${width} h-${height} rounded-full overflow-hidden mg-auto`}
    >
      <img
        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: "50%",
        }}
        alt="Avatar"
      />
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8090/testreview/read")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredReviews = reviews.filter((review) =>
    review.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Nav />
      <div style={{ position: "relative", paddingBottom: "15%" }}>
        <img
          src={titelImg}
          alt="Page Title"
          style={{
            width: "100%",
            position: "absolute",
            top: "0%",
            left: 0,
            zIndex: -1,
          }}
        />
      </div>
      <div>
        <h1 className=" text-center text-4xl font-semibold text-black ">
          Review List
        </h1>
      </div>
      <div
        style={{ paddingTop: "10%", textAlign: "right", paddingRight: "10%" }}
      >
        <input
          type="text"
          placeholder="Search Destination..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: "50%",
            maxWidth: "600px",
            padding: "15px",
            border: "3px solid #fcb900",
            boxSizing: "border-box",
            outline: "none",
            fontSize: "18px",
            borderRadius: "10px",
          }}
        />

        <button
          type="Button"
          className="mt-1 ml-5 p-2 w-40 border bg-amber-500 text-white  font-bold rounded"
        >
          <a href="/testreview">Add your review</a>
        </button>
      </div>

      <div
        style={{
          paddingTop: "3%",
          paddingLeft: "140px",
          paddingRight: "140px",
        }}
      >
        <div className="container mt-0 mb-4">
          <div className="row">
            {filteredReviews.map((review) => (
              <div className="cardBlock-1" key={review._id}>
                <div className="m-3">
                  <a
                    href={"/reviews/" }
                    style={{ textDecoration: "none", color: "#171617" }}
                  >
                    <div className="card" id="cardv">
                      <div
                        className="card-body"
                        id="tit-card"
                        style={{ height: "300px", overflow: "hidden" }}
                      >
                        <Avatar size="lg" />
                        <p
                          style={{
                            marginTop: "5px",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          {" "}
                          {review.fullName}
                        </p>
                        <div
                          className="tourmaster-tour-rating"
                          style={{
                            fontSize: "16px",
                            paddingTop: "20px",
                          }}
                        >
                          <i
                            className="fa fa-star"
                            style={{ fontSize: "16px" }}
                          ></i>
                          <i
                            className="fa fa-star"
                            style={{ fontSize: "16px" }}
                          ></i>
                          <i
                            className="fa fa-star"
                            style={{ fontSize: "16px" }}
                          ></i>
                          <i
                            className="fa fa-star"
                            style={{ fontSize: "16px" }}
                          ></i>
                          <i
                            className="fa fa-star"
                            style={{ fontSize: "16px" }}
                          ></i>
                          <span
                            className="tourmaster-tour-rating-text"
                            style={{ fontWeight: "normal" }}
                          >
                            (Review)
                          </span>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p
                              style={{
                                marginTop: "10px",
                                fontSize: "18px",
                                color: "#fcb900",
                              }}
                            >
                              {" "}
                              : {review.destination}
                            </p>
                            <p
                              style={{
                                marginTop: "10px",
                                color: "#696969",
                                fontSize: "16px",
                              }}
                            >
                              {" "}
                              {review.review}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Hfotter />
    </>
  );
};

export default Reviews;
