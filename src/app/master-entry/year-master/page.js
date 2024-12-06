"use client";
import React from 'react';
import Table from '@/app/component/DataTable';
import styles from "../year-master/page.module.css";

const YearMasterPage = () => {
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
      name: 'Year Code & Name',
      selector: row => row.yearCodeAndName,
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

  const data = [
    {
      id: 1,
      className: '1',
      yearCodeAndName: 'code:(73) and 2017-2018',
    },
    {
       id: 2,
      className: '2',
      yearCodeAndName: 'code:(74) and 2018-2019',
    },
    {
      id: 3,
      className: '3',
      yearCodeAndName: 'code:(75) and 2019-2020', 
      },
      {
        id: 4,
      className: '4',
      yearCodeAndName: 'code:(76) and 2020-2021',
       },
      {
        id: 5,
        className: '5',
        yearCodeAndName: 'code:(77) and 2021-2022',
      },
  ];

  return (
    <div className={styles.rec}>
      <h2>Year Master</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default YearMasterPage;