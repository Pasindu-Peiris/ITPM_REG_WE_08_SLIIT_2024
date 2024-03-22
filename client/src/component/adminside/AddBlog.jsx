import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImgBac from "../../Images/hp-blog-bg.jpg";

const AddBlogs = () => {
  const [blogData, setBlogData] = useState({
    Title: "",
    Author: "",
    Category: "",
    FeaturedImage: "",
    Content: "",
    Excerpt: "",
    PublishDate: new Date().toISOString().split('T')[0]
  });

  const [errors, setErrors] = useState({
    Title: "",
    Author: "",
    Category: "",
    FeaturedImage: "",
    Content: "",
    Excerpt: ""
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const selectedImage = files[0]; // Assuming only one featured image
      const imageUrl = URL.createObjectURL(selectedImage);
      setBlogData({ ...blogData, FeaturedImage: imageUrl });
    } else if (name === "FeaturedImage") {
      // Validate URL
      const isValidUrl = isValidURL(value);
      setErrors({ ...errors, FeaturedImage: isValidUrl ? "" : "Invalid URL" });
      setBlogData({ ...blogData, [name]: value });
    } else {
      setBlogData({ ...blogData, [name]: value });
    }
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };

  const handleSubmit = async () => {
    try {
      // Validation checks
      let errorOccurred = false;
      const newErrors = { ...errors };

      if (!blogData.Title) {
        newErrors.Title = "Title is required";
        errorOccurred = true;
      }

      if (!blogData.Author) {
        newErrors.Author = "Author is required";
        errorOccurred = true;
      }

      if (!blogData.Category) {
        newErrors.Category = "Category is required";
        errorOccurred = true;
      }

      if (!blogData.Content) {
        newErrors.Content = "Content is required";
        errorOccurred = true;
      }

      if (countWords(blogData.Content) < 50) {
        newErrors.Content = "Content must be at least 50 words long";
        errorOccurred = true;
      }

      if (!blogData.Excerpt) {
        newErrors.Excerpt = "Excerpt is required";
        errorOccurred = true;
      }

      if (!blogData.FeaturedImage || !isValidURL(blogData.FeaturedImage)) {
        newErrors.FeaturedImage = "Invalid URL";
        errorOccurred = true;
      }

      if (errorOccurred) {
        setErrors(newErrors);
        return;
      }

      // Submitting the form
      console.log("Submitting blog data:", blogData);
      const response = await axios.post('http://localhost:8090/blogs', blogData);
      console.log("Blog created:", response.data);
      setBlogData({
        Title: "",
        Author: "",
        Category: "",
        FeaturedImage: "",
        Content: "",
        Excerpt: "",
        PublishDate: new Date().toISOString().split('T')[0]
      });
      toast.success("Blog successfully added!");
      setTimeout(() => {
        window.location.href = "/AllBlog";
      }, 2000);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${ImgBac})`, paddingTop: '100px', paddingLeft:"100px", paddingRight:"100px", paddingBottom:"100px" }}>
      <div className="card" style={{ padding: '10px', position: 'relative' }}>
        <div style={{ marginBottom: '10px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>Add Blog Details</h2>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Title:</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            name="Title"
            value={blogData.Title}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
          <div style={{ fontSize: '12px', marginTop: '3px' }}>
            {countWords(blogData.Title) < 1 && <span style={{ color: 'red' }}> (Title required)</span>}
          </div>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Author:</label>
          <input
            type="text"
            className="form-control"
            id="Author"
            name="Author"
            value={blogData.Author}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
          <div style={{ fontSize: '12px', marginTop: '3px' }}>
            {countWords(blogData.Author) < 1 && <span style={{ color: 'red' }}> (Author required)</span>}
          </div>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Category:</label>
          <input
            type="text"
            className="form-control"
            id="Category"
            name="Category"
            value={blogData.Category}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
          <div style={{ fontSize: '12px', marginTop: '3px' }}>
            {countWords(blogData.Category) < 1 && <span style={{ color: 'red' }}> (Category required)</span>}
          </div>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Featured Image URL:</label>
          <input
            type="text"
            className="form-control"
            id="FeaturedImage"
            name="FeaturedImage"
            value={blogData.FeaturedImage}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
          <div style={{ fontSize: '12px', marginTop: '3px', color: 'red' }}>{errors.FeaturedImage}</div>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Content:</label>
          <textarea
            className="form-control"
            id="Content"
            rows="6"
            name="Content"
            value={blogData.Content}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          ></textarea>
          {/* <div style={{ color: 'red', fontSize: '12px' }}>{errors.Content}</div> */}
          <div style={{ fontSize: '12px', marginTop: '3px' }}>
            {`${countWords(blogData.Content)} words`}
            {countWords(blogData.Content) < 50 && <span style={{ color: 'red' }}> (Minimum 50 words required)</span>}
          </div>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Excerpt:</label>
          <textarea
            className="form-control"
            id="Excerpt"
            rows="3"
            name="Excerpt"
            value={blogData.Excerpt}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          ></textarea>
          {/* <div style={{ color: 'red', fontSize: '12px' }}>{errors.Excerpt}</div> */}
          <div style={{ fontSize: '12px', marginTop: '3px' }}>
            {countWords(blogData.Excerpt) < 1 && <span style={{ color: 'red' }}> (Excerpt required)</span>}
          </div>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Publish Date:</label>
          <input
            type="date"
            className="form-control"
            id="PublishDate"
            name="PublishDate"
            value={blogData.PublishDate}
            style={{ fontSize: '14px', padding: '5px' }}
            disabled
          />
        </div>
        <button 
          type="button" 
          className="btn" 
          style={{ 
            backgroundColor: '#fcb900', 
            color: 'black', 
            marginBottom: '10px',
            fontSize: '14px',
            padding: '5px 10px',
            borderRadius: '5px'
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddBlogs;

