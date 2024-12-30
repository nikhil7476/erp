// UPDATED CODE FOR API // PARTIALLY DATA-DIFFRENT KEYS-ITEM-MASTER
"use client"; // Enables client-side rendering for this file

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Breadcrumb, Form, FormControl, Button, Table } from "react-bootstrap";
import { CgAddR } from "react-icons/cg";

const ItemMaster = () => {
  const [data, setData] = useState([]); // State to store item master records
  const [error, setError] = useState(null); // State to store errors
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://erp-backend-fy3n.onrender.com/itemMaster/api/itemMasters"
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
  const filteredData = data.filter(
    (item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/stock/all-module">
              Stock Module
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Item Master</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row className="d-flex justify-content-between align-items-center mb-3">
        <Col>
          <h1>Stock Item Master</h1>
        </Col>
        <Col className="text-end">
          <Button variant="primary">
            <CgAddR style={{ fontSize: "20px", marginRight: "5px" }} /> Add New Item
          </Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <FormControl
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Item Type</th>
              <th>Item Name</th>
              <th>Maintain Minimum Stock</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id || index}>
                <td>{index + 1}</td>
                <td>{item.categoryName}</td>
                <td>{item.itemType}</td>
                <td>{item.itemName}</td>
                <td>{item.maintainMinimumStock}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ItemMaster;
