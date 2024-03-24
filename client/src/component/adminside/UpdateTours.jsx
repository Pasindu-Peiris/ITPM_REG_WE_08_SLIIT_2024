import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImgBac from "../../Images/hp-blog-bg.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateTours = () => {
  const { id } = useParams();
  const [tourData, setTourData] = useState({
    tourName: "",
    description: "",
    numberOfDays: 0,
    price: 0,
    dayDetails: [],
  });

  const [errors, setErrors] = useState({
    numberOfDays: "",
    tourName: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/tours/${id}`);
        setTourData(response.data);
      } catch (error) {
        console.error("Error fetching tour data:", error);
      }
    };

    fetchTourData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name.startsWith("day")) {
      const dayIndex = parseInt(name.slice(3)) - 1;
      const updatedDayDetails = [...tourData.dayDetails];
      updatedDayDetails[dayIndex] = value;
      setTourData({ ...tourData, dayDetails: updatedDayDetails });
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
      const response = await axios.put(
        `http://localhost:8090/tours/${id}`,
        tourData
      );
      console.log("Tour updated:", response.data);
      toast.success("Tour updated successfully!");
      setTimeout(() => {
        window.location.href = "/AllTours";
      }, 2000);
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ImgBac})`,
        paddingTop: "80px",
        paddingLeft: "20%",
        paddingRight: "20%",
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
            Update Tour Details
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
              value={tourData.dayDetails[i] || ""}
              onChange={handleChange}
            ></textarea>
          </div>
        ))}
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "#fcb900",
            color: "black",
            marginBottom: "20px",
          }}
          onClick={handleSubmit}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateTours;
