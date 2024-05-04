import React, { useState, useEffect } from 'react';
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

const HomeBSlide = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }} className='p-5'>
      <h1 className="text-4xl text-center mb-4">Blog List</h1>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2000}
        infinite
      >
        {blogs.map((blog) => (
          <div key={blog._id} style={{ padding: '10px' }}>
            <a href={`/SingleBlog/${blog._id}`} style={{ textDecoration: 'none', color: '#333' }}>
              <div className="card" style={{ border: 'none' }}>
                <div className="img-wrapper">
                  <img
                    src={blog.FeaturedImage}
                    alt={blog.Title}
                    className="d-block w-100"
                    style={{
                      height: '300px', // Reduced height
                      objectFit: 'cover', 
                      borderRadius: '10px',
                      transition: 'transform 0.3s', // Added hover effect
                    }}
                    onMouseOver={() => (document.querySelector('.img-wrapper').style.transform = 'scale(1.05)')}
                    onMouseOut={() => (document.querySelector('.img-wrapper').style.transform = 'scale(1)')}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{blog.Title}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBSlide;
