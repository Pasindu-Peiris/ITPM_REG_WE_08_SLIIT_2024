import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";



const VirtualTours = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8090/api/images/all");
        const data = await response.json();
        console.log(data);

        const imagesData = data.map((item) => ({
          _id: item._id,
          imagePath:
            item.imagePaths && item.imagePaths.length > 0
              ? item.imagePaths[0]
              : item.imagePath,
        }));
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="mt-36">
        <h1 className="text-center text-4xl font-semibold text-black">
          Virtual Tours
        </h1>
      </div>
      <div class="mt-4 flex justify-center flex-wrap">
        {images.map((image, index) => (
          <div class=" w-80 h-80 relative overflow-hidden" key={index}>
            <Link to={`/view/${image._id}`}>
              <img
                src={`http://localhost:8090/${image.imagePath}`}
                alt=""
                className="absolute h-72 w-72 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualTours;
