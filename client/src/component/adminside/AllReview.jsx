


import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

function AllReviews() {
  const [review, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8090/testreview/read");
        setReviews(response.data);
        console.log(response)
      } catch (error) {
        console.log("Error fetching reviews:", error);
        alert("Something went wrong" + error);
      }
    };
    getReviews();
  }, []);

  const handleDelete = (id) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this?");
    if (confirmDeletion) {
      axios
        .delete(`http://localhost:8090/testreview/delete/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setReviews(review.filter((review) => review._id !== id));
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong" + err);
        });
    }
  };

  const handleExportReport = () => {
    const doc = new jsPDF();
    const tableColumns = ["FullName", "Email", "Review", "Date", "Destination"];
    const tableRows = review.map((review) => [
        review.fullname,
        review.email,
        review.review,
        review.date,
        review.destination,
      
    ]);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month}-${day}`;

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    doc.text(`review Report - ${formattedDate}`, 15, 10);
    doc.save(`review Report - ${formattedDate}.pdf`);

    window.alert("Report downloaded successfully!");
  };

  return (
    <div style={{ padding: "80px" }}>
      <p style={{ fontWeight: "bold", fontSize: "35px", paddingBottom: "20px" }}>All Review Form Submissions</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "30px", paddingBottom: "20px" }}>Received Submissions</p>
        <button
          className="mt-1 w-60 p-2 border bg-amber-500 text-white font-bold rounded-md"
          onClick={handleExportReport}
        >
          Export Report
        </button>
       
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Review</th>
            <th scope="col">Date</th>
            <th scope="col">Destination</th>
            <th scope="col">Images</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {review.map((review) => (
            <tr key={review._id}>
              <td>{review.fullname}</td>
              <td>{review.email}</td>
              <td>{review.review}</td>
              <td>{review.date}</td>
              <td>{review.destination}</td>
              <td>{review.images}</td>
              <td>

              </td>
              <td>
                <button
                  className="mt-1 p-2 border bg-red-800 text-white font-bold rounded-lg"
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllReviews;
