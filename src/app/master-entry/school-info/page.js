"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Preview from "@/app/component/Preview";
import styles from "../school-info/page.module.css";

export default function Form() {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    phoneNo: "",
    email: "",
    webAddress: "",
    address: "",
    accountNo: "",
    ifscCode: "",
    bankName: "",
    branchName: "",
    logo: null,
  });

  const [schools, setSchools] = useState([]);

  // Corrected API Base URL
  const apiBaseUrl = "https://erp-backend-fy3n.onrender.com/api/schools";

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get(apiBaseUrl);
      setSchools(response.data);
    } catch (error) {
      console.error("Error fetching schools. Details:", error.response?.data || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      await axios.post(apiBaseUrl, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("School added successfully!");
      fetchSchools();
    } catch (error) {
      console.error("Error adding school. Details:", error.response?.data || error.message);
      alert("Failed to add school.");
    }
  };

  const handleUpdate = async (id) => {
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      await axios.put(`${apiBaseUrl}/${id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("School updated successfully!");
      fetchSchools();
    } catch (error) {
      console.error("Error updating school. Details:", error.response?.data || error.message);
      alert("Failed to update school.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/${id}`);
      alert("School deleted successfully!");
      fetchSchools();
    } catch (error) {
      console.error("Error deleting school. Details:", error.response?.data || error.message);
      alert("Failed to delete school.");
    }
  };

  const togglePreview = () => {
    setShowPreview((prev) => !prev);
  };

  return (
    <div className={styles.inputs} style={{ padding: "20px", maxWidth: "1200px" }}>
      <h2>School Form</h2>
      {!showPreview ? (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row", gap: "27px", margin: "auto" }} className={styles.form}>
          <div className={styles.label1}>
            <label>
              School Name:
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone No:
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Web Address:
              <input
                type="url"
                name="webAddress"
                value={formData.webAddress}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Address:
              <textarea
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.label2}>
            <label>
              Account No:
              <input
                type="text"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              IFSC Code:
              <input
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Bank Name:
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Branch Name:
              <input
                type="text"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Logo Image:
              <input type="file" name="logo" onChange={handleFileChange} className={styles.file} required />
            </label>
          </div>
        </form>
      ) : (
        <Preview data={formData} onEdit={togglePreview} />
      )}

      <div className={styles.buttons}>
        <button className={styles.btnn} type="button" onClick={togglePreview}>
          Preview
        </button>
        <button className={styles.btnn} type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
