"use client";
import React, { useState } from 'react';
import Table from '@/app/component/DataTable';

const CasteMasterPage = () => {

  const columns = [ 
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: 'Name',
      selector: row => row.casteName,
      sortable: true,
    },
    {
      name: 'Action',
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
      casteName: 'AGRAWAL',
    },
    {
       id: 2,
       casteName: 'SRIVASTAVA',
    },
    {
      id: 3,
      casteName: 'MISHRA',
      },
      {
        id: 4,
        casteName: 'GUPTA',
       },
      {
        id: 5,
        casteName: 'KASHYAP',
      },
  ]);

  const handleEdit = (id) => {
    const item = data.find((row) => row.id === id);
    const updatedName = prompt("Enter new name:", item.casteName);

    if (updatedName) {
      setRecords((prevData) =>
        prevData.map((row) =>
          row.id === id ? { ...row, casteName: updatedName } : row
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
      <h2>Caste Master</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default CasteMasterPage;