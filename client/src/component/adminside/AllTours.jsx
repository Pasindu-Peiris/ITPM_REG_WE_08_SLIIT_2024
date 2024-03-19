import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import updateIcn from "../../Images/refresh.png";
import deleteIcn from "../../Images/trash (1).png";
import pdfIcn from "../../Images/file-pdf.png";

const AllTours = () => {
  const [toursData, setToursData] = useState([]);

  const fetchToursData = async () => {
    try {
      const response = await fetch("http://localhost:8090/tours");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setToursData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteTour = async (tourId) => {
    try {
      toast.info(
        <div>
          <p>Are you sure! You want to delete this tour?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={async () => {
                const response = await fetch(
                  `http://localhost:8090/tours/${tourId}`,
                  {
                    method: "DELETE",
                  }
                );
                if (response.ok) {
                  setToursData(toursData.filter((tour) => tour._id !== tourId));
                  toast.success("Tour deleted successfully");
                } else {
                  throw new Error("Failed to delete tour");
                }
              }}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss()}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              No
            </button>
          </div>
        </div>,
        {
          position: "top-center",
          autoClose: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        }
      );
    } catch (error) {
      console.error("Error deleting tour:", error);
      toast.error("Failed to delete tour");
    }
  };

  useEffect(() => {
    fetchToursData();
  }, []);

  return (
    <div style={{ padding: "80px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            paddingBottom: "20px",
          }}
        >
          All Tour Details
        </p>
        <img src={pdfIcn} alt="PDF" style={{ width: "40px", height: "40px" }} />
      </div>
      <Link to="/AddTours">
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "6px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ADD
        </button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tour Name</th>
            <th scope="col">No Of Days</th>
            <th scope="col">Price</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
            <th scope="col">Destinations</th>
          </tr>
        </thead>
        <tbody>
          {toursData.map((tour, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{tour.tourName}</td>
              <td>{tour.numberOfDays} days</td>
              <td>{tour.price} $</td>
              <td>
                <Link to={`/UpdateTours/${tour._id}`}>
                  <img
                    src={updateIcn}
                    alt="Update"
                    style={{ width: "20px", height: "20px" }}
                  />
                </Link>
              </td>
              <td>
                <img
                  src={deleteIcn}
                  alt="Delete"
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  onClick={() => deleteTour(tour._id)}
                />
              </td>
              <td>
                <Link
                  to={{
                    pathname: "/addDes",
                    state: { tourId: tour._id },
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "1px 10px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Add
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default AllTours;
