import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moreDetail from "../../Images/MoreDetails.PNG";
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";
import ImgM from '../../../src/Images/google-maps.png'

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
    <>
      <Nav />
      <div className="container mt-1" style={{ padding: "10%" }}>
        <div className="row">
          <div className="col-lg-9">
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
            <img src={moreDetail} alt="More Details" style={{ width: "60%", marginBottom: "20px" }} />
            <div className="row justify-content-left">
              <div className="col-lg-12 mb-4 text-center">
                {tour.images && ( // Check if tour.images exists
                  <Link to={`/tours/${id}`}>
                    <img
                      src={`http://localhost:8090/${tour.images}`} // Make sure tour.images is correctly accessed
                      alt="Main Tour Image"
                      className="img-fluid rounded shadow"
                      style={{ width: "100%", height: "450px" }}
                    />
                  </Link>
                )}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <h2 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>Detail</h2>
                <p style={{ fontSize: "18px" }}>{tour.description}</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <hr />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <h2 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>What to Expect</h2>
                <p style={{ fontSize: "18px" }}>When choosing a destination for your backpacking trip, it is important to
                  consider the level of difficulty of the trail and the weather conditions. Some popular backpacking destinations
                  include national parks, wilderness areas, and mountain ranges. It is also important to obtain any necessary permits
                  and to be aware of any regulations or rules for the area you plan to visit.

                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <hr />
              </div>
            </div>
            <div className="row mt-4" id="itinerary"> {/* Add id for scrolling */}
              <div className="col-lg-12">
                <h2 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>Itinerary</h2>
                <ul className="list-group">
                  {filteredDayDetails.map((day, index) => (
                    <React.Fragment key={index}>
                      <li className="list-group-item" style={{ fontWeight: "bold", backgroundColor: "#fcb900" }}>Day {index + 1}</li>

                      <li className="list-group-item" style={{ fontSize: "18px" }}>{day}</li>
                      <br />
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            {/*add map view*/}

            <div className="">
              <hr className=""></hr>
              <h1 className="mt-4 mb-2 text-2xl fw-bold">Explor Your Tour</h1>
              <p className=" text-amber-500 mb-2">You can Explore tour with google map and AI Assistant. <br></br>
                <span className=" p-1 rounded bg-slate-700 text-white">Click Map Icon!</span></p>
              <button className="btn  mb-4"><a href={`/map2/${tour._id}`}><img src={ImgM} alt="" width={70} /></a></button>
              <hr></hr>

            </div>
            {/* booking */}

            {/* */}
          </div>
        </div>
      </div>
      <Hfotter />
    </>
  );
};

export default OneTourSection1;
