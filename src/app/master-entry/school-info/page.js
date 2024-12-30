"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Preview from "@/app/component/Preview";
import styles from "../school-info/page.module.css";

export default function Form() {
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
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

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "logo" && formData.logo) {
          data.append(key, formData.logo);
        } else {
          data.append(key, formData[key]);
        }
      });

      // Send POST request to the backend
      const response = await axios.post("school/api/school", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);

      if (response.status === 201) {
        alert("Form submitted successfully!");
        setFormData({
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
      } else {
        alert(response.data.message || "Failed to submit the form.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  const togglePreview = () => {
    setShowPreview((prev) => !prev);
  };

  return (
    <div className={styles.inputs} style={{ padding: "20px", maxWidth: "1200px" }}>
      <h2>Inputs</h2>
      {!showPreview ? (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "row", gap: "27px", margin: "auto" }}
          className={styles.form}
        >
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
          <button className={styles.btnn} type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <Preview data={formData} onEdit={togglePreview} />
      )}
      <div className={styles.buttons}>
        <button className={styles.btnn} type="button" onClick={togglePreview}>
          Preview
        </button>
      </div>
    </div>
  );
}
