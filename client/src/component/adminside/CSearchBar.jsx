import React, { useState } from "react";

function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleSearch = () => {
        onSearch(searchTerm);
      };

      const searchInput ={
        marginleft: "45%",
        width: "80%",
        height: "auto",
        marginright: "15px",
        
      }

      const searchbtn = {
        borderRadius: "5px",
        cursor: "pointer",
      }

      return (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full mr-5 p-2 border border-gray-300 rounded-md"
            style={searchInput}
          />
          <button className="mt-1 w-full p-2 border bg-amber-500 text-white  font-bold" style={searchbtn} onClick={handleSearch}>Search</button>
        </div>
      );
    }
    
    
    export default SearchBar;