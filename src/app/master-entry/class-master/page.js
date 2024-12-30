"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Form, Row, Col, Container, FormLabel, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import Table from "@/app/component/DataTable";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import styles from "@/app/medical/routine-check-up/page.module.css"; // Assuming shared styles

const ClassMasterPage = () => {
  const [data, setData] = useState([]); // State for class data
  const [newClassName, setNewClassName] = useState(""); // New class name state
  const [newSection, setNewSection] = useState(""); // New section state
  const [showAddForm, setShowAddForm] = useState(false); // Toggle add form visibility
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

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
      name: "Section",
      selector: (row) => row.section || "N/A",
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          <button className="editButton" onClick={() => handleEdit(row.id)}>
            <FaEdit />
          </button>
          <button className="deleteButton btn-danger" onClick={() => handleDelete(row.id)}>
            <FaTrashAlt />
          </button>
        </div>
      ),
    },
  ];

  // Fetch class data from API
  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://erp-backend-fy3n.onrender.com/class/api/classes"
      );
      if (response.data && Array.isArray(response.data)) {
        setData(response.data); // Setting fetched data
      } else {
        setError("Unexpected API response format.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle adding a new class
  const handleAddClass = async () => {
    if (newClassName.trim() && newSection.trim()) {
      try {
        const response = await axios.post(
          "https://erp-backend-fy3n.onrender.com/class/api/classes",
          {
            className: newClassName,
            section: newSection,
          }
        );

        // Append the new class to the state array
        setData((prevData) => [...prevData, response.data]);
        setNewClassName(""); // Reset class name input
        setNewSection(""); // Reset section input
        setShowAddForm(false); // Hide the form
      } catch (err) {
        console.error("Error adding class:", err);
        setError("Failed to add class. Please try again later.");
      }
    } else {
      alert("Please enter valid class name and section.");
    }
  };

  // Handle editing a class
  const handleEdit = async (id) => {
    const item = data.find((row) => row.id === id);
    const updatedClassName = prompt("Enter new class name:", item?.className || "");
    const updatedSection = prompt("Enter new section:", item?.section || "");

    if (updatedClassName && updatedSection) {
      try {
        await axios.put(
          `https://erp-backend-fy3n.onrender.com/class/api/classes/${id}`,
          {
            className: updatedClassName,
            section: updatedSection,
          }
        );

        // Update the class in state
        setData((prevData) =>
          prevData.map((row) =>
            row.id === id
              ? { ...row, className: updatedClassName, section: updatedSection }
              : row
          )
        );

        alert("Class updated successfully!");
      } catch (err) {
        console.error("Error updating class:", err);
        setError("Failed to update class. Please try again later.");
      }
    }
  };

  // Handle deleting a class
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this class?")) {
      try {
        await axios.delete(
          `https://erp-backend-fy3n.onrender.com/class/api/classes/${id}`
        );

        // Remove the class from the state array
        setData((prevData) =>
          prevData.filter((row) => row.id !== id)
        );

        alert("Class deleted successfully!");
      } catch (err) {
        console.error("Error deleting class:", err);
        setError("Failed to delete class. Please try again later.");
      }
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className={styles.formContainer}>
      <Form className={styles.form}>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className={`mb-4 ${styles.search}`}
        >
          Add Class
        </Button>

        {showAddForm && (
          <div className="result">
            <Row className="mb-3">
              <Col lg={6}>
                <FormLabel className={styles.class}>Class Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter Class Name"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={6}>
                <FormLabel className={styles.class}>Section</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter Section"
                  value={newSection}
                  onChange={(e) => setNewSection(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Button onClick={handleAddClass} className={styles.search}>
                  Add Class
                </Button>
              </Col>
            </Row>
          </div>
        )}

        <Row>
          <Col>
            <h2 style={{ fontSize: "22px" }}>Class & Section Records</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && <Table columns={columns} data={data} />}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(ClassMasterPage), { ssr: false });
