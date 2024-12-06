"use client"; 
import React, { useState } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaSchool, FaUserGraduate, FaFileAlt, FaCog } from "react-icons/fa";

export default function Sidebar({ isOpen, toggleSidebar }) {
    const [activeKey, setActiveKey] = useState(null);

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

    return (
        <div>
            <div
                className={`sidebar ${isOpen ? "open" : "closed"}`}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: isOpen ? "250px" : "60px",
                    backgroundColor: "#201436",
                    color: "#fff",
                    overflowY: "auto",
                    transition: "width 0.3s ease",
                    zIndex: 1000,
                }}
            >
                <button
                    className="hamburger"
                    onClick={toggleSidebar}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        fontSize: "24px",
                        margin: "10px",
                        cursor: "pointer",
                    }}
                >
                    <GiHamburgerMenu />
                </button>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {menuItems.map((item, index) => (
                        <li key={index} style={{ padding: "10px 15px", display: "flex", alignItems: "center" }}>
                            {item.icon}
                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
                                    {item.title}
                                </Link>
                            </span>
                        </li>
                    ))}
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key === activeKey ? null : key)}>
                        <Accordion.Item eventKey="masterEntry">
                            <Accordion.Header>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Master Entry"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {masterEntryItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Students"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {studentItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Transport"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {transportItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Fees"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {transportItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Front Office"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {transportItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Stock"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {transportItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Accounts"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {transportItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Medical"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {transportItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                                    <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
                                    {isOpen && "Gallery"}
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ listStyle: "none", paddingLeft: isOpen ? "20px" : "0" }}>
                                    {transportItems.map((item, index) => (
                                        <li key={index} style={{ padding: "5px 0", display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                            <span style={{ marginLeft: "10px", display: isOpen ? "inline" : "none" }}>
                                                <Link href={item.href} style={{ color: "#201436", textDecoration: "none" }}>
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
                    marginLeft: isOpen ? "250px" : "60px",
                    transition: "margin-left 0.2s ease",
                }}
            >
            </div>
        </div>
    );
}
