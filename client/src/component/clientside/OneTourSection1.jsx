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
    <div className="container mt-4" style={{ padding: "10%" }}>
      <div className="row">
        <div className="col-lg-8">
          <h1 className="text-left mb-4" style={{ fontSize: "32px", fontWeight: "bold" }}>
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
          <div className="row justify-content-left">
            <div className="col-lg-12 mb-4 text-center">
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
            <div className="col-lg-12">
              <h2 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>Description</h2>
              <p style={{ fontSize: "18px" }}>{tour.description}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <h2 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>Day Details</h2>
              <ul className="list-group">
                {filteredDayDetails.map((day, index) => (
                  <li key={index} className="list-group-item" style={{ fontSize: "18px" }}>{day}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          {/* Integration of Book With Confidence card */}
          <div className="gdlr-core-widget-box-shortcode" style={{ boxShadow: "0 30px 35px rgba(0, 0, 0,0.09)", MozBoxShadow: "0 30px 35px rgba(0, 0, 0,0.09)", WebkitBoxShadow: "0 30px 35px rgba(0, 0, 0,0.09)", padding: "25px 25px 35px 45px", borderRadius: "10px", MozBorderRadius: "10px", WebkitBorderRadius: "10px", backgroundColor: "#ffffff" }}>
            <div className="gdlr-core-widget-box-shortcode-content">
              <p></p>
              <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top">
                <div className="gdlr-core-title-item-title-wrap ">
                  <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{ fontSize: "23px", fontWeight: "500", letterSpacing: "0px", textTransform: "none", color: "#000" }}>Book With Confidence<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h3>
                </div>
              </div>
              <br />
              <span className="gdlr-core-space-shortcode" style={{ marginTop: "-45px" }}></span>
              <p></p>
              <div style={{ fontSize: "17px", color: "#565656", lineHeight: "2.5" }}>
                <i className="gdl-travel-thumbs-up" style={{ fontSize: "28px", color: "#FFB156", marginRight: "12px" }}></i><span style={{ verticalAlign: "middle", display: "inline-table", marginTop: "-15px" }}>No-hassle best price guarantee</span><br />
                <i className="gdl-travel-hang-up" style={{ fontSize: "28px", color: "#FFB156", marginRight: "10px" }}></i><span style={{ verticalAlign: "middle", display: "inline-table", marginTop: "-15px" }}>Customer care available 24/7</span><br />
                <i className="gdl-travel-star" style={{ fontSize: "28px", color: "#FFB156", marginRight: "10px" }}></i><span style={{ verticalAlign: "middle", display: "inline-table", marginTop: "-15px" }}>Hand-picked Tours & Activities</span><br />
                <i className="gdl-travel-lifebuoy" style={{ fontSize: "28px", color: "#FFB156", marginRight: "10px" }}></i><span style={{ verticalAlign: "middle", display: "inline-table", marginTop: "-15px" }}>Free Travel Insurance</span>
              </div>
            </div>
          </div>
          {/* End of Book With Confidence card */}
        </div>
      </div>
    </div>
  );
};

export default OneTourSection1;
