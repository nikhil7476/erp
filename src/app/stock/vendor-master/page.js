"use client";
import React, { useState } from 'react';
import Table from '@/app/component/DataTable';
import styles from "@/app/students/add-new-student/page.module.css"
import { Container, Row, Col, Breadcrumb, Form, FormLabel, FormGroup, FormControl, FormSelect, Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { CgAddR } from 'react-icons/cg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const storeMaster = () => {
  const [formData, setFormData] = useState({
    storeName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const columns = [
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: 'OrganizationName',
      selector: row => row.organizationName,
      sortable: true,
    },
    {
      name: 'OrganizationType',
      selector: row => row.organizationType,
      sortable: true,
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true,
    },
    {
      name: 'ContactPersonDetails',
      selector: row => row.contactPersonName,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div style={{
          display: 'flex',
        }}>
          <button className='editButton'
            onClick={() => handleEdit(row.id)}
          >
            Edit
          </button>
          <button className="editButton"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </div>
      ),
    }
  ];

  const data = [
    {
      id: 1,
      organizationName: 'Factory Outlet',
      organizationType: 'Furniture',
      address: 'Chair',
      contactPersonName: '3',
    },
    {
      id: 2,
      organizationName: 'Factory Outlet',
      organizationType: 'Furniture',
      address: 'Chair',
      contactPersonName: '3',
    },
    {
      id: 3,
      organizationName: 'Factory Outlet',
      organizationType: 'Furniture',
      address: 'Chair',
      contactPersonName: '3',
    },
  ];

  const [startDate, setStartDate] = useState(new Date());

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsPopoverOpen(false);
  };

  return (
    <Container className={styles.vehicle}>
      <Row className='mt-1 mb-1'>
        <Col>
          <Breadcrumb style={{ marginLeft: '20px' }}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/stock/all-module">
              Stock Module
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Vendor Master</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={togglePopover} id="submit" type='button' style={{ marginLeft: '20px' }}>
            <CgAddR style={{ fontSize: '27px', marginTop: '-2px', marginRight: '5px' }} /> Add New Vendor</button>
          {isPopoverOpen && (
            <div className='absolute right-0 mt-3 w-60 p-4' style={{ backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '940px' }}>
              <h3>Add New Vendor</h3>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <FormGroup as={Col} md="6" controlId="validationCustom03">
                    <FormLabel value={formData.organizationName} onChange={handleChange} required>Organization Name</FormLabel>
                    <FormControl
                      required
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom02">
                    <FormLabel value={formData.organizationType} onChange={handleChange} required>Organization Type</FormLabel>
                    <FormSelect>
                      <option>Select</option>
                      <option value="1">RECUURING</option>
                      <option value="2">NON RECUURING</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row className="mb-3">
                  <FormGroup as={Col} md="6" controlId="validationCustom01">
                    <FormLabel value={formData.contactPersonName} onChange={handleChange} required>Contact Person Name</FormLabel>
                    <FormControl
                      required
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom04">
                    <FormLabel value={formData.statusOfEnterprise} onChange={handleChange} required>Status Of Enterprise</FormLabel>
                    <FormSelect>
                      <option>Select</option>
                      <option value="1">RECUURING</option>
                      <option value="2">NON RECUURING</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row className="mb-3">
                  <FormGroup as={Col} md="6" controlId="validationCustom05">
                    <FormLabel value={formData.organizationName} onChange={handleChange} required>Organization Address</FormLabel>
                    <FormControl
                      required
                      type="textarea"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom06">
                    <FormLabel value={formData.organizationType} onChange={handleChange} required>Item category</FormLabel>
                    <FormSelect>
                      <option>Select</option>
                      <option value="1">RECUURING</option>
                      <option value="2">NON RECUURING</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row className='mb-3'>
                  <FormGroup as={Col} md="6" controlId="validationCustom07">
                    <FormLabel value={formData.organizationWebAddress} onChange={handleChange} required>Organization web Address</FormLabel>
                    <FormControl
                      required
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom08">
                    <FormLabel value={formData.tinNo} onChange={handleChange} required>TIN No</FormLabel>
                    <FormControl
                      required
                      type="number"
                    />
                  </FormGroup>
                </Row>
                <Row className='mb-3'>
                  <FormGroup as={Col} md="6" controlId="validationCustom09">
                    <FormLabel value={formData.contactNo} onChange={handleChange} required>Contact No</FormLabel>
                    <FormControl
                      required
                      type="number"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom10">
                    <FormLabel value={formData.panNo} onChange={handleChange} required>PAN No</FormLabel>
                    <FormControl
                      required
                      type="number"
                    />
                  </FormGroup>
                </Row>
                <Row className='mb-3'>
                  <FormGroup as={Col} md="6" controlId="validationCustom11">
                    <FormLabel value={formData.emailId} onChange={handleChange} required>Email ID</FormLabel>
                    <FormControl
                      required
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom12">
                    <FormLabel value={formData.gstNo} onChange={handleChange} required>G.S.T No</FormLabel>
                    <FormControl
                      required
                      type="number"
                    />
                  </FormGroup>
                </Row>
                <Row className='mb-3'>
                  <FormGroup as={Col} md="6" controlId="validationCustom13">
                    <FormLabel value={formData.remark} onChange={handleChange} required>Remark</FormLabel>
                    <FormControl
                      required
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom14">
                    <FormLabel value={formData.exciseRegistrationNo} onChange={handleChange} required>Excise Registration No</FormLabel>
                    <FormControl
                      required
                      type="number"
                    />
                  </FormGroup>
                </Row>
                <Row className='mb-3'>
                  <FormGroup as={Col} md="6" controlId="validationCustom15">
                    <FormLabel value={formData.bankerName} onChange={handleChange} required>Banker's Name With Address</FormLabel>
                    <FormControl
                      required
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom16">
                    <FormLabel value={formData.bankAccountNo} onChange={handleChange} required>Bank Account No</FormLabel>
                    <FormControl
                      required
                      type="number"
                    />
                  </FormGroup>
                </Row>
                <Row className='mb-3'>
                  <FormGroup as={Col} md="6" controlId="validationCustom19">
                    <FormLabel value={formData.ifscCode} onChange={handleChange} required>IFSC Code</FormLabel>
                    <FormControl
                      required
                      type="number"
                    />
                  </FormGroup>
                  <FormGroup as={Col} md="6" controlId="validationCustom20">
                  </FormGroup>
                </Row>
                <Button type="submit" id="submit" onSubmit={handleSubmit}>Add New Item</Button>
              </Form>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ marginLeft: '23px', marginTop: '15px', marginBottom: '25px', fontSize: '22px' }}>Stock Vendor Record</h2>
          <Table columns={columns} data={data} />
          <div className={styles.buttons} style={{ float: 'right', marginRight: '10px' }}>
            <button type="button" className="editButton">Previous</button>
            <button type="button" className="editButton">Next</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(storeMaster), { ssr: false });