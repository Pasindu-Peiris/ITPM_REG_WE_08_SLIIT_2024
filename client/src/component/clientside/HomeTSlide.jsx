import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import axios from "axios";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const HomeTSlide = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {


        axios.get("http://localhost:8090/tours").then((res) => {
            //console.log(res);
            setTours(res.data);

        }).catch((err) => {
            alert(err.message);
        })

    }, [])

    const style = {
        width: "100%",
        height: "90vh",
        zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",


    }

    return (
        <div >

            <h1 className='text-4xl text-center'>Tour List</h1>
            <div id="tour" style={style}>



                <div className='container-fluid' id='Slidebar-'>


                    <div class="testimonial-slider container-fluid">
                        <div id="carouselExampleControls" class="carousel carousel-dark">
                            <div class="container-fluid">
                                <div class="row">




                                    <div className='col-md-12' data-aos="fade-up" >
                                        <Carousel responsive={responsive}
                                            autoPlay
                                            autoPlaySpeed={2000}
                                            infinite
                                        >
                                            {tours.map((tour) => {
                                                return (
                                                    <div className='cardBlock-1' style={{ zIndex: "99" }}>
                                                        <div class=" m-3" style={{ zIndex: "999" }}>
                                                            <a href={'/tours/' + tour._id} style={{ textDecoration: "none", color:"#171617" }}>
                                                                <div class="card" id='cardv '>
                                                                    <div class="img-wrapper">
                                                                        <img src={`http://localhost:8090/${tour.images}`} className=" d-block w-100"
                                                                            style={{
                                                                                width: "390px",
                                                                                height: "270px",

                                                                            }} alt={tour.image} />
                                                                    </div>
                                                                    <div class="card-body" id="tit-card">
                                                                        <div className="tourmaster-tour-rating" style={{ fontSize: "16px", paddingTop: "20px" }}>
                                                                            <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                                                                            <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                                                                            <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                                                                            <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                                                                            <i className="fa fa-star" style={{ fontSize: "16px" }}></i>
                                                                            <span className="tourmaster-tour-rating-text" style={{ fontWeight: "normal" }}>(Review)</span>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <p style={{ marginTop: "5px", fontWeight: "bold", fontSize: "24px" }}>{tour.tourName}</p>
                                                                                <p style={{ marginTop: "10px", fontSize: "18px", color: "#696969" }}>{tour.numberOfDays} days</p>
                                                                                <p style={{ marginTop: "10px", color: "#fcb900", fontWeight: "bold", fontSize: "20px" }}>
                                                                                    From ${tour.price}
                                                                                </p>
                                                                            </div>
                                                                        </div>                              </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Carousel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )


}

export default HomeTSlide