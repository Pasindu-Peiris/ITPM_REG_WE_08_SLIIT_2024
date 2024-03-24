import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import SphereViewer from "./SphereViewer";
import Footer from "./Hfotter";
import "../CSS/style.css";

const View = () => {
  const [images, setImages] = useState([]);
  const [musicPath, setMusicPath] = useState("");
  const { id } = useParams();

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8090/api/image/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch image data");
      }
      const data = await response.json();
      console.log("API Response:", data);

      if (Array.isArray(data.imagePaths)) {
        setImages(data.imagePaths);
      } else {
        setImages([data.imagePaths]);
      }

      setMusicPath(data.musicPath || ""); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [id]);

  return (
    <div>
      <Nav />

      <div className="main-container">
        <SphereViewer
          imageUrl={
            images.length > 0 ? `http://localhost:8090/${images[0]}` : ""
          }
          imagePaths={images.map((path) => `http://localhost:8090/${path}`)}
          musicPath={musicPath ? `http://localhost:8090/${musicPath}` : ""}
        />
      </div>
      <Footer />
    </div>
  );
};

export default View;
