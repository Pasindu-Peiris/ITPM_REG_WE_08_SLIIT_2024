import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moreDetail from "../../Images/MoreDetails.PNG";
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";
import ImgM from "../../../src/Images/google-maps.png";

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
  const filteredDayDetails = tour.dayDetails.filter((day) => day.trim() !== "");

  // Render tour details
  return (
    <>
      <Nav />
      <div className="container mt-1" style={{ padding: "10%" }}>
        <div className="row">
          <div className="col-lg-9">
            <h1
              className="text-left mb-4"
              style={{ fontSize: "32px", fontWeight: "bold" }}
            >
              {tour.tourName}
              <div
                className="tourmaster-tour-rating"
                style={{ fontSize: "16px" }}
              >
                <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                <span
                  className="tourmaster-tour-rating-text"
                  style={{ fontWeight: "normal" }}
                >
                  (2 Reviews)
                </span>
              </div>
            </h1>
            <img
              src={moreDetail}
              alt="More Details"
              style={{ width: "60%", marginBottom: "20px" }}
            />
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
                <h2
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Detail
                </h2>
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
                <h2
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  What to Expect
                </h2>
                <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                  When choosing a destination for your backpacking trip, it is
                  important to consider the level of difficulty of the trail and
                  the weather conditions. Some popular backpacking destinations
                  include national parks, wilderness areas, and mountain ranges.
                  It is also important to obtain any necessary permits and to be
                  aware of any regulations or rules for the area you plan to
                  visit.
                </p>
                <p style={{ fontSize: "18px", marginBottom: "20px" ,marginLeft: "40px"}}>
                <i class="fa-regular fa-circle-dot" style={{ fontSize: "20px", marginRight: "10px" }}></i>
                View the Nature
                </p>
                <p style={{ fontSize: "18px", marginBottom: "20px" ,marginLeft: "40px"}}>
                <i class="fa-regular fa-circle-dot" style={{ fontSize: "20px", marginRight: "10px" }}></i>
                Hiking in the forest
                </p>
                <p style={{ fontSize: "18px", marginBottom: "20px" ,marginLeft: "40px"}}>
                <i class="fa-regular fa-circle-dot" style={{ fontSize: "20px", marginRight: "10px" }}></i>
                Sunset on the cruise
                </p>
                <p style={{ fontSize: "18px", marginBottom: "20px" ,marginLeft: "40px"}}>
                <i class="fa-regular fa-circle-dot" style={{ fontSize: "20px", marginRight: "10px" }}></i>
                Discover the famous view point “The Lark”
                </p>
              </div>
            </div>

            <hr/>

            <div className="row mt-4">
              <div className="col-lg-12">
                <h2
                  className="mb-4"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Activities
                </h2>
                <p style={{ fontSize: "18px",marginBottom: "20px" }}>
                <i class="fa-solid fa-camera" style={{ fontSize: "20px", marginRight: "10px",marginLeft: "40px"}}></i>
                  Photography
                </p>
                <p style={{ fontSize: "18px" ,marginBottom: "20px"}}>
                <i class="fa-regular fa-moon" style={{ fontSize: "20px", marginRight: "10px" ,marginLeft: "40px"}}></i>
                Night Exploring
                </p>
                <p style={{ fontSize: "18px" ,marginBottom: "20px"}}>
                <i class="fa-solid fa-stopwatch"style={{ fontSize: "20px", marginRight: "10px" ,marginLeft: "40px"}}></i>
                Navigating
                </p>
                <p style={{ fontSize: "18px" ,marginBottom: "20px"}}>
                <i class="fa-solid fa-motorcycle" style={{ fontSize: "20px", marginRight: "10px" ,marginLeft: "40px"}}></i>
                Biking
                </p>
                
                
              </div>
            </div>


            <div className="row mt-4">
              <div className="col-lg-12">
                <hr />
              </div>
            </div>
            <div className="row mt-4" id="itinerary">
              {" "}
              {/* Add id for scrolling */}
              <div className="col-lg-12">
                <h2
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Itinerary
                </h2>
                <ul className="list-group">
                  {filteredDayDetails.map((day, index) => (
                    <React.Fragment key={index}>
                      <li
                        className="list-group-item"
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#fcb900",
                        }}
                      >
                        Day {index + 1}
                      </li>

                      <li
                        className="list-group-item"
                        style={{ fontSize: "18px" }}
                      >
                        {day}
                      </li>
                      <br />
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ marginTop:"130px" }}>
            {/*add map view*/}

            <div className="" >
              <hr className=""></hr>
              <h1 className="mt-4 mb-2 text-2xl fw-bold">Explor Your Tour</h1>
              <p className=" text-amber-500 mb-2">
                You can Explore tour with google map and AI Assistant. <br></br>
                <span className=" p-1 rounded bg-slate-700 text-white">
                  Click Map Icon!
                </span>
              </p>
              <button className="btn  mb-4">
                <a href={`/map2/${tour._id}`}>
                  <img src={ImgM} alt="" width={70} />
                </a>
              </button>
              <hr></hr>
            </div>

            <br />

            <div className="card-body text-center">
  <h5 className="card-title mb-4" style={{ fontSize: "24px", fontWeight: "bold" }}>
    <div className="text-center">Explore Booking</div>
  </h5>
  <p className="card-text mb-2 text-left" style={{ fontSize: "18px", color: "#fcb900",fontWeight: "bold" }}>
    {tour.tourName}
  </p>
  <p className="card-text mb-2 text-left" style={{ fontSize: "18px" }}>
    {tour.numberOfDays} Days
  </p>
  <p className="card-text mb-4 text-left" style={{ fontSize: "18px" }}>
    ${tour.price}
  </p>
  <a href={`/payment/${tour._id}`} className="btn" style={{ backgroundColor: "#fcb900", marginBottom:"10%" }}>
    Book Now
  </a>
