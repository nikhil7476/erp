"use client";
import React, { useState } from 'react';
import styles from "@/app/students/add-new-student/page.module.css"
import Preview from '@/app/component/Preview';
import { Tab, Tabs, Container, Row, Col, FormSelect } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dynamic from 'next/dynamic';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { FormCheck } from 'react-bootstrap';

const AddNewStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    profilePic: '',
    fatherName: '',
    motherName: '',
    fatherMobileNo: '',
    phoneNo: '',
    gender: '',
    dob: '',
    class: '',
    section: '',
    religion: '',
    socialCategory: '',
    motherTongue: '',
    nationality: '',
    enrollmentNo: '',
    aadharCardNo: '',
    feeBookNo: '',
    caste: '',
    house: '',
    admissionDate: '',
    joiningDate: '',
    scholarNo: '',
    lastSchoolName: '',
    srNo: '',
    boardRegistrationNumber: '',
    tcSubmitted: '',
    bankAccountNo: '',
    accountName: '',
    bankName: '',
    ifscCode: '',
    residence: '',
    permanentAdd: '',
    country: '',
    state: '',
    cityOrDistrict: '',
    pinNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const [startDate, setStartDate] = useState(new Date());

  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview((prev) => !prev);
  }

  const inputFields = [
    { id: "birthCertificate", label: "Birth Certificate" },
    { id: "casteCertificate", label: "Caste Certificate" },
    { id: "characterCertificate", label: "Character Certificate" },
    { id: "docTtl", label: "Doc TTL" },
    { id: "marksheet", label: "Marksheet" },
    { id: "migrationCertificate", label: "Migration Certificate" },
    { id: "previousYearResult", label: "Previous Year Result" },
    { id: "transferCertificate", label: "T.C." },
  ];

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");

  const handleCopy = () => {
    setTargetText(sourceText);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Tabs defaultActiveKey="Basic Details" id="controlled-tab" className="mb-3">
            <Tab eventKey="Basic Details" title="Basic Details">
              {!showPreview ? (
                <Form className={styles.form} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <FormGroup as={Col} md="3" controlId="validationCustom01">
                      <FormLabel value={formData.firstName} onChange={handleChange} required>First name</FormLabel>
                      <FormControl
                        required
                        type="text"
                        placeholder="First name"
                      />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom02">
                      <FormLabel value={formData.middleName} onChange={handleChange} required>Middle name</FormLabel>
                      <FormControl
                        required
                        type="text"
                        placeholder="Middle name"
                      />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom03">
                      <FormLabel value={formData.lastName} onChange={handleChange} required>Last name</FormLabel>
                      <FormControl
                        required
                        type="text"
                        placeholder="Last name"
                      />
                    </FormGroup>
                    <FormGroup as={Col} md="3" className="position-relative mb-3">
                      <FormLabel value={formData.profilePic}>Profile Pic</FormLabel>
                      <FormControl
                        type="file"
                        required
                        name="file"
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Row>
                  <Row className="mb-3">
                    <FormGroup as={Col} md="3" controlId="validationCustom04">
                      <FormLabel value={formData.fatherName} onChange={handleChange} required>Father Name</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom05">
                      <FormLabel value={formData.motherName} onChange={handleChange} required>Mother Name</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom06">
                      <FormLabel value={formData.fatherMobileNo} onChange={handleChange} required>Father MobileNo</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom07">
                      <FormLabel value={formData.phoneNo} onChange={handleChange} required>Phone No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="3" controlId="validationCustom08">
                      <FormLabel value={formData.class} onChange={handleChange} required>Select Class</FormLabel>
                      <FormSelect>
                        <option>Select Class</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom09">
                      <FormLabel value={formData.section} onChange={handleChange} required>Select Section</FormLabel>
                      <FormSelect>
                        <option>Select Section</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom10">
                      <FormLabel value={formData.dob} onChange={handleChange} required>Date Of Birth</FormLabel>
                      <FormControl type="date" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom11">
                      <FormLabel value={formData.gender} required>Gender</FormLabel><br />
                      <FormCheck type="radio" value="Boy" label="Boy" checked={selectedValue === "Boy"} onChange={handleRadioChange} inline />
                      <FormCheck type="radio" value="Girl" label="Girl" checked={selectedValue === "Girl"} onChange={handleRadioChange} inline />
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="3" controlId="validationCustom12">
                      <FormLabel value={formData.religion} onChange={handleChange} required>Religion</FormLabel>
                      <FormSelect>
                        <option>Select</option>
                        <option value="1">Hindu</option>
                        <option value="2">Muslim</option>
                        <option value="3">Christian</option>
                        <option value="4">Buddhist</option>
                        <option value="5">Jainism</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom13">
                      <FormLabel value={formData.socialCategory} onChange={handleChange} required>Category</FormLabel>
                      <FormSelect>
                        <option>Select</option>
                        <option value="1">GENERAL</option>
                        <option value="2">OBC</option>
                        <option value="3">SC/ST</option>
                        <option value="4">MINORITY</option>
                        <option value="5">OTHERS</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom14">
                      <FormLabel value={formData.motherTongue} onChange={handleChange} required>Mother Tongue</FormLabel>
                      <FormSelect>
                        <option>Select</option>
                        <option value="1">Hindi</option>
                        <option value="2">Urdu</option>
                        <option value="3">Parsi</option>
                        <option value="4">Nepali</option>
                        <option value="5">Telugu</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom15">
                      <FormLabel value={formData.nationality} onChange={handleChange} required>Nationality</FormLabel>
                      <FormSelect>
                        <option>Indian</option>
                        <option value="1">Australian</option>
                        <option value="2">Canadian</option>
                        <option value="3">Indian</option>
                        <option value="4">Korean</option>
                        <option value="5">Afghan</option>
                        <option value="6">Chinese</option>
                        <option value="7">Japanese</option>
                        <option value="8">Mexican</option>
                      </FormSelect>
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="3" controlId="validationCustom16">
                      <FormLabel value={formData.enrollmentNo} onChange={handleChange} required>Enrollment No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom17">
                      <FormLabel value={formData.aadharCardNo} onChange={handleChange} required>Aadhar Card No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom18">
                      <FormLabel value={formData.feeBookNo} onChange={handleChange} required>Fee Book No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom19">
                      <FormLabel value={formData.caste} onChange={handleChange} required>Caste</FormLabel>
                      <FormSelect>
                        <option>Select</option>
                        <option value="1">Brahmins</option>
                        <option value="2">Kshatriyas</option>
                        <option value="3">Vaishyas</option>
                        <option value="4">Shudras</option>
                        <option value="5">Dalits</option>
                        <option value="5">Ansaris</option>
                        <option value="5">Other Muslims</option>
                      </FormSelect>
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="3" controlId="validationCustom20">
                      <FormLabel value={formData.house} onChange={handleChange} required>House</FormLabel>
                      <FormSelect>
                        <option>Select</option>
                        <option value="1">Condo</option>
                        <option value="2">Apartment</option>
                        <option value="3">Cottage</option>
                        <option value="4">Movable Dwelling</option>
                        <option value="5">Bungalow</option>
                        <option value="5">Duplex</option>
                        <option value="5">Mansion</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom21">
                      <FormLabel value={formData.admissionDate} onChange={handleChange} required>Date Of Admission</FormLabel>
                      <FormControl type="date" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom22">
                      <FormLabel value={formData.joiningDate} onChange={handleChange} required>Date Of joining</FormLabel>
                      <FormControl type="date" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom23">
                      <FormLabel value={formData.boardRegistrationNumber} onChange={handleChange} required>Board Registration Number</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="3" controlId="validationCustom24">
                      <FormLabel value={formData.scholarNo} onChange={handleChange} required>Scholar No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom25">
                      <FormLabel value={formData.lastSchoolName} onChange={handleChange} required>Name of School Last Attended</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom26">
                      <FormLabel value={formData.srNo} onChange={handleChange} required>SR. No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom27">
                      <FormLabel value={formData.tcSubmitted} required>TC Submitted</FormLabel><br />
                      <FormCheck type="radio" value="Yes" label="Yes"
                        checked={selectedValue === "Yes"} onChange={handleRadioChange} inline />
                      <FormCheck type="radio" value="No" label="No"
                        checked={selectedValue === "No"} onChange={handleRadioChange} inline />

                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="3" controlId="validationCustom28">
                      <FormLabel value={formData.bankAccountNo} onChange={handleChange} required>Bank Account No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom29">
                      <FormLabel value={formData.accountName} onChange={handleChange} required>A/C Name</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom30">
                      <FormLabel value={formData.bankName} onChange={handleChange} required>Bank Name</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="3" controlId="validationCustom31">
                      <FormLabel value={formData.ifscCode} onChange={handleChange} required>IFSC Code</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="5">
                      <FormLabel value={formData.residence} htmlFor='sourceTextarea' required>Residance Address</FormLabel>
                      <FormControl as="textarea" rows={6} style={{ height: '150px' }} id='sourceTextarea'
                        value={sourceText} onChange={(e) => setSourceText(e.target.value)} />
                    </FormGroup>
                    <FormGroup as={Col} md="2">
                      <FormCheck type='checkbox' label='Copy Adress' onClick={handleCopy} />
                    </FormGroup>
                    <FormGroup as={Col} md="5">
                      <FormLabel value={formData.permanentAdd} htmlFor='targetTextarea' required>Permanent Address</FormLabel>
                      <FormControl as="textarea" rows={6} style={{ height: '150px' }} id='targetTextarea'
                        value={targetText} onChange={(e) => setTargetText(e.target.value)} />
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="6" controlId="validationCustom34">
                      <FormLabel value={formData.country} onChange={handleChange} required>Country</FormLabel>
                      <FormSelect>
                        <option>Country</option>
                        <option value="1">India</option>
                        <option value="2">Australia</option>
                        <option value="3">Mexico</option>
                        <option value="4">Brazil</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col} md="6" controlId="validationCustom35">
                      <FormLabel value={formData.country} onChange={handleChange} required>Country</FormLabel>
                      <FormSelect>
                        <option>Country</option>
                        <option value="1">India</option>
                        <option value="2">Australia</option>
                        <option value="3">Mexico</option>
                        <option value="4">Brazil</option>
                      </FormSelect>
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="6" controlId="validationCustom36">
                      <FormLabel value={formData.state} onChange={handleChange} required>State</FormLabel>
                      <FormSelect>
                        <option>State</option>
                        <option value="1">Andhra Pradesh</option>
                        <option value="2">Arunachal Pradesh</option>
                        <option value="3">Bihar</option>
                        <option value="4">Chhattisgarh</option>
                        <option value="5">Chandigarh</option>
                        <option value="6">Goa</option>
                        <option value="7">Himachal Pradesh</option>
                        <option value="8">Kerala</option>
                        <option value="9">Uttar Pradesh</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col} md="6" controlId="validationCustom37">
                      <FormLabel value={formData.state} onChange={handleChange} required>State</FormLabel>
                      <FormSelect>
                        <option>State</option>
                        <option value="1">Andhra Pradesh</option>
                        <option value="2">Arunachal Pradesh</option>
                        <option value="3">Bihar</option>
                        <option value="4">Chhattisgarh</option>
                        <option value="5">Chandigarh</option>
                        <option value="6">Goa</option>
                        <option value="7">Himachal Pradesh</option>
                        <option value="8">Kerala</option>
                        <option value="9">Uttar Pradesh</option>
                      </FormSelect>
                    </FormGroup>
                  </Row>
                  <Row className='mb-3'>
                    <FormGroup as={Col} md="6" controlId="validationCustom38">
                      <FormLabel value={formData.cityOrDistrict} onChange={handleChange} required>City/District</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="6" controlId="validationCustom39">
                      <FormLabel value={formData.cityOrDistrict} onChange={handleChange} required>City/District</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                  </Row>
                  <Row>
                    <FormGroup as={Col} md="6" controlId="validationCustom40">
                      <FormLabel value={formData.pinNo} onChange={handleChange} required>Pin No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                    <FormGroup as={Col} md="6" controlId="validationCustom41">
                      <FormLabel value={formData.pinNo} onChange={handleChange} required>Pin No</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>
                  </Row>
                  <Row>
                    <Col>
                      <div className='buttons1'>
                        <Button type="button" id='submit' onClick={togglePreview}>Preview</Button>
                        <Button type="submit" id='submit'>Submit form</Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              ) : (
                <Preview data={formData} onEdit={togglePreview} />
              )}
            </Tab>
            <Tab eventKey="document-upload" title="Document Uploads">
              <Row>
                <Col>
                  <div style={{ padding: "20px", maxWidth: "600px", fontFamily: "Times New Roman" }}>
                    <h2>Document Upload</h2>
                    <p style={{ color: "red" }}>
                      Important Note: Please fill basic details first, then you can upload
                      documents from this section.
                    </p>
                    <Form onSubmit={handleSubmit}>
                      {inputFields.map((field) => (
                        <div key={field.id} style={{ marginBottom: "27px" }}>
                          <FormLabel htmlFor={field.id} style={{ display: "block", fontWeight: "600", fontSize: "22px" }}>
                            {field.label}
                          </FormLabel>
                          <input
                            type="file"
                            id={field.id}
                            onChange={(e) => handleFileChange(e, field.id)}
                            style={{ display: "block", marginTop: "18px" }}
                          />
                        </div>
                      ))}
                      <Button type="submit" id='submit' style={{ marginTop: "20px", padding: "10px 20px" }}>
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );

};

export default dynamic(() => Promise.resolve(AddNewStudent), { ssr: false })