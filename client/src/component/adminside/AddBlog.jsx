import React, { useState } from "react";
import ImgBac from "../../Images/hp-blog-bg.jpg";
import close from "../../Images/remove.png";
import axios from 'axios';

const AddBlogs = () => {
  const [blogData, setBlogData] = useState({
    Title: "",
    Author: "",
    Category: "",
    FeaturedImage: "",
    Content: "",
    Excerpt: "",
    PublishDate: new Date()
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const selectedImage = files[0]; // Assuming only one featured image
      const imageUrl = URL.createObjectURL(selectedImage);
      setBlogData({ ...blogData, FeaturedImage: imageUrl });
    } else {
      setBlogData({ ...blogData, [name]: value });
    }
  };

  const handleRemoveImage = () => {
    setBlogData({ ...blogData, FeaturedImage: "" });
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting blog data:", blogData);
      const response = await axios.post('http://localhost:8090/blogs', blogData);
      console.log("Blog created:", response.data);
      // Reset form fields
      setBlogData({
        Title: "",
        Author: "",
        Category: "",
        FeaturedImage: "",
        Content: "",
        Excerpt: "",
        PublishDate: new Date()
      });
      // Show success message
      alert("Blog successfully added!");
    } catch (error) {
      console.error("Error creating blog:", error);
      // You can show an error message here if needed
    }
  };

  return (
    <div style={{ backgroundImage: `url(${ImgBac})`, paddingTop: '20px', paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px" }}>
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
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Author:</label>
          <input
            type="text"
            className="form-control"
            id="Author"
            name="Author"
            value={blogData.Author}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Category:</label>
          <input
            type="text"
            className="form-control"
            id="Category"
            name="Category"
            value={blogData.Category}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Featured Image:</label>
          {blogData.FeaturedImage && (
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <img src={blogData.FeaturedImage} alt="Featured" style={{ width: '100px', marginRight: '10px' }} />
              <button type="button" onClick={handleRemoveImage}>Remove</button>
            </div>
          )}
          <input
            type="file"
            className="form-control-file"
            accept="image/*"
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Content:</label>
          <textarea
            className="form-control"
            id="Content"
            rows="6"
            name="Content"
            value={blogData.Content}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Excerpt:</label>
          <textarea
            className="form-control"
            id="Excerpt"
            rows="3"
            name="Excerpt"
            value={blogData.Excerpt}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Publish Date:</label>
          <input
            type="date"
            className="form-control"
            id="PublishDate"
            name="PublishDate"
            value={blogData.PublishDate}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
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
    </div>
  );
};

export default AddBlogs;
