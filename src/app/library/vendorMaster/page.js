"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "@/app/medical/routine-check-up/page.module.css";
import Table from "@/app/component/DataTable";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Form, Row, Col, Container, FormLabel, FormSelect, FormControl, Button, Breadcrumb } from "react-bootstrap";
import { CgAddR } from 'react-icons/cg';

const VendorMaster = () => {
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "Organisation Name",
      selector: (row) => row.organisationName,
      sortable: false,
    },
    {
      name: "Organisation Type",
      selector: (row) => row.organisationType,
      sortable: false,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: false,
    },
    {
      name: "Contact Personal Details",
      selector: (row) => (
        <div>
          {row.personalDetail.map((vend, index) => (
            <div key={index}>
              {vend.name}<br />{vend.mob} <br />{vend.email}
            </div>
          ))}
        </div>
      ),
      sortable: false,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="twobuttons d-flex">
          <button
            className="editButton"
            onClick={() => handleEdit(row.id)}
          >
            <FaEdit />
          </button>
          <button
            className="editButton btn-danger"
            onClick={() => handleDelete(row.id)}>
            <FaTrashAlt />
          </button>
        </div>
      ),
    },

  ];

  const data = [
    {
      id: 1,
      organisationName: "VISIT TO FIRE STATION",
      organisationType: '',
      address: '',
      personalDetail: [{ name: "Raju mandal", mob: "Mob.No: 3452523453", email: "Email: rajugmandal@gmail.com" }],
    },

  ];
  const handleEdit = (id) => {
    const item = data.find((row) => row.id === id);
    const updatedName = prompt("Enter new name:", item.name);

    try {
      const parsedSections = JSON.parse(updatedSection);
      setData((prevData) =>
        prevData.map((row) =>
          row.id === id
            ? { ...row, name: updatedName }
            : row
        )
      );
    } catch (error) {
      alert("Invalid JSON for sections. Please try again.");
    }
  };
  const handleDelete = (row) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      setData((prevData) => prevData.filter((item) => item.id !== row.id));
    }
  };
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)



  return (
    <Container className="">
       <Row className='mt-1 mb-1'>
                    <Col>
                      <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/library/all-module">
                          Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Vendor Master</Breadcrumb.Item>
                      </Breadcrumb>
                    </Col>
                  </Row>
      <button onClick={onClick} className={`mb-4 ${styles.search}`} id="submit">  <CgAddR />  Add New Vendor  </button>
      {showResults ?
        <div className="cover-sheet">
          <div className="studentHeading"><h2> Add New Vendor</h2></div>
          <Form className="formSheet">
            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel className="labelForm">Organization Name</FormLabel>
                <FormControl required type="text" />
              </Col>
              <Col lg={4}>
                <FormLabel className="labelForm">Organization Type</FormLabel>
                <FormSelect>
                  <option>Select</option>
                  <option value="1">Manufacturer</option>
                  <option value="2">Distributor</option>
                  <option value="3">Super Stockiest</option>
                  <option value="4">Dealer</option>
                  <option value="5">Retailer</option>
                </FormSelect>
              </Col>
           
              <Col lg={4}>
                <FormLabel className="labelForm">Contact Person Name</FormLabel>
                <FormControl required type="text" />
              </Col>
              </Row>
            <br />
            <Row>
              <Col lg={4}>
                <FormLabel className="labelForm">Status Of Enterprise</FormLabel>
                <FormSelect>
                  <option>Select</option>
                  <option value="1">Proprietorship </option>
                  <option value="2">Partnership</option>
                  <option value="3">PVT.LTD CO</option>
                  <option value="4">LTD.co.</option>
                  <option value="5">Others</option>
                </FormSelect>
              </Col>
              <Col lg={4}>
                <FormLabel className="labelForm">Organization Address</FormLabel>
                <FormControl as={"textarea"} rows={1} required type="text" />
              </Col>
              <Col lg={4}>
                <FormLabel className="labelForm">Organization website Address</FormLabel>
                <FormControl as={"textarea"} rows={1} required type="text" />
              </Col>

            </Row>
            <br />
            <Row>
              <Col lg={4}>
                <FormLabel className="labelForm">Item Category </FormLabel>
                <FormSelect>
                  <option>Select Any Category</option>
                  <option value="1">Construction Materials</option>
                  <option value="2">Electrical</option>
                  <option value="3">Furniture</option>
                  <option value="4">IT</option>
                  <option value="5">Lab Instruments - Chemistry Lab</option>
                  <option value="3">Lab Instruments - Civil Lab</option>
                  <option value="3">Lab Instruments - Electrical Lab</option>
                  <option value="3">Lab Instruments - Electronics Lab</option>
                  <option value="3">Plumbing</option>
                  <option value="3">Stationary</option>
                </FormSelect>
              </Col>
              <Col lg={4}>
                <FormLabel className="labelForm">TIN No</FormLabel>
                <FormControl required type="text" />
              </Col>
           
              <Col lg={4}>
                <FormLabel className="labelForm">Contact No</FormLabel>
                <FormControl required type="text" />
              </Col>
              </Row>
            <br />
            <Row>
              <Col lg={4}>
                <FormLabel className="labelForm">PAN No</FormLabel>
                <FormControl required type="text" />
              </Col>
           
              <Col lg={4}>
                <FormLabel className="labelForm">Email ID</FormLabel>
                <FormControl required type="email" />
              </Col>
              <Col lg={4}>
                <FormLabel className="labelForm">G.S.T No</FormLabel>
                <FormControl required type="text" />
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={4}>
                <FormLabel className="labelForm">Remark</FormLabel>
                <FormControl as={"textarea"} rows={1} required type="text" />
              </Col>
              <Col lg={4}>
                <FormLabel className="labelForm">Banker's Name With Address</FormLabel>
                <FormControl as={"textarea"} rows={1} required type="text" />
              </Col>
           
              <Col lg={4}>
                <FormLabel className="labelForm">Excise Registration No</FormLabel>
                <FormControl required type="text" />
              </Col>
              </Row>
            <br />
            <Row>
              <Col lg={4}>
                <FormLabel className="labelForm">Bank Account No</FormLabel>
                <FormControl required type="text" />
              </Col>
           
              <Col lg={4}>
                <FormLabel className="labelForm">IFSC Code</FormLabel>
                <FormControl required type="text" />
              </Col>
            </Row>
            <br />
            <Row className="mb-3">
              <Col><Button className="btn btn-primary mt-4">Add New Vendor</Button></Col>
            </Row>
          </Form>
        </div>
        : null}
      <br />
      <Row>
        <Col>
        <div className="tableSheet">
          <h2>Stock Vendor Records </h2>
          <Table columns={columns} data={data} />
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default dynamic(() => Promise.resolve(VendorMaster), { ssr: false })