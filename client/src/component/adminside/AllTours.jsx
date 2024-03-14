import React, { useState, useEffect } from "react";
import updateIcn from "../../Images/refresh.png";
import deleteIcn from "../../Images/trash (1).png";
import pdfIcn from "../../Images/file-pdf.png";

const AllTours = () => {
  // State to store fetched data
  const [toursData, setToursData] = useState([]);

  // Function to fetch data from backend
  const fetchToursData = async () => {
    try {
      const response = await fetch("api-url");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setToursData(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchToursData();
  }, []); 

  return (
    <div style={{ padding: "80px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontWeight: "bold", fontSize: "30px", paddingBottom: "20px" }}>All Tour Details</p>
        <img src={pdfIcn} alt="PDF" style={{ width: "40px", height: "40px" }} />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tour Name</th>
            <th scope="col">No Of Days</th>
            <th scope="col">Price</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {toursData.map((tour, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{tour.name}</td>
              <td>{tour.days}</td>
              <td>{tour.price}</td>
              <td><img src={updateIcn} alt="Update" style={{ width: "20px", height: "20px" }} /></td>
              <td><img src={deleteIcn} alt="Delete" style={{ width: "20px", height: "20px" }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTours;
