"use client";
import React, { useState, useEffect } from "react";
import { Form, Row, Col, Container, FormLabel, FormControl, Button } from "react-bootstrap";
import Table from "@/app/component/DataTable"; // Ensure the path to the DataTable component is correct
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Icons for edit and delete
import axios from "axios";
import styles from "../year-master/page.module.css"; // CSS import

const YearMasterPage = () => {
  const [data, setData] = useState([]); // Table data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [showAddForm, setShowAddForm] = useState(false); // Show add form
  const [newClassName, setNewClassName] = useState(""); // New class name input state
  const [newYearCodeAndName, setNewYearCodeAndName] = useState(""); // New year code and name state
  const [selectedYearId, setSelectedYearId] = useState(null); // Selected year ID for editing

  // Table columns configuration
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "80px",
    },
    {
      name: "Class Name",
      selector: (row) => row.className || "N/A",
      sortable: true,
    },
    {
      name: "Year Code & Name",
      selector: (row) => row.yearCodeAndName || "N/A",
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          <button className="editButton" onClick={() => handleEdit(row.id)}>
            <FaEdit />
          </button>
          <button className="editButton btn-danger" onClick={() => handleDelete(row.id)}>
            <FaTrashAlt />
          </button>
        </div>
      ),
    },
  ];

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://erp-backend-fy3n.onrender.com/api/classes");
      setData(response.data || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Edit existing entry
  const handleEdit = (id) => {
    const item = data.find((row) => row.id === id);
    setNewClassName(item?.className || "");
    setNewYearCodeAndName(item?.yearCodeAndName || "");
    setSelectedYearId(id);
    setShowAddForm(true); // Show the form for editing
  };

  // Save the updated entry (Add or Edit)
  const handleSave = async () => {
    if (newClassName.trim() && newYearCodeAndName.trim()) {
      try {
        if (selectedYearId) {
          // Update existing year entry
          await axios.put(`https://erp-backend-fy3n.onrender.com/api/classes/${selectedYearId}`, {
            className: newClassName,
            yearCodeAndName: newYearCodeAndName,
          });
          setData((prevData) =>
            prevData.map((row) =>
              row.id === selectedYearId
                ? { ...row, className: newClassName, yearCodeAndName: newYearCodeAndName }
                : row
            )
          );
        } else {
          // Create a new year entry
          const response = await axios.post("https://erp-backend-fy3n.onrender.com/api/classes", {
            className: newClassName,
            yearCodeAndName: newYearCodeAndName,
          });
          setData((prevData) => [...prevData, response.data]);
        }
        setNewClassName("");
        setNewYearCodeAndName("");
        setShowAddForm(false);
        setSelectedYearId(null);
      } catch (error) {
        console.error("Error saving data:", error);
        setError("Failed to save data. Please try again later.");
      }
    } else {
      alert("Please enter valid class name and year code.");
    }
  };

  // Delete an entry
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      try {
        await axios.delete(`https://erp-backend-fy3n.onrender.com/api/classes/${id}`);
        setData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error("Error deleting data:", error);
        setError("Failed to delete data. Please try again later.");
      }
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className={styles.rec}>
      <h2 className="mb-4">Year Master</h2>

      <Button onClick={() => setShowAddForm(!showAddForm)} className="mb-4">
        {showAddForm ? "Close Form" : "Add Year"}
      </Button>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="mb-4">
          <Row className="mb-3">
            <Col lg={6}>
              <FormLabel>Class Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Class Name"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={6}>
              <FormLabel>Year Code & Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Year Code & Name"
                value={newYearCodeAndName}
                onChange={(e) => setNewYearCodeAndName(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={handleSave}>{selectedYearId ? "Update Year" : "Add Year"}</Button>
            </Col>
          </Row>
        </div>
      )}

      {/* Table Section */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Table columns={columns} data={data} />
      )}
    </Container>
  );
};

export default YearMasterPage;
