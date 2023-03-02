import { useState } from "react";
import React from 'react';

const YourName = () => {
    const [names, setName] = useState('')

    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${names}`);
    }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px"}}>
      <label>Enter your name:
        <input 
        style={{ margin: "0 6px"}}
        type="text"
        value={names}
        onChange={(e) => setName(e.target.value)}/>
      </label>
      <input type="submit"/>
    </form>
  )
}

export default YourName
