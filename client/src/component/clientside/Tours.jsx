import React from "react";
import imageSrc from "../../Images/aaron-benson-200753-unsplash-900x500.jpg";
import img1 from "../../Images/dino-reichmuth-pl1mhwMctJc-unsplash-900x500.jpg";
import backgroundImageSrc from "../../Images/page-title-bg.png";
import rate from "../../Images/rate.jpg";
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";

const Tours = () => {
  return (
    <>
      <style>
        {`
          .img-fluid {
            transition: transform 0.3s ease;
          }

          .img-fluid:hover {
            transform: scale(1.1);
          }
        `}
      </style>
      <Nav />
      <div style={{ padding: "140px" }}>
        <div
          className="container mt-0 mb-4"
          style={{
            backgroundImage: `url(${backgroundImageSrc})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingBottom: "400px", // Adjust the bottom padding as needed
            paddingTop: "0px", // Added top padding to maintain the total padding
          }}
        >
          {/* <div className="row">
            <div className="col">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div> */}

          <div style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}>Tours</div>
          
        </div>

        <div className="container mb-4">
          <div className="row">
            {/* Grid 1 */}
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
            {/* Grid 2 */}
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
            {/* Grid 3 */}
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid 4 */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={img1}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
            {/* Grid 5 */}
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={img1}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
            {/* Grid 6 */}
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={img1}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* grid 7 */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={img1}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={img1}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img
                      src={img1}
                      alt="Placeholder"
                      className="img-fluid"
                      style={{
                        width: "390px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={rate}
                    alt="Placeholder"
                    className="img-fluid"
                    style={{
                      width: "110px",
                      height: "30px",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Rifugio Giorgio Bertone 7 Days 6 Night
                  </p>
                  <p style={{ marginTop: "10px" }}>7 days 6 night </p>
                  <p style={{ marginTop: "10px" }}>
                    Courmayeur, Aosta Valley, Italy
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#fcb900",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    From 450$
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hfotter />
    </>
  );
};

export default Tours;
