"use client";
import React, { useState } from "react";
import Table from "@/app/component/DataTable";
import styles from "../class-master/page.module.css";
// import ButtonWithForm from "@/app/component/ButtonWithForm";
import dynamic from "next/dynamic";

const ClassMasterPage = () => {
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "Class Code",
      selector: (row) => row.classCode,
      sortable: true,
    },
    {
      name: "Class Name",
      selector: (row) => row.className,
      sortable: true,
    },
    {
      name: "Section Code & Name",
      selector: (row) => (
        <div>
          {row.sections.map((section, index) => (
            <div key={index}>
              {section.code}-{section.name}
            </div>
          ))}
        </div>
      ),
      sortable: false,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="twobuttons">
          <button
            className="editButton"
            onClick={() => handleEdit(row.id)}
          >
            Edit
          </button>
          <button
            className="editButton"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      classCode: "0",
      className: "test",
      sections: [{ code: "0", name: "0" }],
    },
    {
      id: 2,
      classCode: "1",
      className: "1st",
      sections: [{ code: "1", name: "A" }],
    },
    {
      id: 3,
      classCode: "2",
      className: "2nd",
      sections: [{ code: "2", name: "B" }],
    },
    {
      id: 4,
      classCode: "3",
      className: "3rd",
      sections: [{ code: "3", name: "C" }],
    },
    {
      id: 5,
      classCode: "4",
      className: "4th",
      sections: [{ code: "4", name: "D" }],
    },
    {
      id: 6,
      classCode: "5",
      className: "5th",
      sections: [{ code: "5", name: "E" }],
    },
  ]);

  const handleEdit = (id) => {
    const item = data.find((row) => row.id === id);
    const updatedName = prompt("Enter new name:", item.className);
    const updatedCode = prompt("Enter new code:", item.classCode);
    const updatedSection = prompt(
      "Enter new sections as JSON (e.g., [{\"code\": \"1\", \"name\": \"A\"}])",
      JSON.stringify(item.sections)
    );

    try {
      const parsedSections = JSON.parse(updatedSection);
      setData((prevData) =>
        prevData.map((row) =>
          row.id === id
            ? { ...row, className: updatedName, classCode: updatedCode, sections: parsedSections }
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

  return (
    <div className={styles.rec}>
        <div className={styles.add}>
        {/* <ButtonWithForm/> */}
      </div><br/>
      <h2>Class & Section Records</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default dynamic (() => Promise.resolve(ClassMasterPage), {ssr: false})
