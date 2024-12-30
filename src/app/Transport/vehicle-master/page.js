// updated code 5 for api//working with data
"use client";
import React, { useState, useEffect } from "react";
import Table from "@/app/component/DataTable"; // Ensure the path to the DataTable component is correct
import axios from "axios";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { CgAddR } from "react-icons/cg";

const VehicleRecords = () => {
  const [data, setData] = useState([]); // State to hold the table data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1, // Auto-incrementing index for rows
      sortable: true,
      width: "80px",
    },
    {
      name: "Vehicle Type",
      selector: (row) => row.vehicle_type || "N/A", // Fallback for missing vehicleType
      sortable: true,
    },
    {
      name: "Vehicle No",
      selector: (row) => row.vehicle_no || "N/A", // Fallback for missing vehicleNo
      sortable: true,
    },
    {
      name: "Driver Name",
      selector: (row) => row.driver_name || "N/A", // Fallback for missing driverName
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="editButton"
            onClick={() => handleEdit(row._id)} // Assuming _id is the unique identifier
          >
            Edit
          </button>
          <button
            className="deleteButton"
            onClick={() => handleDelete(row._id)} // Assuming _id is the unique identifier
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://erp-backend-fy3n.onrender.com/transport/api/vehicles"
      );

      // Check if the response has the expected structure
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        setData(response.data.data); // Handle nested response structure
      } else {
        console.error("Unexpected API response format:", response.data);
        setError("Unexpected API response format. Please contact support.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Edit entry
  const handleEdit = async (id) => {
    const item = data.find((row) => row._id === id); // Ensure _id matches the unique key in your data
    const updatedName = prompt("Enter new name:", item?.vehicle_type || "");

    if (updatedName) {
      try {
        const response = await axios.put(
          `https://erp-backend-fy3n.onrender.com/transport/api/vehicles/${id}`,
          {
            vehicle_type: updatedName,
          }
        );
        if (response.data) {
          setData((prevData) =>
            prevData.map((row) =>
              row._id === id ? { ...row, vehicle_type: updatedName } : row
            )
          );
        }
      } catch (error) {
        console.error("Error updating data:", error);
        setError("Failed to update entry. Please try again later.");
      }
    }
  };

  // Delete entry
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      try {
        await axios.delete(
          `https://erp-backend-fy3n.onrender.com/transport/api/vehicles/${id}`
        );
        setData((prevData) => prevData.filter((row) => row._id !== id));
      } catch (error) {
        console.error("Error deleting data:", error);
        setError("Failed to delete entry. Please try again later.");
      }
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Row className="mt-1 mb-1">
        <Col>
          <Breadcrumb style={{ marginLeft: "20px" }}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/Transport/all-module">
              Transport
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Vehicle Records</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <button
            onClick={() => {}}
            id="submit"
            type="button"
            style={{ marginLeft: "20px" }}
          >
            <CgAddR style={{ fontSize: "27px", marginTop: "-2px", marginRight: "5px" }} />
            New Vehicle Type
          </button>
        </Col>
      </Row>

      <h2>Vehicle Records</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : data.length > 0 ? (
        <Table columns={columns} data={data} />
      ) : (
        <p>No data available.</p>
      )}
    </Container>
  );
};

export default VehicleRecords;
