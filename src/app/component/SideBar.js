"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaSchool, FaUserGraduate, FaFileAlt, FaCog } from "react-icons/fa";

export default function Sidebar({ isOpen, toggleSidebar }) {
    const [activeKey, setActiveKey] = useState(false);
    const menuItems = [
        { title: "Dashboard", href: "/", icon: <FaHome /> },
        { title: "Home", href: "/home", icon: <FaHome /> },
    ];

    const masterEntryItems = [
        { title: "All Modules", href: "/master-entry/all-module", icon: <FaCog /> },
        { title: "School Info", href: "/master-entry/school-info", icon: <FaSchool /> },
        { title: "Class Master", href: "/master-entry/class-master", icon: <FaUserGraduate /> },
        { title: "City Master", href: "/master-entry/city-master", icon: <FaSchool /> },
        { title: "Year Master", href: "/master-entry/year-master", icon: <FaFileAlt /> },
        { title: "Document Upload", href: "/master-entry/document-upload", icon: <FaFileAlt /> },
        { title: "Category Master", href: "/master-entry/category-master", icon: <FaFileAlt /> },
        { title: "Religion Master", href: "/master-entry/religion-master", icon: <FaFileAlt /> },
        { title: "Subject Master", href: "/master-entry/subject-master", icon: <FaFileAlt /> },
        { title: "Caste Master", href: "/master-entry/caste-master", icon: <FaFileAlt /> },
    ];

    const studentItems = [
        { title: "All Modules", href: "/students/all-module", icon: <FaCog /> },
        { title: "Add New Student", href: "/students/add-new-student", icon: <FaSchool /> },
        { title: "Update Student Data", href: "/students/update-student", icon: <FaUserGraduate /> },
        { title: "Assign RollNo", href: "/students/assign-roll-no", icon: <FaSchool /> },
        { title: "Promote Student", href: "/students/promote-student", icon: <FaFileAlt /> },
        { title: "Transfer Certificate", href: "/students/transfer-certificate", icon: <FaFileAlt /> },
        { title: "Id Card", href: "/students/id-card", icon: <FaFileAlt /> },
        // { title: "Religion Master", href: "/master-entry/religion-master", icon: <FaFileAlt /> },
        // { title: "Subject Master", href: "/master-entry/subject-master", icon: <FaFileAlt /> },
        // { title: "Caste Master", href: "/master-entry/caste-master", icon: <FaFileAlt /> },
    ];
    const transportItems = [
        { title: "All Modules", href: "/Transport/all-module", icon: <FaCog /> },
        { title: "Vehicle Type Master", href: "/Transport/vehicle-type-master", icon: <FaSchool /> },
        { title: "Vehicle Master", href: "/Transport/vehicle-master", icon: <FaUserGraduate /> },
        { title: "Route Master", href: "/Transport/route-master", icon: <FaSchool /> },
        { title: "Fuel Filling", href: "/Transport/fuel-filling", icon: <FaFileAlt /> },
        { title: "Student Vehicle Relation", href: "/Transport/student-vehicle-relation", icon: <FaFileAlt /> },
    ];
    const feeItems = [
        { title: "All Modules", href: "/fees/all-module", icon: <FaCog /> },
        { title: "Dashboard", href: "/fees/dashboard", icon: <FaSchool /> },
        { title: "School Accounts", href: "/fees/school-account", icon: <FaUserGraduate /> },
        { title: "Installment Master", href: "/fees/installment-master", icon: <FaSchool /> },
        { title: "Head Master", href: "/fees/head-master", icon: <FaFileAlt /> },
        { title: "Fee Group", href: "/fees/fee-group", icon: <FaFileAlt /> },
        { title: "Fee Setting", href: "/fees/fee-setting", icon: <FaFileAlt /> },
        { title: "Bank Master", href: "/fees/bank-master", icon: <FaFileAlt /> },
        { title: "Pretty Head", href: "/fees/pretty-head", icon: <FaFileAlt /> },
        { title: "Fee Structure", href: "/fees/fee-structure", icon: <FaFileAlt /> },
        { title: "Fixed Amount", href: "/fees/fixed-amount", icon: <FaFileAlt /> },
        { title: "Fee Entry", href: "/fees/fee-entry", icon: <FaFileAlt /> },
        { title: "Concession Entry", href: "/fees/concession-entry", icon: <FaFileAlt /> },
        { title: "Cheque Bounce Entry", href: "/fees/cheque-bounce", icon: <FaFileAlt /> },
    ];

    const frontItems = [
        { title: "All Modules", href: "/front-office/all-module", icon: <FaCog /> },
        { title: "Mail In", href: "/front-office/mail-in", icon: <FaSchool /> },
        { title: "Mail Out", href: "/front-office/mail-out", icon: <FaUserGraduate /> },
        { title: "Address Book", href: "/front-office/address-book", icon: <FaSchool /> },
    ];

    const stockItems = [
        { title: "All Modules", href: "/stock/all-module", icon: <FaCog /> },
        { title: "Store Master", href: "/stock/store-master", icon: <FaSchool /> },
        { title: "Item Category", href: "/stock/item-category", icon: <FaUserGraduate /> },
        { title: "Item Master", href: "/stock/item-master", icon: <FaSchool /> },
        { title: "Vendor Master", href: "/stock/vendor-master", icon: <FaFileAlt /> },
        { title: "Quotation Master", href: "/stock/quotation-master", icon: <FaFileAlt /> },
        { title: "Purchase Order", href: "/stock/purchase-order", icon: <FaFileAlt /> },
        { title: "Stock Available", href: "/stock/stock-available", icon: <FaFileAlt /> },
        { title: "Issue Item", href: "/stock/issue-item", icon: <FaFileAlt /> },
        { title: "Return Item", href: "/stock/return-item", icon: <FaFileAlt /> },
        { title: "Write Off Entry", href: "/stock/write-off-entry", icon: <FaFileAlt /> },
        { title: "Gate Pass", href: "/stock/gate-pass", icon: <FaFileAlt /> },
        { title: "Generate Gate Pass", href: "/stock/generate-gate-pass", icon: <FaFileAlt /> },
    ];
    const accountItems = [
        { title: "All Modules", href: "/accounts/all-module", icon: <FaCog /> },
        { title: "Stock Purchase", href: "/accounts/stock-purchase", icon: <FaSchool /> },
        { title: "HRD Salary", href: "/accounts/hrd-salary", icon: <FaUserGraduate /> },
        { title: "Expense Entry", href: "/accounts/expense-entry", icon: <FaSchool /> },
        { title: "Bal Bank", href: "/accounts/bal-bank", icon: <FaFileAlt /> },
        { title: "All Income", href: "/accounts/all-income", icon: <FaFileAlt /> },
    ];
    const galleryItems = [
        { title: "All Modules", href: "/gallery/all-module", icon: <FaCog /> },
        { title: "Add Group", href: "/gallery/add-group", icon: <FaSchool /> },
        { title: "Add Image", href: "/gallery/add-image", icon: <FaUserGraduate /> },
        { title: "Image Record", href: "/gallery/image-record", icon: <FaSchool /> },
    ];
    const medicalItems = [
        { title: "All Modules", href: "/medical/all-module", icon: <FaCog /> },
        { title: "Add Check Up Type", href: "/medical/add-check-up-type", icon: <FaSchool /> },
        { title: "Add Doctor Profile", href: "/medical/add-doctor-profile", icon: <FaUserGraduate /> },
        { title: "Routine Check-Up", href: "/medical/routine-check-up", icon: <FaSchool /> },
    ];
    return (
        <div>
           <div
            className={`sidebar ${isOpen || activeKey ? "open" : "closed"}`}
            onMouseEnter={() => setActiveKey(true)}
            onMouseLeave={() => setActiveKey(false)}
        >
                <button className="hamburger" onClick={toggleSidebar} >
                    <GiHamburgerMenu />
                </button>
                <ul  >
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.icon}
                            <span>
                                <Link href={item.href}>
                                    {item.title}
                                </Link>
                            </span>
                        </li>
                    ))}
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key === activeKey ? null : key)} className="sidebarAccordion">
                        <Accordion.Item eventKey="masterEntry">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Master Entry"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {masterEntryItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="students">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Students"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {studentItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="transport">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Transport"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {transportItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="fee">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Fees"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {feeItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="front-office">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Front Office"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {frontItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="stock">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Stock"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {stockItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="account">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Accounts"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {accountItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="medical">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Medical"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {medicalItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="gallery">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen || activeKey ? "10px" : "0" }} />
                                    {(isOpen || activeKey) && "Gallery"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen || activeKey ? "20px" : "0" }}>
                                    {galleryItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{display: isOpen || activeKey ? "inline" : "none" }}>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </ul>
            </div>
            <div
                style={{
                    marginLeft: isOpen ? "250px" : "80px",
                    transition: "margin-left 0.2s ease",
                }}
            >
            </div>
        </div>
    );
}
