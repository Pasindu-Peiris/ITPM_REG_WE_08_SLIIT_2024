import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

function AllCResponse() {
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


  const handleEdit = (id) => {
    // Redirect to the edit page for the contact with the given id
    window.location.href = `/contactus/${id}`;
  };
   

  const handleExportReport = () => {
    const doc = new jsPDF();
    const tableColumns = ["Name", "Email", "Phone", "Date", "Subject", "Message","Response"];
    const tableRows = contacts.map((contact) => [
      contact.name,
      contact.email,
      contact.phone,
      contact.date,
      contact.subject,
      contact.message,
      contact.response,
    ]);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month}-${day}`;

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    doc.text(`Responsed Submissions Report - ${formattedDate}`, 15, 10);
    doc.save(`Responsed Submissions Report - ${formattedDate}.pdf`);

    window.alert("Report downloaded successfully!");
  };

  const handleSendMail = async (email, name) => {
    try {
      await axios.post("http://localhost:8090/email/send-mail", {
        name: name,
        email: email,
      });
      alert("Email sent successfully!");
    } catch (error) {
      console.error('Error sending email:', error);
      alert("Failed to send email");
    }
  };
    

  return (
    <div className="mt-20">
    
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "30px", paddingBottom: "20px" }}>Responsed Submissions</p>
        <button
          className="mt-1 w-60 p-2 border bg-amber-500 text-white font-bold rounded-md"
          onClick={handleExportReport}
        >
          Export Report
        </button>
        
      </div>
      <table className="table table-striped border-2 mt-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Response</th>
            <th scope="col">    </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            contact.response &&(
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.date}</td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
              <td>{contact.response}</td>
              <td>
                <button
                  className="mt-1 p-2 w-full border bg-amber-500 text-white font-bold rounded-lg"
                  onClick={() => handleSendMail(contact.email, contact.name)}
                >
                  Send Mail
                </button>
              </td>
              <td>
                <button
                  className="mt-1 p-2 w-full border bg-amber-500 text-white font-bold rounded-lg"
                  onClick={() => handleEdit(contact._id)}>
                  Edit
                </button>
              </td>
              <td>
              <button className="mt-1 p-2 w-full border bg-red-800 text-white  font-bold rounded-lg" 
              onClick={() => handleDelete(contact._id)}>
                      Delete
              </button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}

export default AllCResponse;
