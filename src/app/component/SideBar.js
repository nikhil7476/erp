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
                // <ul>
                //     <li><Link href="/" title="Dashboard">Dashboard</Link></li>
                //     <li><Link href="/home" title="Home">Home</Link></li>
                //     <li>
                //         <Dropdown>
                //             <Dropdown.Toggle variant="link" id="dropdown-master-entry" className="p-0">
                //                 Master Entry
                //             </Dropdown.Toggle>
                //             <Dropdown.Menu>
                //                 <Dropdown.Item as={Link} href="/master-entry/option1">
                //                     Option 1
                //                 </Dropdown.Item>
                //                 <Dropdown.Item as={Link} href="/master-entry/option2">
                //                     Option 2
                //                 </Dropdown.Item>
                //                 <Dropdown.Item as={Link} href="/master-entry/option3">
                //                     Option 3
                //                 </Dropdown.Item>
                //             </Dropdown.Menu>
                //         </Dropdown>
                //     </li>
                //     <li><Link href="/students" title="Students">Students</Link></li>
                // </ul>
                <Accordion defaultActiveKey={null} alwaysOpen>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>
                            <Link href="/" title="Dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/home" title="Home">Home</Link>
                        </li>
                        <li>
                            <Accordion.Item eventKey="masterEntry">
                                <Accordion.Header>Master Entry</Accordion.Header>
                                <Accordion.Body>
                                    <ul style={{ paddingLeft: '20px' }}>
                                        <li>
                                            <Link href="/all-modules">All Modules</Link>
                                        </li>
                                        <li>
                                            <Link href="/school-info">School Info</Link>
                                        </li>
                                        <li>
                                            <Link href="/master-entry/option3">Class Master</Link>
                                        </li>
                                        <li>
                                            <Link href="/master-entry/option3">City Master</Link>
                                        </li>
                                        <li>
                                            <Link href="/master-entry/option3">Year Master</Link>
                                        </li>
                                        <li>
                                            <Link href="/master-entry/option3">Document Upload</Link>
                                        </li>
                                        <li>
                                            <Link href="/master-entry/option3">Category Master</Link>
                                        </li>
                                        <li>
                                            <Link href="/master-entry/option3">Religion Master</Link>
                                        </li>
                                        <li>
                                            <Link href="/master-entry/option3">Subject Master</Link>
                                        </li>
                                        <li>
                                            <Link href="/master-entry/option3">Cast Master</Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        <li>
                            <Link href="/students" title="Students">Students</Link>
                        </li>
                    </ul>
                </Accordion>
            )}
        </div>
    );
}
