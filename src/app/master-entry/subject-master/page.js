"use client";
import React, {useState} from 'react';
import Table from '@/app/component/DataTable';
import dynamic from 'next/dynamic';

const SubjectMasterPage = () => {
  const columns = [ 
    {
      name: 'ids',
      selector: row => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: 'Class Name',
      selector: row => row.className,
      sortable: true,
    },
    {
      name: 'Section Name',
      selector: row => row.sectionName,
      sortable: false,
    },
    {
      name: 'Subject And Teacher',
      selector: row => row.subjectAndTeacher,
      sortable: false,
    },
    {
      name: 'Actions',
      cell: row => (
        <div style={{
          display: 'flex',
          // marginLeft: '-30px'
        }}>
          <button className='editButton'
            onClick={() => handleEdit(row.id)}
          >
            Edit
          </button>
          <button className="editButton"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </div>
      ),
    }
  ];

  const [data, setData] = useState([
    {
      id: 1,
      className: '1',
      sectionName: 'A',
      subjectAndTeacher: 'stemtest(optional) (AllotedTo: VARSHA KUSHWAHA)',
    },
    {
       id: 2,
      className: '2',
      sectionName: 'B',
      subjectAndTeacher: 'English1 (AllotedTo: AKANKSHA)',
    },
    {
      id: 3,
      className: '3',
      sectionName: 'C',
      subjectAndTeacher: 'Hindi1 (AllotedTo: SNEHA)',
      },
      {
        id: 4,
      className: '4',
      sectionName: 'D',
      subjectAndTeacher: 'Computer (AllotedTo: AMIT)',
      },
      {
        id: 5,
        className: '5',
        sectionName: 'E',
        subjectAndTeacher: 'SOCIAL (AllotedTo: ANISHA)',
      },
  ]);

  const handleEdit = (id) => {
    const item = caste.find((row) => row.id === id);
    const updatedClassName = prompt("Enter new name:", item.className);
    const updatedSectionName = prompt("Enter new name:", item.sectionName);
    const updatedSubjectAndTeacher = prompt("Enter new name:", item.subjectAndTeacher);

    if (updatedClassName && updatedSectionName && updatedSubjectAndTeacher) {
      setData((prevData) =>
        prevData.map((row) =>
          row.id === id ? { ...row, className: updatedClassName, sectionName: updatedSectionName, subjectAndTeacher: updatedSubjectAndTeacher } : row
        )
      );
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      setData((prevData) => prevData.filter((row) => row.id !== id));
    }
  };

  return (
    <div>     
      <Table columns={columns} data={data} />
    </div>
  );
};

export default dynamic (() => Promise.resolve(SubjectMasterPage), {ssr: false});