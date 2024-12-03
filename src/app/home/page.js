import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import style from "./page.module.css";

export default function Home() {
    return (
        <>
            <section className={style.home}>
                <Container>
                    <Row>
                        <Col>
                            <h2>Dashboard <span>overview, analytics & report</span></h2>
                        </Col>
                    </Row>
                    <Row className="text-center my-3">
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Students</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/reading-book.webp" alt="Students" title="Students" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Create Exam">Create Exam <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Marks Entry">Marks Entry <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Student Wise Marksheet">Student Wise Marksheet <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Fees</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/fees.webp" alt="Fees" title="Fees" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Fee Entry">Fee Entry <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Student Fee Details">Student Fee Details <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Daily Fees Collection">Daily Fees Collection <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Transport</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/bus.webp" alt="Transport" title="Transport" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Add New Vehicle">Add New Vehicle <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Student Vehicle Relation">Student Vehicle Relation <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="All Transport Info">All Transport Info <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row className="text-center my-3">
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Stocks</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/stock.webp" alt="Stocks" title="Stocks" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Add New Item">Add New Item <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Stock Details">Stock Details <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Issue Items">Issue Items <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Payroll</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/payroll1.webp" alt="Payroll" title="Payroll" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Add New Employee">Add New Employee <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Salary Generation">Salary Generation <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Pay Slip">Pay Slip <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Library</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/libary.webp" alt="Library" title="Library" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Add New Book">Add New Book <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Issue Book">Issue Book <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Issued Books Records">Issued Books Records <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row className="text-center my-3">
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Exam</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/exam.webp" alt="Exam" title="Exam" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Create Exam">Create Exam <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Marks Entry">Marks Entry <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Student Wise Marksheet">Student Wise Marksheet <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Attendance</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/attendance.webp" alt="Attendance" title="Attendance" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Take Attendance">Take Attendance <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Attendance Report">Attendance Report <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Monthly Report">Monthly Report <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Time Table</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/timetable.webp" alt="Time Table" title="Time Table" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Regular Time Table">Regular Time Table <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Online Time Table">Online Time Table <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Adjust Time Table">Adjust Time Table <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row className="text-center my-3">
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Users</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/users.webp" alt="Users" title="Users" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Add New User">Add New User <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Existing Users">Existing Users <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Website</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/website.webp" alt="Website" title="Website" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Add New Page">Add New Page <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Contact Details">Contact Details <FaLongArrowAltRight /></Link></li>
                                    <li><Link href="#" title="Add Notice">Add Notice <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-md-4">
                        <div className={style.card}>
                            <div className={style.cardHdr}>
                                <h3>Homework</h3>
                            </div>
                            <div className={style.cardBg}>
                                <Image src="/homework.webp" alt="Homework" title="Homework" width={100} height={100} />
                            </div>
                            <div className={style.cardLink}>
                                <ul>
                                    <li><Link href="#" title="Add Home Work">Add Home Work <FaLongArrowAltRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
