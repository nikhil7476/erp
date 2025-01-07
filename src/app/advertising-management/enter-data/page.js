"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "@/app/medical/routine-check-up/page.module.css";
import Table from "@/app/component/DataTable";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Form, Row, Col, Container, FormLabel, FormSelect, FormControl, Button } from "react-bootstrap";
import { CgAddR } from 'react-icons/cg';

const EnterData = () => {
     const columns = [
        {
          name: "#",
          selector: (row) => row.id,
          sortable: true,
          width: "80px",
        },
        {
            name: "Adv. Type",
            selector: (row) => row.advType,
            sortable: false,
        },
        {
          name: "Adv. Name",
          selector: (row) => row.advName,
          sortable: false,
        },
        {
          name: "Page No",
          selector: (row) => row.Page,
          sortable: false,
        },
        {
          name: "Size",
          selector: (row) => row.size,
          sortable: false,
        },
        {
          name: "Amount",
          selector: (row) => row.amount,
          sortable: false,
        },
        {
          name: "Remark",
          selector: (row) => row.remark,
          sortable: false,
        },
        {
          name: "File",
          selector: (row) => row.file,
          sortable: false,
        },
        {
          name: "Publish",
          selector: (row) => row.publish,
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
          advType: "",
          advName:'',
          Page:'',
          size:'',
          amount:'',
          remark:'',
          file:'',
          publish:'',
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
      <button onClick={onClick} className={`mb-4 ${styles.search}`} id="submit">  <CgAddR />  Add New Advertisment  </button>
      { showResults ?
      <div className="result">
        <Row className="mb-3">
        <Col lg={6}>
            <FormLabel className={styles.class}>Advertisement Name </FormLabel>
                <FormSelect>
                    <option>Select</option>
                    <option value="1">Event News</option>
                    <option value="2">News Paper Advertising</option>
                </FormSelect>
          </Col>
          <Col lg={6}>
            <FormLabel className={styles.class}>Publish Date </FormLabel>
            <FormControl required type="date" />
          </Col>
          <Col lg={6}>
            <FormLabel className={styles.class}>Advertisement Name </FormLabel>
            <FormControl required type="text" />
          </Col>
          <Col lg={6}>
            <FormLabel className={styles.class}>Size </FormLabel>
            <FormControl required type="text" />
          </Col>
          <Col lg={6}>
            <FormLabel className={styles.class}>Page No </FormLabel>
            <FormControl required type="text" />
          </Col>
          <Col lg={6}>
            <FormLabel className={styles.class}>File </FormLabel>
            <FormControl type="file" required name="file" />
          </Col>
          <Col lg={6}>
            <FormLabel className={styles.class}>Amount </FormLabel>
            <FormControl required type="text" />
          </Col>
          <Col lg={6}>
            <FormLabel className={styles.class}>Remark </FormLabel>
            <FormControl as={"textarea"} rows={1} name="file" />
          </Col>
        </Row>
        <br />
        <Row className="mb-3">
          <Col><Button className={styles.search}>Add New Advertisment</Button></Col>
        </Row>
      </div>
      : null }
      <br />
      <Row>
        <Col>
          <h2 style={{ fontSize: '22px' }}> Advertisement Records </h2>
          <Table columns={columns} data={data} />
        </Col>
      </Row>
    </Form>
  </Container>
  )
}

// export default addGalleryGroup
export default dynamic(() => Promise.resolve(EnterData), { ssr: false })