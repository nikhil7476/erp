// updated code with data and structure//STOCK
"use client"; // Enables client-side rendering for this file

import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemCategory = () => {
  const [data, setData] = useState([]); // State to store item categories
  const [error, setError] = useState(null); // State to store errors
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://erp-backend-fy3n.onrender.com/item/api/itemCategories"
      );

      console.log("API Response:", response.data); // Debugging API response

      if (response.data && Array.isArray(response.data)) {
        setData(response.data); // Direct array response
      } else if (response.data.data && Array.isArray(response.data.data)) {
        setData(response.data.data); // Response inside `data` field
      } else {
        console.error("Unexpected API response format:", response.data);
        setError("Unexpected API response format.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again.");
    }
  };

  // UseEffect to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Stock Item Category</h1>
        <button className="btn btn-primary">+ Add Category</button>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id || index}>
                <td>{index + 1}</td>
                <td>{item.categoryName}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Export the React component as the default export
export default ItemCategory;
