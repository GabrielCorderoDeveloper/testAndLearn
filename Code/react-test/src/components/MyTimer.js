import React from 'react'
import { useState, useEffect } from "react"

const MyTimer = ({ interval, text }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, interval);
    }, []);

  return (
    <h1>I have rendered {count} times!</h1>
  )
}

export default MyTimer
