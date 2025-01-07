"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "@/app/medical/routine-check-up/page.module.css";
import Table from "@/app/component/DataTable";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Form, Row, Col, Container, FormLabel, FormSelect, FormControl, Button } from "react-bootstrap";
import { CgAddR } from 'react-icons/cg';

const Publisher = () => {
     const columns = [
        {
          name: "#",
          selector: (row) => row.id,
          sortable: true,
          width: "80px",
        },
        {
          name: "Publisher Name",
          selector: (row) => row.publishername,
          sortable: false,
        },
        {
            name: "Phone No.",
            selector: (row) => row.phoneNo,
            sortable: false,
          },
          {
            name: "Registrtion No",
            selector: (row) => row.regNo,
            sortable: false,
          },
          {
            name: "Fax No",
            selector: (row) => row.faxNo,
            sortable: false,
          },
          {
            name: "Location",
            selector: (row) => row.location,
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
          {
            name: "Tax Ident No",
            selector: (row) => row.taxident,
            sortable: false,
          },{
            name: "Mobile No",
            selector: (row) => row.mobNo,
            sortable: false,
          },
          {
            name: "Email",
            selector: (row) => row.email,
            sortable: false,
          },
      ];
    
      const data = [
        {
          id: 1,
          publishername: "VISIT TO FIRE STATION",
          phoneNo:'',
          regNo:'',
          faxNo:'',
          location:'',
          taxident:'',
          mobNo:'',
          email:''
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
    <Container className={styles.formContainer}>
    <Form className={styles.form}>
      <button onClick={onClick} className={`mb-4 ${styles.search}`} id="submit">  <CgAddR />  Add New Publisher  </button>
      { showResults ?
      <div className="result">
        <Row className="mb-3">
          <Col lg={6}>
            <FormLabel className={styles.class}>Publisher Name</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
          </Col>
          <Col lg={6}>
            <FormLabel className={styles.class}>Publisher Phone No.</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
          </Col>
        </Row><br />
        <Row>
        <Col lg={6}>
            <FormLabel className={styles.class}>Publisher Registrtion No</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
        </Col>
        <Col lg={6}>
            <FormLabel className={styles.class}>Publisher Fax no.</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
        </Col>
        </Row>  
        <br />
        <Row>
        <Col lg={6}>
            <FormLabel className={styles.class}>Publisher Location</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
        </Col>
        <Col lg={6}>
            <FormLabel className={styles.class}>Tax ident no</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
        </Col>
        </Row>  
        <br />
        <Row>
        <Col lg={6}>
            <FormLabel className={styles.class}>Publisher Mobile No</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
        </Col>
        <Col lg={6}>
            <FormLabel className={styles.class}> Publisher Email</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
        </Col>
        </Row> 
        <br />
        <Row>
        <Col lg={6}>
            <FormLabel className={styles.class}>Publisher Home Pagw</FormLabel>
            <FormControl required type="text" placeholder="Group Name" />
        </Col>
        </Row>
        <br />
        <Row className="mb-3">
          <Col><Button className={styles.search}>Add New Publisher</Button></Col>
        </Row>
      </div>
      : null }
      <br />
      <Row>
        <Col>
          <h2 style={{ fontSize: '22px' }}>Library Publisher Records </h2>
          <Table columns={columns} data={data} />
          
        </Col>
      </Row>
    </Form>
  </Container>
  )
}

export default dynamic(() => Promise.resolve(Publisher), { ssr: false })