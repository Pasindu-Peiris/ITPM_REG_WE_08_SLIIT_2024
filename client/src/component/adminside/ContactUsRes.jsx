import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../clientside/Nav";
import Img from "../../Images/page-title-bg.png";
import axios from "axios";

const ContactUsRes = () => {
    const location = useLocation();
    const { contact } = location.state || {};

    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post((`http://localhost:8090/contactus/get/${contact._id}`, {
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                subject: contact.subject,
                message: contact.message,
                response,
            }));

            console.log("Response submitted:", response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const addImg = {
        width: "100%",
        minHeight: "40vh",
        backgroundImage: `url(${Img})`,
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };

    return (
        <div style={{ position: "relative" }}>
            <Nav />
            <div className="flex items-center " style={addImg}>
                <h1 className="text-center text-4xl font-semibold text-black ">Add Response</h1>
            </div>
            <div className="grid grid-cols-2 gap-6 p-20 ">
                <div>
                    <form onSubmit={sendData}>
                        <label className="block text-md font-medium mr-2">Full Name</label>
                        <input type="text" className="mt-1 p-2 border w-full rounded" value={contact?.name} readOnly />
                        <br />
                        <label className="block text-md font-medium">Email</label>
                        <input type="text" className="mt-1 p-2 border w-full rounded" value={contact?.email} readOnly />
                        <br />
                        <label className="block text-md font-medium">Phone</label>
                        <input type="text" className="mt-1 p-2 border w-full rounded" value={contact?.phone} readOnly />
                        <br />
                        <label className="block text-md font-medium">Subject</label>
                        <input type="text" className="mt-1 p-2 border w-full rounded" value={contact?.subject} readOnly />
                        <br />
                        <label className="block text-md font-medium">Message</label>
                        <textarea className="mt-1 p-2 border w-full rounded" value={contact?.message} readOnly />
                        <br />
                    </form>
                </div>
                <div>
                    <label className="block text-md font-medium">Response</label>
                    <textarea
                        rows={10}
                        className="mt-1 p-2 border w-full rounded"
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        required
                    />
                    <br />
                    <div className="grid grid-cols-3 gap-6 p-10  ">
                    <button type="submit" className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md"
                    onClick={sendData}>
                        Save
                    </button>
                    <button className="mt-0.5  p-1 border bg-amber-500 text-white font-bold rounded-md">
                    Edit
                    </button>
                    <button className="mt-0.5 p-1 border bg-amber-500 text-white font-bold rounded-md ">
                      Back
                      </button>
                    </div>
                </div>
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default ContactUsRes;
