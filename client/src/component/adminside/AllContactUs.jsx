import React, { useState, useEffect } from "react";
import axios from "axios";
import deleteIcn from "../../Images/trash (1).png";
import SearchBar from "./CSearchBar"; // Import the SearchBar component
import jsPDF from "jspdf";
import "jspdf-autotable";

function AllContactUs() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = () => {
      axios
        .get("http://localhost:8090/contactus/read")
        .then((res) => {
          setContacts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getContacts();
  }, []);

  const handleDelete = (id) => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete this ?"
    );
    if (confirmDeletion) {
      axios
        .delete(`http://localhost:8090/contactus/delete/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setContacts(contacts.filter((contact) => contact._id !== id));
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong" + err);
        });
    }
  };

    const getContacts = (searchTerm = "") => {
      axios
        .get("http://localhost:8090/contactus/search?name=${searchTerm}")
        .then((res) => {
          setContacts(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const handleSearch = (searchTerm) => {
      getContacts(searchTerm);
    };

    // Function to generate and download the PDF report
    const handleExportReport = () => {
      const doc = new jsPDF();
      const tableColumns = ["Name", "Email", "Phone","Date", "Subject", "Message"];
      const tableRows =  [];

      contacts.forEach((contact) => {
        const contData=[
          contact.name,
          contact.email,
          contact.phone,
          contact.date,
          contact.subject,
          contact.message,
        ];

        tableRows.push(contData);
      });
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedDate = `${year}-${month}-${day}`;
     
      doc.autoTable(tableColumns, tableRows, { startY: 20 });
      doc.text(`Contact Us Report - ${formattedDate}`, 15, 10);
      doc.save(`Contact Us Report - ${formattedDate}` + ".pdf");
      
      // Display an alert when download is successful
      window.alert("Report downloaded successfully!");
    };
 

  return (
        <div style={{ padding: "80px" }}>
          <div 
          
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "30px", paddingBottom: "20px" }}>Recived Submissions</p>
            <button
              className="mt-1 w-60 p-2 border bg-amber-500 text-white  font-bold"
              onClick={handleExportReport}
            >
              Export Report
            </button>
            <SearchBar onSearch={handleSearch} />
            
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Date</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
                <th scope="col">      </th>
                <th scope="col">      </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((massage) => (
                <tr key={massage._id}>
                  <td>{massage._id}</td>
                  <td>{massage.name}</td>
                  <td>{massage.email}</td>
                  <td>{massage.phone}</td>
                  <td>{massage.date}</td>
                  <td>{massage.subject}</td>
                  <td>{massage.message}</td>
                  <td>
                    <button className="mt-1 p-2 w-full border bg-amber-500 text-white  font-bold">Response</button>
                  </td>                
                  <td>
                    <img
                      src={deleteIcn}
                      alt="Delete"
                      style={{ width: "20px", height: "20px", cursor: "pointer" }}
                      onClick={() => handleDelete(massage._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default AllContactUs