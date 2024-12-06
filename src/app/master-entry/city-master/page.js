"use client";
import React, { useState } from 'react';
// import CitySectionTable from '@/app/component/DataTable';
import Table from "@/app/component/DataTable";

const CityMasterPage = () => {
  const columns = [ 
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: 'State Name',
      selector: row => row.stateName,
      sortable: true,
    },
    {
      name: 'City Name',
      selector: row => row.cityName,
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
      stateName: 'Andhra Pradeh',
      cityName: 'Vishakhapatnam'
    },
    {
       id: 2,
       stateName: 'Bihar',
       cityName: 'Patna',
    },
    {
      id: 3,
      stateName: 'Chhattisgarh',
      cityName: 'Bilaspur'
      },
      {
        id: 4,
        stateName: 'Delhi',
        cityName: 'Janakpuri'
       },
      {
        id: 5,
        stateName: 'Goa',
        cityName: 'Madgaon'
      },
  ]);

  const handleEdit = (id) => {
    const item = caste.find((row) => row.id === id);
    const updatedStateName = prompt("Enter new name:", item.stateName);
    const updatedCityName = prompt("Enter new code:", item.cityName);

    if (updatedStateName && updatedCityName) {
      setData((prevData) =>
        prevData.map((row) =>
          row.id === id ? { ...row, stateName: updatedStateName, cityName: updatedCityName } : row
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
      <h1>City Master</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default CityMasterPage;