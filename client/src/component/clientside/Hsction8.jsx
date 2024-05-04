import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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

const Hsction8 = ({}) => {
  const [reviews, setReviews] = useState([]);

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

  return (
    <div className="p-3">
      <h1 className="text-4xl text-center">Reviews List</h1>
      <div className="container-fluid" id="Slidebar-">
        <div className="testimonial-slider container-fluid">
          <div id="carouselExampleControls" className="carousel carousel-dark">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12" data-aos="fade-up">
                  <Carousel
                    responsive={responsive}
                    autoPlay
                    autoPlaySpeed={2000}
                    infinite
                  >
                    {reviews.map((review) => (
                      <div className="cardBlock-1" key={review._id}>
                        <div className="m-3">
                          <a
                            href={"/reviews" }
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
                                      {review.review.length > 150
                                        ? review.review.substring(0, 150) +
                                          "..."
                                        : review.review}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hsction8;
