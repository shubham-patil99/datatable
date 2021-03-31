React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'

const empList = [
        {name:'Shubham',age:12,rollno:1,persentage:"60%"},
        {name:'Rohan',age:16,rollno:2,persentage:"50%"},
        {name:'Rahul',age:18,rollno:3,persentage:"80%"},
        {name:'Sid',age:17,rollno:4,persentage:"55%"},
        {name:'Prasad',age:15,rollno:5,persentage:"70%"},
        {name:'Prashant',age:11,rollno:6,persentage:"90%"},
        {name:'Sam',age:18,rollno:7,persentage:"60%"},
        {name:'Oshin',age:19,rollno:8,persentage:"50%"},
        {name:'Ankush',age:13,rollno:9,persentage:"70%"},
        {name:'Vishal',age:10,rollno:10,persentage:"72%"},
        ]

function App() {

  const [data, setData] = useState(empList)
  const columns =[
        {title:"Name",field:"name"},
        {title:"Age", field:"age"},
        {title:"Roll-No", type:'number', field:"rollno"},
        {title:"Score", field:"persentage"}
        ] 


  return (
    <div className="blue">
      <h1 align="center">Data-Table</h1>
        <MaterialTable
        title="Required Data Table"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default App;