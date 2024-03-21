import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moreDetail from "../../Images/MoreDetails.PNG";

const OneTourSection1 = () => {
  const { id } = useParams(); // Extract id from URL parameters
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/tours/${id}`);
        setTour(response.data);
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };

    fetchTour();
  }, [id]); // Dependency on id to re-fetch when it changes

  if (!tour) {
    return <div>Loading...</div>;
  }

  // Filter out empty day details
  const filteredDayDetails = tour.dayDetails.filter(day => day.trim() !== "");

  // Render tour details
  return (
    <div className="container mt-4" style={{ padding: "100px" }}>
      <h1 className="text-left mb-4" style={{ fontSize: "32px", fontWeight: "bold"}}>
        {tour.tourName}
        <div className="tourmaster-tour-rating" style={{ fontSize: "16px" }}>
          <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
          <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
          <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
          <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
          <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
          <span className="tourmaster-tour-rating-text" style={{ fontWeight: "normal" }}>(2 Reviews)</span>
        </div>
      </h1>
      <Link to={`/tours/${id}`}>
        <img src={moreDetail} alt="More Details" style={{ width: "50%", marginBottom: "20px" }} />
      </Link>
      <div className="row justify-content-center">
        <div className="col-lg-8 mb-4 text-center">
          {tour.images && ( // Check if tour.images exists
            <Link to={`/tours/${id}`}>
              <img
                src={`http://localhost:8090/${tour.images}`} // Make sure tour.images is correctly accessed
                alt="Main Tour Image"
                className="img-fluid rounded shadow"
                style={{ width: "100%" }}
              />
            </Link>
          )}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6">
          <h2 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>Description</h2>
          <p style={{ fontSize: "18px" }}>{tour.description}</p>
        </div>
        <div className="col-lg-6">
          <h2 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>Day Details</h2>
          <ul className="list-group">
            {filteredDayDetails.map((day, index) => (
              <li key={index} className="list-group-item" style={{ fontSize: "18px"}}>{day}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OneTourSection1;
