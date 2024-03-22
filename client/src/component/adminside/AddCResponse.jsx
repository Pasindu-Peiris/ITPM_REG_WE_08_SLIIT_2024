/*import React, { useState, useEffect } from "react";
import Nav from "../clientside/Nav";
import Img from "../../Images/page-title-bg.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const ContactUsRes = () => {
    const { id } = useParams();
    const [contact, setContact] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/contactus/get/${id}`);
                setContact(response.data.contactus);
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        };
        fetchData();
    }, [id]);

    const sendData = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8090/contactus/respond`, {
                id: contact._id,
                response
            });
            console.log("Response submitted successfully!");
            // Handle navigation back to the contact list page or any other action
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
            <form onSubmit={sendData}>
                <div className="grid grid-cols-2 gap-6 p-20 ">
                    <div>
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
                        <div className="grid grid-cols-3 gap-6 p-10">
                            <button type="submit" className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md">
                                Save
                            </button>
                            <button className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md">
                                Edit
                            </button>
                            <button className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default ContactUsRes;*/


import React, { useState } from "react";
import Nav from "../clientside/Nav";
import Img from "../../Images/page-title-bg.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const ContactUsRes = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        response: "",
    });
    const [error, setError] = useState("");

    // Fetch contact data if an ID is provided
    // However, in this case, we'll directly use formData
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8090/contactus/get/${id}`);
    //             setFormData(response.data.contactus); // Assuming the response directly contains the contact details
    //         } catch (error) {
    //             console.error("Error fetching contact:", error);
    //         }
    //     };
    //     if (id) {
    //         fetchData();
    //     }
    // }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendData = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8090/response/submit`, formData);
            console.log("Response submitted successfully!");
            // Handle navigation back to the contact list page or any other action
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
            <form onSubmit={sendData}>
                <div className="grid grid-cols-2 gap-6 p-20 ">
                    <div>
                        <label className="block text-md font-medium mr-2">Full Name</label>
                        <input type="text" className="mt-1 p-2 border w-full rounded" name="name" value={formData.name} onChange={handleChange} readOnly />
                        <br />
                        <label className="block text-md font-medium">Email</label>
                        <input type="text" className="mt-1 p-2 border w-full rounded" name="email" value={formData.email} onChange={handleChange} readOnly />
                        <br />
                        <label className="block text-md font-medium">Phone</label>
                        <input type="text" className="mt-1 p-2 border w-full rounded" name="phone" value={formData.phone} onChange={handleChange} readOnly />
                        <br />
                        <label className="block text-md font-medium">Subject</label>
                        <input type="text" className="mt-1 p-2 border w-full rounded" name="subject" value={formData.subject} onChange={handleChange} readOnly />
                        <br />
                        <label className="block text-md font-medium">Message</label>
                        <textarea className="mt-1 p-2 border w-full rounded" name="message" value={formData.message} onChange={handleChange} readOnly />
                        <br />
                    </div>
                    <div>
                        <label className="block text-md font-medium">Response</label>
                        <textarea
                            rows={10}
                            className="mt-1 p-2 border w-full rounded"
                            name="response"
                            value={formData.response}
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <div className="grid grid-cols-3 gap-6 p-10">
                            <button type="submit" className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md">
                                Save
                            </button>
                            <button className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md">
                                Edit
                            </button>
                            <button className="mt-0.5 p-2 border bg-amber-500 text-white font-bold rounded-md">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default ContactUsRes;
