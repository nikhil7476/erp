"use client";
import React, { useState } from 'react';
import Table from '@/app/component/DataTable';

const CategoryMaster = () => {
  const columns = [ 
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: 'Name',
      selector: row => row.Name,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div style={{
          display: 'flex',
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
      Name: 'GENERAL',
    },
    {
       id: 2,
       Name: 'OBC',
    },
    {
      id: 3,
      Name: 'MINORITY',
      },
      {
        id: 4,
        Name: 'SC/ST',
       },
      {
        id: 5,
        Name: 'OTHERS',
      },
  ]);

  const handleEdit = (id) => {
    const item = caste.find((row) => row.id === id);
    const updatedCategoryName = prompt("Enter new name:", item.nameame);

    if (updatedCategoryName) {
      setData((prevData) =>
        prevData.map((row) =>
          row.id === id ? { ...row, name: updatedCategoryName } : row
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
      <h2>Category Master</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default CategoryMaster;