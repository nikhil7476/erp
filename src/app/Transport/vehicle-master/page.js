"use client";
import React, { useState } from 'react';
import Table from '@/app/component/DataTable';
import styles from "@/app/students/add-new-student/page.module.css"
import { Container, Row, Col, Breadcrumb, Form, FormLabel, FormGroup, FormControl,FormSelect, Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { CgAddR } from 'react-icons/cg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VehicleRecords = () => {
    const [formData, setFormData] = useState({
        vehicleType: '',
        driverName: '',
        vehicleNo: '',
        driverMobileNo: '',
        chassisNo: '',
        driverLicenseNo: '',
        engineNo: '',
        licenseValidTill: '',
        insuranceAmount: '',
        seatingCapacity: '',
        insuranceCompany: '',
        helperName: '',
        insurancePolicyNo: '',
        helperMobileNo: '',
        insuranceValidTill: '',
        remark: '',
        typeOfOwnership: '',
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
      name: 'VehicleType',
      selector: row => row.vehicleType,
      sortable: true,
    },
    {
        name: 'VehicleNo',
        selector: row => row.vehicleNo,
        sortable: true,
      },
      {
        name: 'DriverName',
        selector: row => row.driverName,
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

  const data =[
    {
      id: 1,
      vehicleType: 'Bus',
      vehicleNo: 'Bus',
      driverName: 'DNAME 1',
    },
    {
       id: 2,
       vehicleType: 'Bus',
       vehicleNo: 'UP35AT3968',
       driverName: 'Rakesh Babu Bus 11',
    },
    {
      id: 3,
      vehicleType: 'Bus',
      vehicleNo: 'UP35AT3970',
      driverName: 'Ram jee Bus 12',
    },
    {
       id: 4,
       vehicleType: 'Bus',
       vehicleNo: 'UP35AT3969',
       driverName: 'Dinesh kumar Bus 10',
    },
    {
        id: 5,
        vehicleType: 'Bus',
        vehicleNo: 'UP35AT3967',
        driverName: 'Pankaj Bus 9',
    },
    {
        id: 6,
        vehicleType: 'Bus',
        vehicleNo: 'UP35AT1104',
        driverName: 'Raju Awasthi Bus 6',
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
                  <Breadcrumb.Item href="/Transport/all-module">
                      Transport
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Add Vehicle</Breadcrumb.Item>
              </Breadcrumb>
          </Col>
        </Row>
        <Row>
            <Col>
               <button onClick={togglePopover} id="submit" type='button' style={{ marginLeft: '20px' }}>
                <CgAddR style={{ fontSize: '27px', marginTop: '-2px', marginRight: '5px' }} /> New Vehicle Type</button>
               {isPopoverOpen && (
                <div className='absolute right-0 mt-3 w-60 p-4' style={{ backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '940px' }}>
                    <h3>Add Vehicle Type</h3>
                <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                <FormGroup as={Col} md="6" controlId="validationCustom01">
                  <FormLabel value={formData.vehicleType} onChange={handleChange} required>Vehicle Type</FormLabel>
                  <FormSelect>
                      <option>Select Type</option>
                      <option value="1">VAN</option>
                      <option value="2">AUTO RICKSHAW</option>
                      <option value="3">RICKSHAW</option>
                      <option value="4">BUS</option>
                  </FormSelect>
                </FormGroup>
                <FormGroup as={Col} md="6" controlId="validationCustom02">
                  <FormLabel value={formData.driverName} onChange={handleChange} required>Driver name</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                </Row>
                <Row className='mb-3'>
                <FormGroup as={Col} md="6" controlId="validationCustom03">
                  <FormLabel value={formData.vehicleNo} onChange={handleChange} required>Vehicle No</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                <FormGroup as={Col} md="6" controlId="validationCustom04">
                  <FormLabel value={formData.driverMobileNo} onChange={handleChange} required>Driver Mobile No</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                </Row>
                <Row className='mb-3'>
                <FormGroup as={Col} md="6" controlId="validationCustom05">
                  <FormLabel value={formData.chassisNo} onChange={handleChange} required>Chassis No</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                <FormGroup as={Col} md="6" controlId="validationCustom06">
                  <FormLabel value={formData.driverLicenseNo} onChange={handleChange} required>Driver License No</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                </Row>
                <Row className='mb-3'>
                <FormGroup as={Col} md="6" controlId="validationCustom07">
                  <FormLabel value={formData.engineNo} onChange={handleChange} required>EngineNo</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                <FormGroup as={Col} md="6" controlId="validationCustom08">
                  <FormLabel value={formData.licenseValidTill} onChange={handleChange} required>License Valid Till</FormLabel><br/>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id='date' />
                </FormGroup>
                </Row>
                <Row className='mb-3'>
                <FormGroup as={Col} md="6" controlId="validationCustom09">
                  <FormLabel value={formData.insuranceAmount} onChange={handleChange} required>Insurance Amount</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                <FormGroup as={Col} md="6" controlId="validationCustom10">
                  <FormLabel value={formData.seatingCapacity} onChange={handleChange} required>Seating Capacity</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                </Row>
                <Row className='mb-3'>
                <FormGroup as={Col} md="6" controlId="validationCustom11">
                  <FormLabel value={formData.insuranceCompany} onChange={handleChange} required>Insurance Company</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                <FormGroup as={Col} md="6" controlId="validationCustom12">
                  <FormLabel value={formData.helperName} onChange={handleChange} required>Helper Name</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                </Row>
                <Row className='mb-3'>
                <FormGroup as={Col} md="6" controlId="validationCustom13">
                  <FormLabel value={formData.insurancePolicyNo} onChange={handleChange} required>Insurance Policy No</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                <FormGroup as={Col} md="6" controlId="validationCustom14">
                  <FormLabel value={formData.helperMobileNo} onChange={handleChange} required>Helper Mobile No</FormLabel>
                  <FormControl
                    required
                    type="text"
                  />
                </FormGroup>
                </Row>
                <Row className='mb-3'>
                <FormGroup as={Col} md="6" controlId="validationCustom15">
                  <FormLabel value={formData.insuranceValidTill} onChange={handleChange} required>Insurance Valid Till</FormLabel><br/>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id='date' />
                </FormGroup>
                <FormGroup as={Col} md="6" controlId="validationCustom16">
                  <FormLabel value={formData.remark} onChange={handleChange} required>Remark</FormLabel>
                  <FormControl
                    required
                    type="textarea"
                  />
                </FormGroup>
                </Row>
                <Row className='mb-3'>
                <FormGroup as={Col} md="6" controlId="validationCustom01">
                  <FormLabel value={formData.typeOfOwnership} onChange={handleChange} required>Type Of Ownership</FormLabel>
                  <FormSelect>
                      <option>Select</option>
                      <option value="1">SCHOOL DISTRICT OWNED</option>
                      <option value="2">CONTRACTED TRANSPORTATION COMPANY</option>
                      <option value="3">PARENT-OWNED CARPOOLS</option>
                  </FormSelect>
                </FormGroup>  
                </Row>
                <Button type="submit" id="submit" onSubmit={handleSubmit}>Add Vehicle</Button>
                </Form>
              </div>
               )}
            </Col>
        </Row>
        <Row>
        <Col>
        <h2 style={{ marginLeft: '23px', marginTop: '15px', marginBottom: '25px', fontSize: '22px' }}>Vehicle Records</h2>
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

export default dynamic (() => Promise.resolve(VehicleRecords), {ssr: false});