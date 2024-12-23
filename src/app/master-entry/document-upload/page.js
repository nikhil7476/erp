"use client";
import React from 'react';
import Table from '@/app/component/DataTable';

const DocumentMasterPage = () => {
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
      Name: 'BIRTH CERTIFICATE',
    },
    {
       id: 2,
       Name: 'AADHAR CARD',
    },
    {
      id: 3,
      Name: 'PHOTO(Passport Size)',
      },
      {
        id: 4,
        Name: 'TRANSFER CERTIFICATE',
       },
      {
        id: 5,
        Name: 'MARKSHEET',
      },
  ];

  return (
    <div>
      <h1>Document Upload</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default DocumentMasterPage;