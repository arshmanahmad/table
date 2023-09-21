import React from 'react';
import {useState} from 'react';
import './Field.css';
const Field = ({valueGetter}) => {
  const [names,setNames] = useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');

  const handleChange= (event ) => {
    setNames(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);

  };

  const handleNumber =(event) => {
    setNumber(event.target.value);
  };

  const handleSubmit=(event)=>{
    event.preventDefault()
  valueGetter(names,email,number);
  }

  return (

    <div>
      <form onSubmit = {handleSubmit}>
        <h1>Login Page</h1>
        <br/>
          Enter name:
          <br/>
          <input type="text" required onChange={handleChange} value={names} />
          <br/>
          Enter email:
          <br/>
          <input type="email" required onChange={handleEmail}  value={email}/>
          <br/>
          Enter phonenumber:        
          <br/>
          <input type="number" required onChange={handleNumber} value={number} />
          <br/>
          <button >Click here</button>
          <br/>
          <br/>
      </form>
    </div>

  )
}

export default Field;