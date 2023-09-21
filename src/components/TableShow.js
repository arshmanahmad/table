import React from 'react';
import './TableShow.css'

const TableShow = ({data,valueRemove}) => {
    
 
    const renderRecord = data.map((record)=>{
        const handleClick = () =>{
        valueRemove(record.id);
        }
        console.log(record);
        return (
            <tr>
                <td>{record.userName}</td>
                <td>{record.emailAddress}</td>
                <td>{record.phoneNumber} <button className='crossButton'
                onClick={handleClick} >X</button></td>
                
            </tr>
        )

    })
console.log(data)
  
    
  return (
    <div>
        <table>
           <thead>
           <tr>
                <th>Name: </th>
                <th>Email: </th>
                <th>Number: </th>
            </tr>
           </thead>
           <tbody>
            {renderRecord}
           </tbody>
        </table>
    </div>
  )
}

export default TableShow;