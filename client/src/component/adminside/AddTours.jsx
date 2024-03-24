import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImgBac from "../../Images/hp-blog-bg.jpg";
import close from "../../Images/remove.png";
import axios from "axios";

const AddTours = () => {
  const [tourData, setTourData] = useState({
    tourName: "",
    description: "",
    numberOfDays: 0,
    price: 0,
    dayDetails: {
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      day6: "",
      day7: "",
    },
    image: null,
  });

  const [errors, setErrors] = useState({
    numberOfDays: "",
    tourName: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    let error = "";

    if (type === "file") {
      const selectedImage = files[0];
      setTourData({ ...tourData, image: selectedImage });
    } else if (name.startsWith("day")) {
      setTourData({
        ...tourData,
        dayDetails: {
          ...tourData.dayDetails,
          [name]: value,
        },
      });
    } else {
      if (name === "numberOfDays") {
        if (value < 1 || value > 7) {
          error = "Number of days must be between 1 and 7";
        }
        setErrors({ ...errors, numberOfDays: error });
      }
      setTourData({ ...tourData, [name]: value });
    }
  };

  const handleRemoveImage = () => {
    setTourData({ ...tourData, image: null });
  };

  const handleSubmit = async () => {
    let formErrors = {};

    // Check for errors
    if (!tourData.tourName.trim()) {
      formErrors.tourName = "Tour name is required";
    }
    if (!tourData.description.trim()) {
      formErrors.description = "Description is required";
    }
    if (tourData.numberOfDays < 1 || tourData.numberOfDays > 7) {
      formErrors.numberOfDays = "Number of days must be between 1 and 7";
    }
    if (tourData.price <= 0) {
      formErrors.price = "Price must be greater than 0";
    }

    // Update errors state
    setErrors(formErrors);

    // If there are errors, stop form submission
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("tourName", tourData.tourName);
      formData.append("description", tourData.description);
      formData.append("numberOfDays", tourData.numberOfDays);
      formData.append("price", tourData.price);
      Object.values(tourData.dayDetails).forEach((value, index) => {
        formData.append(`dayDetails[${index}]`, value);
      });

      if (tourData.image) {
        formData.append("image", tourData.image);
      }

      const response = await axios.post(
        "http://localhost:8090/tours",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Tour added successfully!");

      setTimeout(() => {
        window.location.href = "/AllTours";
      }, 2000);
    } catch (error) {
      console.error("Error creating tour:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ImgBac})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Set height to 100vh
        paddingTop: "80px",
        paddingLeft: "30%",
        paddingRight: "30%",
        paddingBottom: "80px",
      }}
    >
      <ToastContainer />
      <div className="card" style={{ padding: "20px", position: "relative" }}>
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Add Tour Details
          </h2>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Tour Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="tourName"
            name="tourName"
            value={tourData.tourName}
            onChange={handleChange}
          />
          {errors.tourName && (
            <span style={{ color: "red" }}>{errors.tourName}</span>
          )}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            name="description"
            value={tourData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description}</span>
          )}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            No of days:
          </label>
          <input
            type="number"
            className="form-control"
            id="numberOfDays"
            name="numberOfDays"
            value={tourData.numberOfDays}
            onChange={handleChange}
          />
          {errors.numberOfDays && (
            <span style={{ color: "red" }}>{errors.numberOfDays}</span>
          )}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={tourData.price}
            onChange={handleChange}
          />
          {errors.price && <span style={{ color: "red" }}>{errors.price}</span>}
        </div>

        {Array.from({ length: tourData.numberOfDays }, (_, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>{`Day ${
              i + 1
            } Details:`}</label>
            <textarea
              className="form-control"
              id={`day${i + 1}`}
              rows="3"
              name={`day${i + 1}`}
              value={tourData.dayDetails[`day${i + 1}`]}
              onChange={handleChange}
            ></textarea>
          </div>
        ))}
        {tourData.image && (
          <div style={{ marginBottom: "10px", position: "relative" }}>
            <img
              src={URL.createObjectURL(tourData.image)}
              alt="Selected Image"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <img
              src={close}
              alt="Close"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
              onClick={handleRemoveImage}
            />
          </div>
        )}
        {!tourData.image && (
          <input
            type="file"
            className="form-control-file"
            accept="image/*"
            onChange={handleChange}
          />
        )}
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "#fcb900",
            color: "black",
            marginBottom: "20px",
            marginTop: "20px",
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
