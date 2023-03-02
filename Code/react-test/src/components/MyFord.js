import React from 'react'
import { useState } from "react"

const MyFord = ({ color }) => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });

    const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "lightblue" }
        });
      }

  return (
    <>
      <h1 style={{ color: color }}>My {car.brand}</h1>
      <p style={{ color: color }}>
        It is a <span style={{ color: car.color }}>{car.color}</span> {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

export default MyFord
