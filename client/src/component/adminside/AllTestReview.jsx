/*import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Hsction8 from "../clientside/Hsction8";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Dashboard";

function AllTestReview() {
    const [reviews,setreviews] =useState([]);
    const [selectedReview, setSelectedReview] = useState(null); // State for selected review   
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const getReviews =async () => {
            try {
                const response = await axios.get("http://localhost:8090/testreview/read");
                setreviews(response.data);
              } catch (error) {
                console.log("Error fetching reviews:", error);
                alert("Something went wrong" + error);
              } 
        };
        getReviews();
    },[]);

    const handleDelete = (id) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this?");
        if (confirmDeletion) {
          axios
            .delete(`http://localhost:8090/testreview/delete/${id}`)
            .then((res) => {
              if (res.status === 200) {
                setreviews(reviews.filter((review) => review._id !== id));
              }
            })
            .catch((err) => {
              console.log(err);
              alert("Something went wrong" + err);
            });
        }
      }; 

     const handleEdit  = (id) => {
        const reviewToEdit = reviews.find((review) => review._id === id);
        setSelectedReview(reviewToEdit);
    };

      const handleUpdate = (id) => {
        const confirmUpdate = window.confirm("Are you sure you want to update this?");
        if (confirmUpdate) {
            axios
            .put(`http://localhost:8090/testreview/update/${id}`, selectedReview)
            .then((res) => {
                if (res.status === 200) {
                    const updatedReviews = reviews.map((review) => {
                        return review._id === id ? selectedReview : review;
                    });
                    setReviews(updatedReviews);
                    setSelectedReview(null);
                    toast.success("Review updated successfully !");
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
        const tableRows = reviews.map((review) => [
          review.fullName,
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
        doc.text(`Reviews Report - ${formattedDate}`, 15, 10);
        doc.save(`Reviews Report - ${formattedDate}.pdf`);
    
        window.alert("Report downloaded successfully!");
      };

      return (
        <>
       <Dashboard/>
       
        <div style={{ padding: "80px", paddingTop: "10%"  }}>
            
          <div 
          
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "30px", paddingBottom: "20px" }}>Review Submissions</p>
            <button
              className="mt-1 w-60 p-2 border bg-amber-500 text-white  font-bold rounded-md"
              onClick={handleExportReport}
            >
              Export Report
            </button>


            <div className="relative flex">
          <input
            type="text"
            placeholder="Search..."
            className={`px-4 py-2 border rounded-l-lg flex-1 ${(searchInput.length > 0 && /^[0-9]/.test(searchInput)) ||
                (searchInput.length > 0 && /^[^a-zA-Z]/.test(searchInput))
                ? 'border-red-500'
                : 'border-gray-300'
              }`}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput.length > 0 && /^[0-9]/.test(searchInput) && (
            <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-full">Search term cannot start with a number</p>
          )}
          {searchInput.length > 0 && /^[^a-zA-Z]/.test(searchInput) && (
            <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-full">Search term cannot start with a special character</p>
          )}
          <button className="px-4 font-semibold bg-amber-500 text-white rounded-r-lg hover:bg-amber-700 hover:text-white">
            Search
          </button>

        </div>
            
            
          </div>
          <table className="table table-striped">
            <thead>
              <tr>  
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Review</th>
                <th scope="col">Date</th>
                <th scope="col">Destination</th>
                <th scope="col">      </th>
                <th scope="col">      </th>
                <th scope="col">      </th>
              </tr>
            </thead>
            <tbody>
              {reviews     
              .filter((review) => {
                  const searchTerm = searchInput ? searchInput.toLowerCase() : '';
                  const fullName = review.fullName ? review.fullName.toLowerCase() : '';
                  const email = review.email ? review.email.toLowerCase() : '';
                  const review = review.review ? review.review.toLowerCase() : '';
                  const destination = review.destination ? review.destination.toLowerCase() : '';
    
                  // Check if the search term contains only letters
                  const isAlphaNumeric = /^[a-zA-Z]+$/.test(searchTerm);
    
                  // Check if the search term is empty or contains only letters
                  if (searchTerm === '' || isAlphaNumeric) {
                    // Filter by username or email containing the search term
                    return (
                      (fullName.includes(searchTerm) && !/^[\d]/.test(searchTerm)) ||
                      (email.includes(searchTerm) && !/^[\d]/.test(searchTerm)) ||
                      (review.includes(searchTerm) && !/^[\d]/.test(searchTerm)) ||
                      (destination.includes(searchTerm) && !/^[\d]/.test(searchTerm))
                    );
                  } else {
                    // Filter only by username or email starting with the search term
                    return (
                      (fullName.startsWith(searchTerm) && !/^[\d]/.test(searchTerm)) ||
                      (email.startsWith(searchTerm) && !/^[\d]/.test(searchTerm)) ||
                      (review.startsWith(searchTerm) && !/^[\d]/.test(searchTerm)) ||
                      (destination.startsWith(searchTerm) && !/^[\d]/.test(searchTerm))

                    );
                  }
              
                })
              
              .map((review) => (
                <tr key={review._id}>
                  <td>{review.fullName}</td>
                  <td>{review.email}</td>
                  <td>{review.review}</td>
                  <td>{review.date}</td>
                  <td>{review.destination}</td>
                  
                  <td>
                    <button className="mt-1 p-2 w-full border bg-green-600 text-white  font-bold rounded-lg"
                    onClick={() => handleEdit(massage._id)} >
                    
                      Edit
                    
                    </button>
                  </td>  
                             
                  <td>
                   <button className="mt-1 p-2 w-full border bg-red-800 text-white  font-bold rounded-lg" onClick={() => handleDelete(massage._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        </>
      );

}

export default AllTestReview;*/


