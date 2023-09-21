import React from 'react';
import {useState} from 'react';
import Field from './components/Field';
import TableShow from './components/TableShow';
import './components/App.css'
const App = () => {

  const [data,setData] = useState([]);
  
  const deleteDataById = (id1) =>{
    const updatedBooks = data.filter((remove)=>{
      return remove.id !==id1;
    })
    setData(updatedBooks);
  } 

  const propGetter = (name,email,phone) =>{
    const updatedArr = [
      ...data,
      {
       id: Math.round(Math.random()*9999),
       userName : name,
       emailAddress : email,
       phoneNumber : parseInt(phone),
      }
    ]
    setData(updatedArr);
  }
  return (
    <div className='main-container'>
        <Field valueGetter={propGetter} />
        <TableShow valueRemove={deleteDataById} data={data} />
    </div>
  )
}
export default App;