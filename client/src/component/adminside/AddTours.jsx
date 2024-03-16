import React, { useState } from "react";
import ImgBac from "../../Images/hp-blog-bg.jpg";
import close from "../../Images/remove.png";
import axios from 'axios';

const AddTours = () => {
  const [tourData, setTourData] = useState({
    tourName: "",
    description: "",
    numberOfDays: 0,
    price: 0,
    images: []
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const selectedImages = Array.from(files).slice(0, 5);
      const imageUrls = selectedImages.map(image => URL.createObjectURL(image));
      setTourData({ ...tourData, images: imageUrls });
    } else {
      setTourData({ ...tourData, [name]: value });
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...tourData.images];
    updatedImages.splice(index, 1);
    setTourData({ ...tourData, images: updatedImages });
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting tour data:", tourData);
      const response = await axios.post('http://localhost:8090/tours', tourData);
      console.log("Tour created:", response.data);
    } catch (error) {
      console.error("Error creating tour:", error);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${ImgBac})`, padding: '100px' }}>
      <div className="card" style={{ padding: '20px', position: 'relative' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>Add Tour Details</h2>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Tour Name:</label>
          <input
            type="text"
            className="form-control"
            id="tourName"
            name="tourName"
            value={tourData.tourName}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            name="description"
            value={tourData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>No of days:</label>
          <input
            type="number"
            className="form-control"
            id="numberOfDays"
            name="numberOfDays"
            value={tourData.numberOfDays}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={tourData.price}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px', display: 'flex', flexWrap: 'wrap' }}>
          {tourData.images.map((image, index) => (
            <div key={index} style={{ position: 'relative', marginRight: '10px', marginBottom: '10px', maxWidth: '200px' }}>
              <img
                src={image}
                alt={`Image ${index}`}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <img
                src={close}
                alt="Close"
                style={{ position: 'absolute', top: '0', right: '0', width: '20px', height: '20px', cursor: 'pointer' }}
                onClick={() => handleRemoveImage(index)}
              />
            </div>
          ))}
          {tourData.images.length < 5 && (
            <input
              type="file"
              className="form-control-file"
              accept="image/*"
              onChange={handleChange}
              multiple
            />
          )}
        </div>
        <button 
          type="button" 
          className="btn" 
          style={{ 
            backgroundColor: '#fcb900', 
            color: 'black', 
            marginBottom: '20px' 
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTours;