import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Dashboard";

function AllTestReview() {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null); // State for selected review
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await axios.get("http://localhost:8090/testreview/read");
                setReviews(response.data);
            } catch (error) {
                console.log("Error fetching reviews:", error);
                alert("Something went wrong" + error);
            } 
        };
        getReviews();
    },[]);

    const handleDelete = (id) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this?");
        if (confirmDeletion) {
            axios
            .delete(`http://localhost:8090/testreview/delete/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    setReviews(reviews.filter((review) => review._id !== id));
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Something went wrong" + err);
            });
        }
    }; 

    const handleEdit  = (id) => {
        const reviewToEdit = reviews.find((review) => review._id === id);
        setSelectedReview(reviewToEdit);
    };

    const handleUpdate = (id) => {
        const confirmUpdate = window.confirm("Are you sure you want to update this?");
        if (confirmUpdate) {
            axios
            .put(`http://localhost:8090/testreview/update/${id}`, selectedReview)
            .then((res) => {
                if (res.status === 200) {
                    const updatedReviews = reviews.map((review) => {
                        return review._id === id ? selectedReview : review;
                    });
                    setReviews(updatedReviews);
                    setSelectedReview(null);
                    toast.success("Review updated successfully !");
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
        const tableRows = reviews.map((review) => [
            review.fullName,
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
        doc.text(`Reviews Report - ${formattedDate}`, 15, 10);
        doc.save(`Reviews Report - ${formattedDate}.pdf`);

        window.alert("Report downloaded successfully !");
    };

    return (
        <>
            <Dashboard/>
            <div style={{ padding: "80px", paddingTop: "10%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontWeight: "bold", fontSize: "30px", paddingBottom: "20px" }}>Review Submissions</p>
                    <button className="mt-1 w-60 p-2 border bg-amber-500 text-white  font-bold rounded-md" onClick={handleExportReport}>
                        Export Report
                    </button>
                    <div className="relative flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`px-4 py-2 border rounded-l-lg flex-1 ${(searchInput.length > 0 && /^[0-9]/.test(searchInput)) ||
                                (searchInput.length > 0 && /^[^a-zA-Z]/.test(searchInput))
                                ? 'border-red-500'
                                : 'border-gray-300'
                            }`}
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        {searchInput.length > 0 && /^[0-9]/.test(searchInput) && (
                            <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-full">Search term cannot start with a number</p>
                        )}
                        {searchInput.length > 0 && /^[^a-zA-Z]/.test(searchInput) && (
                            <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-full">Search term cannot start with a special character</p>
                        )}
                        <button className="px-4 font-semibold bg-amber-500 text-white rounded-r-lg hover:bg-amber-700 hover:text-white">
                            Search
                        </button>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>  
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Review</th>
                            <th scope="col">Date</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr key={review._id}>
                                 <td>{selectedReview && selectedReview._id === review._id ? <input className="px-4 py-2 border rounded-l-lg flex-1" value={selectedReview.fullName} onChange={(e) => setSelectedReview({ ...selectedReview, fullName: e.target.value })} /> : review.fullName}</td>
                                <td>{selectedReview && selectedReview._id === review._id ? <input className="px-4 py-2 border rounded-l-lg flex-1" value={selectedReview.email} onChange={(e) => setSelectedReview({ ...selectedReview, email: e.target.value })} /> : review.email}</td>
                                <td>{selectedReview && selectedReview._id === review._id ? <textarea className="px-4 py-2 border rounded-l-lg flex-1 w-full " value={selectedReview.review} onChange={(e) => setSelectedReview({ ...selectedReview, review: e.target.value })} /> : review.review}</td>
                                <td>{selectedReview && selectedReview._id === review._id ? <input className="px-4 py-2 border rounded-l-lg flex-1" value={selectedReview.date} onChange={(e) => setSelectedReview({ ...selectedReview, date: e.target.value })} /> : review.date}</td>
                                <td>{selectedReview && selectedReview._id === review._id ? <input className="px-4 py-2 border rounded-l-lg flex-1" value={selectedReview.destination} onChange={(e) => setSelectedReview({ ...selectedReview, destination: e.target.value })} /> : review.destination}</td>
                                <td>
                                    {selectedReview && selectedReview._id === review._id ? (
                                        <>
                                            <button className="mt-1 p-2 w-full border bg-green-600 text-white  font-bold rounded-lg" onClick={() => handleUpdate(review._id)}>
                                                Update
                                            </button>
                                            <button className="mt-1 p-2 w-full border bg-red-800 text-white  font-bold rounded-lg" onClick={() => setSelectedReview(null)}>
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button className="mt-1 p-2 w-full border bg-blue-600 text-white  font-bold rounded-lg" onClick={() => handleEdit(review._id)}>
                                            Edit
                                        </button>
                                    )}
                                </td>
                                <td>
                   <button className="mt-1 p-2 w-full border bg-red-800 text-white  font-bold rounded-lg" onClick={() => handleDelete(review._id)}>
                      Delete
                    </button>
                  </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AllTestReview;
