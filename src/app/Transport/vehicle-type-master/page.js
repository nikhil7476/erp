"use client";
import React, { useState } from 'react';
import Table from '@/app/component/DataTable';
import styles from "@/app/students/add-new-student/page.module.css";
import { Container, Row, Col, Breadcrumb, Form, FormLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { CgAddR } from 'react-icons/cg';

const VehicleTypeRecords = () => {
    const [formData, setFormData] = useState({
        vehicleType: "",
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
            name: 'Name',
            selector: row => row.Name,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: 'flex' }}>
                    <button className='editButton' onClick={() => handleEdit(row.id)}>
                        Edit
                    </button>
                    <button className="editButton" onClick={() => handleDelete(row.id)}>
                        Delete
                    </button>
                </div>
            ),
        }
    ];

    const data = [
        { id: 1, Name: 'AUTO RICKSHAW' },
        { id: 2, Name: 'MAXIMO' },
        { id: 3, Name: 'RICKSHAW' },
        { id: 4, Name: 'MAX' },
        { id: 5, Name: 'BOLERO' },
    ];

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
                        <Breadcrumb.Item href="/transport">
                            Transport
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Add Vehicle Type</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={togglePopover} id="submit" type='button' style={{ marginLeft: '20px' }}>
                        <CgAddR style={{ fontSize: '27px', marginRight: '5px' }} /> New Vehicle Type
                    </button>
                    {isPopoverOpen && ( 
                        <div className='absolute right-0 mt-3 w-60 p-4' style={{ backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '600px' }}>
                            <h3>Add Vehicle Type</h3>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup className="mb-3">
                                    <FormLabel>Vehicle Type</FormLabel>
                                    <FormControl
                                        required
                                        type="text"
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        style={{ width: '100%' }}
                                    />
                                </FormGroup>
                                <Button type="submit" id="submit">Add Vehicle Type</Button>
                            </Form>
                        </div>
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ marginLeft: '23px', marginTop: '15px', marginBottom: '20px', fontSize: '22px' }}>Vehicle Type Records</h2>
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

export default dynamic(() => Promise.resolve(VehicleTypeRecords), { ssr: false });
