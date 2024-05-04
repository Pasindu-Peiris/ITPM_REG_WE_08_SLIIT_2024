//AllBlog

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import updateIcn from "../../Images/refresh.png";
import deleteIcn from "../../Images/trash (1).png";
import jsPDF from "jspdf";
import Dashboard from "./Dashboard";

const AllBlog = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBlogsData = async () => {
    try {
      const response = await fetch("http://localhost:8090/blogs");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogsData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteBlog = async (blogId) => {
    try {
      toast.info(
        <div>
          <p>Are you sure you want to delete this blog?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={async () => {
                const response = await fetch(
                  `http://localhost:8090/blogs/${blogId}`,
                  {
                    method: "DELETE",
                  }
                );
                if (response.ok) {
                  setBlogsData(blogsData.filter((blog) => blog._id !== blogId));
                  toast.success("Blog deleted successfully");
                } else {
                  throw new Error("Failed to delete blog");
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
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const generateReport = () => {
    const filteredData = blogsData.filter((blog) =>
      blog.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Define columns for the table
    const columns = ["Title", "Author", "Category","Content","Excerpt","PublishDate"];

    // Define rows
    const rows = filteredData.map((blog) => [blog.Title, blog.Author, blog.Category, blog.Content,blog.Excerpt, formatDate(blog.PublishDate)]);

    // Add table to the PDF
    doc.autoTable({ columns, body: rows });

    // Save the PDF
    doc.save("filtered_data.pdf");
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  return (
    <>
    <Dashboard/>
    <div style={{ padding: "80px", paddingTop: "10%" }}>
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
          All Blog Details
        </p>
        <div>
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ marginRight: "10px" }}
          />
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={generateReport}
          >
            Generate Report
          </button>
        </div>
      </div>
      <Link to="/AddBlog">
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
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {blogsData
            .filter((blog) =>
              blog.Title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((blog, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{blog.Title}</td>
                <td>{blog.Author}</td>
                <td>{blog.Category}</td>
                <td>
                  <Link to={`/UpdateBlog/${blog._id}`}>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteBlog(blog._id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
    </>
  );
};

export default AllBlog;
