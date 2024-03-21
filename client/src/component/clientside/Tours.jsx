import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";
import titelImg from "../../Images/page-title-bg.png";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTours = tours.filter((tour) =>
    tour.tourName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Nav />
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search Tours..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <img
          src={titelImg}
          alt="Page Title"
          style={{ width: "100%", position: "absolute", top: "60px", left: 0, zIndex: -1 }}
        />
      </div>
      <div style={{ paddingTop: "200px", paddingLeft: "140px", paddingRight: "140px" }}>
        <div className="container mt-0 mb-4">
          <div className="row">
            {filteredTours.map((tour) => (
              <div key={tour._id} className="col-md-4 mb-4">
                <div className="row">
                  <div className="col">
                    <Link to={`/tours/${tour._id}`}>
                      <img
                        src={`http://localhost:8090/${tour.images}`} 
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
                    <p style={{ marginTop: "10px",fontSize: "18px" }}>{tour.numberOfDays} days</p>
                    <p style={{ marginTop: "10px", color: "#fcb900", fontWeight: "bold", fontSize: "20px" }}>
                      From ${tour.price}
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
