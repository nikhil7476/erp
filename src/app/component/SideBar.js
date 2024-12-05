import React from 'react';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <button className="hamburger" onClick={toggleSidebar}>
                <GiHamburgerMenu />
            </button>
            {isOpen && (
                <Accordion defaultActiveKey={null} alwaysOpen>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>
                            <Link href="/" title="Dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/home" title="Home">Home</Link>
                        </li>
                        <Accordion.Item eventKey="masterEntry">
                            <Accordion.Header>Master Entry</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        <Link href="/master-entry/all-module">All Modules</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/school-info">School Info</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/class-master">Class Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/city-master">City Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/year-master">Year Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/document-upload">Document Upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/category-master">Category Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/religion-master">Religion Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/subject-master">Subject Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/master-entry/cast-master">Cast Master</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="students">
                            <Accordion.Header>Student</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        <Link href="/all-modules">All Modules</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/add-new-student">add New Student</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/class-master">Class Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/city-master">City Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/year-master">Year Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/document-upload">Document Upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/category-master">Category Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/religion-master">Religion Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/subject-master">Subject Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/cast-master">Cast Master</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="students">
                            <Accordion.Header>Transport</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        <Link href="/all-modules">All Modules</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/add-new-student">add New Student</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/class-master">Class Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/city-master">City Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/year-master">Year Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/document-upload">Document Upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/category-master">Category Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/religion-master">Religion Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/subject-master">Subject Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/cast-master">Cast Master</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="students">
                            <Accordion.Header>Fees</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        <Link href="/all-modules">All Modules</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/add-new-student">add New Student</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/class-master">Class Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/city-master">City Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/year-master">Year Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/document-upload">Document Upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/category-master">Category Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/religion-master">Religion Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/subject-master">Subject Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/cast-master">Cast Master</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="students">
                            <Accordion.Header>Front Office</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        <Link href="/all-modules">All Modules</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/add-new-student">add New Student</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/class-master">Class Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/city-master">City Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/year-master">Year Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/document-upload">Document Upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/category-master">Category Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/religion-master">Religion Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/subject-master">Subject Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/cast-master">Cast Master</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="students">
                            <Accordion.Header>Stock</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        <Link href="/all-modules">All Modules</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/add-new-student">add New Student</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/class-master">Class Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/city-master">City Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/year-master">Year Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/document-upload">Document Upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/category-master">Category Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/religion-master">Religion Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/subject-master">Subject Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/cast-master">Cast Master</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="students">
                            <Accordion.Header>Accounts</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        <Link href="/all-modules">All Modules</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/add-new-student">add New Student</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/class-master">Class Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/city-master">City Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/year-master">Year Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/document-upload">Document Upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/category-master">Category Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/religion-master">Religion Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/subject-master">Subject Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/cast-master">Cast Master</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="students">
                            <Accordion.Header>Medical</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        <Link href="/all-modules">All Modules</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/add-new-student">add New Student</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/class-master">Class Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/city-master">City Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/year-master">Year Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/document-upload">Document Upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/category-master">Category Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/religion-master">Religion Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/subject-master">Subject Master</Link>
                                    </li>
                                    <li>
                                        <Link href="/students/cast-master">Cast Master</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </ul>
                </Accordion>
            )}
        </div>
    );
}
