"use client";
import React from "react";
import { useRouter } from "next/navigation";
import feeImg from "@/app/Assets/fee.webp";
import studentImg from "@/app/Assets/contactImg.webp"
import busImg from "@/app/Assets/bus.webp";
import stocksImg from "@/app/Assets/stocks.webp";
import payrollImg from "@/app/Assets/payroll.webp";
import books from "@/app/Assets/books.webp";
import Exam from "@/app/Assets/exam.webp";
import Attendance from "@/app/Assets/attendance.webp";
import timetable from "@/app/Assets/timetable.webp";
import User from "@/app/Assets/user.webp";
import Website from "@/app/Assets/website.webp";
import HomeWork from "@/app/Assets/homeWork.webp";
// import {
//   FaRegUser,
//   FaRegAddressBook,
//   FaRegBookmark,
// } from "react-icons/fa";
import Card from "../component/Card";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="dashboardCardCard">
      <h1>
        Dashboard <span>overview, analytics & report</span>
      </h1>

      <div className="studentCardDetails">
        <Card
          name="STUDENTS"
          user={studentImg}
        //   icon={<FaRegUser />}
          action="Add New Student"
          action2="Transfer Certificate"
          action3="Students Details"
        />
        <Card
          name="FEES"
          user={feeImg}
          action="Fee Entry"
          action2="Student Fee Details"
          action3="Daily Fee Collection"
        />
        <Card
          name="TRANSPORT"
          user={busImg}
          action="Add New Vehicle"
          action2="Student Vehicle Relation"
          action3="All Transport Info"
        />
        <Card
          name="STOCKS"
          user={stocksImg}
          action="Add New Item"
          action2="Stocks Details"
          action3="Issue Items"
        />
        <Card
          name="PAYROLL"
          user={payrollImg}
          action="Add New Employee"
          action2="Salary Generation"
          action3="Pay Slip"
        />
        <Card
          name="LIBRARY"
          user={books}
          action="Add New Book"
          action2="Issue Book"
          action3="Issued Books Records"
        />
        <Card
          name="EXAM"
          user={Exam}
          action="Create Exam"
          action2="Marks Entry"
          action3="Student Wise Marksheet"
        />
        <Card
          name="ATTENDANCE"
          user={Attendance}
          action="Take Attendance"
          action2="Take Report"
          action3="Monthly Report"
        />
        <Card
          name="TIME TABLE"
          user={timetable}
          action="Regular Time Table"
          action2="Online Time Table"
          action3="Adjust Time Table"
        />
        <Card
          name="USERS"
          user={User}
          action="Add New User"
          action2="Existing Users"
          action3="All User List"
        />
        <Card
          name="WEBSITE"
          user={Website}
          action="Add New Page"
          action2="Contact Details"
          action3="Add Notice"
        />
        <Card
          name="HOME WORK"
          user={HomeWork}
          action="Add New Home Work"
          action2="Subject Wise Home Work"
          action3="All Home Work"
        />
      </div>
    </div>
  );
};

export default Dashboard;
