import React, { useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddVirtualTour = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("images", file);
      });
      toast.success("Images added successfully!", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
      const response = await axios.post(
        "http://localhost:8090/api/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Create Virtual Tour</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Images</h3>
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                className="border p-2 rounded-lg w-full"
                type="file"
                id={`image${index}`}
                onChange={handleChange}
                accept="image/*"
                multiple
                max="5"
              />
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold">Music</h3>
            <input
              className="border p-2 rounded-lg w-full"
              type="file"
              accept="audio/mp3"
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-amber-500  text-white py-2 px-4 rounded-lg hover:bg-amber-600">
              Add Virtual Tour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVirtualTour;
