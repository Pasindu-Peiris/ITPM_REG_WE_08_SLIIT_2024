import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./CSearchBar";
import AllCResponse from "./AllCResponse";
import jsPDF from "jspdf";
import "jspdf-autotable";

function AllContactUs() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get("http://localhost:8090/contactus/read");
        setContacts(response.data);
      } catch (error) {
        console.log("Error fetching contacts:", error);
        alert("Something went wrong" + error);
      }
    };
    getContacts();
  }, []);

  const handleDelete = (id) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this?");
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

  const handleResponse = (contact) => {
    window.location.href = `/contactusres?id=${contact._id}`;
  };

  const handleExportReport = () => {
    const doc = new jsPDF();
    const tableColumns = ["Name", "Email", "Phone", "Date", "Subject", "Message"];
    const tableRows = contacts.map((contact) => [
      contact.name,
      contact.email,
      contact.phone,
      contact.date,
      contact.subject,
      contact.message,
    ]);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month}-${day}`;

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    doc.text(`Contact Us Report - ${formattedDate}`, 15, 10);
    doc.save(`Contact Us Report - ${formattedDate}.pdf`);

    window.alert("Report downloaded successfully!");
  };

  return (
<<<<<<< Updated upstream
    <div style={{ padding: "80px" }}>
      <p style={{ fontWeight: "bold", fontSize: "35px", paddingBottom: "20px" }}>All Contact Us Form Submissions</p>
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
        <SearchBar />
      </div>
      <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.date}</td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
              <td>
                <button
                  className="mt-1 p-2 border bg-amber-500 text-white font-bold rounded-lg"
                  onClick={() => handleResponse(contact)}
                >
                  Response
                </button>
              </td>
              <td>
                <button
                  className="mt-1 p-2 border bg-amber-500 text-white font-bold rounded-lg"
                  onClick={() => handleDelete(contact._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
=======
        <div style={{ padding: "80px" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "40px", paddingBottom: "20px" }}>Contact Us Form Submission</h1>
          <div 
          
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "30px", paddingBottom: "20px" }}>Recived Submissions</p>
            <button
              className="mt-1 w-60 p-2 border bg-amber-500 text-white  font-bold rounded-md"
              onClick={handleExportReport}
            >
              Export Report
            </button>
            <SearchBar onSearch={handleSearch} />
            
          </div>
          <table className="table table-striped">
            <thead>
              <tr>  
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
                  <td>{massage.name}</td>
                  <td>{massage.email}</td>
                  <td>{massage.phone}</td>
                  <td>{massage.date}</td>
                  <td>{massage.subject}</td>
                  <td>{massage.message}</td>
                  <td>
                    <button className="mt-1 p-2 w-full border bg-amber-500 text-white  font-bold rounded-lg">
                    <a className="nav-link" href="/#">
                      Response
                    </a>
                    </button>
                  </td>                
                  <td>
                   {/*
                    <img
                      src={deleteIcn}
                      alt="Delete"
                      style={{ width: "20px", height: "20px", cursor: "pointer" }}
                      onClick={() => handleDelete(massage._id)}
                    />
                   */}
                   <button className="mt-1 p-2 w-full border bg-amber-500 text-white  font-bold rounded-lg" onClick={() => handleDelete(massage._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
>>>>>>> Stashed changes

      {/*<AllCResponse/>*/}
    </div>
  );
}

export default AllContactUs;