</div>

            <hr/>
            <div className="card-body text-center">
  <h5 className="card-title mb-4 mt-5" style={{ fontSize: "24px", fontWeight: "bold" }}>
    <div className="text-center">Book With Confidence</div>
  </h5>
  <p className="card-text mb-3 text-left" style={{ fontSize: "18px"}}>
  <i class="fa-regular fa-thumbs-up" style={{ fontSize: "20px", marginRight: "10px" }}></i>
  No-hassle best price guarantee
  </p>
  <p className="card-text mb-3 text-left" style={{ fontSize: "18px" }}>
  <i class="fa-solid fa-phone" style={{ fontSize: "20px", marginRight: "10px" }}></i>
  Customer care available 24/7
  </p>
  <p className="card-text mb-3 text-left" style={{ fontSize: "18px" }}>
  <i class="fa-regular fa-star" style={{ fontSize: "20px", marginRight: "10px" }}></i>
  Hand-picked Tours & Activities
  </p>
  <p className="card-text mb-3 text-left" style={{ fontSize: "18px" }}>
  <i class="fa-solid fa-shield-heart" style={{ fontSize: "20px", marginRight: "10px" }}></i>
  Free Travel Insureance
  </p>
</div>
<hr/>

<div className="card-body text-center">
  <h5 className="card-title mb-4 mt-5" style={{ fontSize: "24px", fontWeight: "bold" }}>
    <div className="text-center">Need Help?</div>
  </h5>
  <p className="card-text mb-3 text-left" style={{ fontSize: "18px" }}>
  <i class="fa-solid fa-phone" style={{ fontSize: "20px", marginRight: "10px" }}></i>
  1.8445.3356.33
  </p>
  <p className="card-text mb-3 text-left" style={{ fontSize: "18px" }}>
  <i class="fa-regular fa-envelope" style={{ fontSize: "20px", marginRight: "10px" }}></i>
  Help@goodlayers.com
  </p>
  
</div>

<hr/>

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
