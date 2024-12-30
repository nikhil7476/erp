"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "@/app/medical/routine-check-up/page.module.css";
import Table from "@/app/component/DataTable";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Form, Row, Col, Container, FormLabel, FormControl, Button } from "react-bootstrap";
import axios from "axios";

const AddGalleryGroup = () => {
  const [data, setData] = useState([]); // Table data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [showAddForm, setShowAddForm] = useState(false); // Toggle Add Form visibility
  const [newGroupName, setNewGroupName] = useState(""); // New gallery group name

  // Table columns configuration
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "80px",
    },
    {
      name: "Name",
      selector: (row) => row.groupName || "N/A", // Default to "N/A" if `groupName` is missing
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
      const response = await axios.get("/api/galleryGroups");
      const fetchedData = response.data || [];
      setData(fetchedData);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Edit existing group
  const handleEdit = async (id) => {
    const item = data.find((row) => row.id === id);
    const updatedName = prompt("Enter new name:", item?.groupName || "");
    if (updatedName) {
      try {
        await axios.put(`/api/galleryGroups/${id}`, { groupName: updatedName });
        setData((prevData) =>
          prevData.map((row) =>
            row.id === id ? { ...row, groupName: updatedName } : row
          )
        );
      } catch (error) {
        console.error("Error updating data:", error);
        setError("Failed to update data. Please try again later.");
      }
    }
  };

  // Delete a group
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this group?")) {
      try {
        await axios.delete(`/api/galleryGroups/${id}`);
        setData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error("Error deleting data:", error);
        setError("Failed to delete data. Please try again later.");
      }
    }
  };

  // Add a new gallery group
  const handleAdd = async () => {
    if (newGroupName.trim()) {
      try {
        const response = await axios.post("/api/galleryGroups", {
          groupName: newGroupName,
        });
        setData((prevData) => [...prevData, response.data]);
        setNewGroupName("");
        setShowAddForm(false);
      } catch (error) {
        console.error("Error adding data:", error);
        setError("Failed to add data. Please try again later.");
      }
    } else {
      alert("Please enter a valid group name.");
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
          Add Group
        </Button>

        {/* Add Form */}
        {showAddForm && (
          <div className="mb-4">
            <Row className="mb-3">
              <Col lg={6}>
                <FormLabel>Group Name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter Group Name"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={handleAdd} className={styles.search}>
                  Add Group
                </Button>
              </Col>
            </Row>
          </div>
        )}

        {/* Table Section */}
        <Row>
          <Col>
            <h2 style={{ fontSize: "22px" }}>Group Records</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && <Table columns={columns} data={data} />}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(AddGalleryGroup), { ssr: false });
