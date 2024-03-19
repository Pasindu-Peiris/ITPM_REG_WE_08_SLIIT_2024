import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";

const Tours = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await axios.get("http://localhost:8090/tours");
      setTours(response.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      <Nav />
      <div style={{ padding: "140px" }}>
        <div style={{ marginTop: "5px", fontWeight: "bold", fontSize: "24px" }}>Tours</div>
        <div className="container mt-0 mb-4">
          <div className="row">
            {tours.map((tour) => (
              <div key={tour._id} className="col-md-4 mb-4">
                <div className="row">
                  <div className="col">
                  <Link to={`/tours/${tour._id}`}>
                      <img
                        src={tour.images[0]} 
                        alt="Tour Image"
                        className="img-fluid"
                        style={{
                          width: "390px",
                          height: "250px",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p style={{ marginTop: "5px", fontWeight: "bold", fontSize: "24px" }}>{tour.tourName}</p>
                    <p style={{ marginTop: "10px" }}>{tour.numberOfDays} days</p>
                    <p style={{ marginTop: "10px", color: "#fcb900", fontWeight: "bold", fontSize: "20px" }}>
                      From {tour.price} $
                    </p>
                  </div>
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

export default Tours;
