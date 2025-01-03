"use client"; // This ensures client-side rendering in Next.js

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Form, Row, Col, Container, FormLabel, FormControl, Button } from "react-bootstrap";
import Table from "@/app/component/DataTable"; // Ensure the path to the DataTable component is correct
import axios from "axios";
import styles from "@/app/medical/routine-check-up/page.module.css"; // Assuming the same styles are used

const CityMasterPage = () => {
  const [cities, setCities] = useState([]); // State for cities
  const [newStateName, setNewStateName] = useState(""); // State for new state name
  const [newCityName, setNewCityName] = useState(""); // State for new city name
  const [showAddForm, setShowAddForm] = useState(false); // Toggle for add form
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  // Table columns configuration
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "State Name",
      selector: (row) => row.state_name || "N/A",
      sortable: true,
    },
    {
      name: "City Name",
      selector: (row) => row.cityName || "N/A",
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="editButton"
            onClick={() => handleEdit(row._id)} // Assuming _id is the unique identifier
          >
            <FaEdit />
          </button>
          <button
            className="deleteButton"
            onClick={() => handleDelete(row._id)} // Assuming _id is the unique identifier
          >
            <FaTrashAlt />
          </button>
        </div>
      ),
    },
  ];

  // Fetch cities from API
  const fetchCities = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://erp-backend-fy3n.onrender.com/location/api/states"
      );

      // Ensure the response data is an array
      const fetchedCities = Array.isArray(response.data?.data)
        ? response.data.data
        : [];

      setCities(fetchedCities);
    } catch (err) {
      console.error("Error fetching cities:", err);
      setError("Failed to fetch cities. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle adding a new city
  const handleAddCity = async () => {
    if (newStateName.trim() && newCityName.trim()) {
      try {
        const response = await axios.post(
          "https://erp-backend-fy3n.onrender.com/location/api/states",
          {
            state_name: newStateName,
            cityName: newCityName,
          }
        );

        // Append the new city to the state array
        setCities((prevCities) => [...prevCities, response.data]);
        setNewStateName(""); // Reset input fields
        setNewCityName("");
        setShowAddForm(false); // Hide the form
      } catch (err) {
        console.error("Error adding city:", err);
        setError("Failed to add city. Please try again later.");
      }
    } else {
      alert("Please enter valid state and city names.");
    }
  };

  // Handle editing a city
  const handleEdit = async (id) => {
    const item = cities.find((row) => row._id === id);
    const updatedStateName = prompt(
      "Enter new state name:",
      item?.state_name || ""
    );
    const updatedCityName = prompt(
      "Enter new city name:",
      item?.cityName || ""
    );

    if (updatedStateName && updatedCityName) {
      try {
        await axios.put(
          `https://erp-backend-fy3n.onrender.com/location/api/states/${id}`,
          {
            state_name: updatedStateName,
            cityName: updatedCityName,
          }
        );

        // Update the city in state
        setCities((prevCities) =>
          prevCities.map((row) =>
            row._id === id
              ? { ...row, state_name: updatedStateName, cityName: updatedCityName }
              : row
          )
        );

        alert("City updated successfully!");
      } catch (err) {
        console.error("Error updating city:", err);
        setError("Failed to update city. Please try again later.");
      }
    }
  };

  // Handle deleting a city
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this city?")) {
      try {
        await axios.delete(
          `https://erp-backend-fy3n.onrender.com/location/api/states/${id}`
        );

        // Remove the city from the state array
        setCities((prevCities) =>
          prevCities.filter((row) => row._id !== id)
        );

        alert("City deleted successfully!");
      } catch (err) {
        console.error("Error deleting city:", err);
        setError("Failed to delete city. Please try again later.");
      }
    }
  };

  // Fetch cities on component mount
  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <Container className={styles.formContainer}>
      <Form className={styles.form}>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className={`mb-4 ${styles.search}`}
        >
          Add City
        </Button>

        {showAddForm && (
          <div className="result">
            <Row className="mb-3">
              <Col lg={6}>
                <FormLabel className={styles.class}>State Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter State Name"
                  value={newStateName}
                  onChange={(e) => setNewStateName(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={6}>
                <FormLabel className={styles.class}>City Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter City Name"
                  value={newCityName}
                  onChange={(e) => setNewCityName(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Button onClick={handleAddCity} className={styles.search}>
                  Add City
                </Button>
              </Col>
            </Row>
          </div>
        )}

        <Row>
          <Col>
            <h2 style={{ fontSize: "22px" }}>City Records</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && <Table columns={columns} data={cities} />}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(CityMasterPage), { ssr: false });
