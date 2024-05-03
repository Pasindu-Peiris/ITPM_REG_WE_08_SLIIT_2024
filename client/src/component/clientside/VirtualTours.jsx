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

        const imagesData = data.map((item) => ({
          _id: item._id,
          imagePath:
            item.imagePaths && item.imagePaths.length > 0
              ? item.imagePaths[0]
              : item.imagePath,
          title: item.title, // Include the title in the mapped object
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
      <div className="mt-12 text-center">
        <h1 className="text-4xl font-semibold text-gray-900">Virtual Tours</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg"
            key={index}
          >
            <Link to={`/view/${image._id}`}>
              <img
                src={`http://localhost:8090/${image.imagePath}`}
                alt=""
                className="w-full h-52 object-cover transition duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white p-4">
                <p className="text-lg font-semibold">{image.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualTours;
