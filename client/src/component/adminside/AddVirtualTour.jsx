import React, { useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard";

const AddVirtualTour = () => {
  const [title, setTitle] = useState("");
  const [selectedImageFiles, setSelectedImageFiles] = useState([]);
  const [selectedMusicFile, setSelectedMusicFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImageFiles(files);
  };

  const handleMusicChange = (event) => {
    setSelectedMusicFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!title.trim() || selectedImageFiles.length === 0) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      selectedImageFiles.forEach((file) => {
        formData.append("images", file);
      });
      if (selectedMusicFile) {
        formData.append("music", selectedMusicFile);
      }

      const response = await axios.post(
        "http://localhost:8090/api/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setTitle("");
      setSelectedImageFiles([]);
      setSelectedMusicFile(null);
      setLoading(false);
      toast.success("Virtual tour created successfully", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
    <Dashboard/>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6">Create Virtual Tour</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Images
              </label>
              <input
                id="images"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                className="hidden"
                required
              />
              <label
                htmlFor="images"
                className="bg-gray-200 px-4 py-2 rounded-md cursor-pointer block w-full text-center"
              >
                Select Images
              </label>
              {selectedImageFiles.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  {selectedImageFiles.length} image(s) selected
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="music"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Music (Optional)
              </label>
              <input
                id="music"
                type="file"
                accept="audio/mp3"
                onChange={handleMusicChange}
                className="hidden"
              />
              <label
                htmlFor="music"
                className="bg-gray-200 px-4 py-2 rounded-md cursor-pointer block w-full text-center"
              >
                Select Music
              </label>
              {selectedMusicFile && (
                <p className="text-sm text-gray-500 mt-2">
                  Music file selected
                </p>
              )}
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              type="submit"
              className={`bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 focus:outline-none w-full ${
                loading && "opacity-50 cursor-not-allowed"
              }`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Add Virtual Tour"}
            </button>
          </form>
        </div>
      </div>
    
    </>
  );
};

export default AddVirtualTour;
