"use client";
import React from 'react';
import Table from '@/app/component/DataTable';

const ReligionMasterPage = () => {
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

  const data = [
    {
      id: 1,
      Name: 'BUDDHIST',
    },
    {
       id: 2,
       Name: 'CHRISTIAN',
    },
    {
      id: 3,
      Name: 'HINDU',
      },
      {
        id: 4,
        Name: 'MUSLIM',
       },
      {
        id: 5,
        Name: 'JAINISM',
      },
  ];

  return (
    <div>
      <h1>Religion Master</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ReligionMasterPage;