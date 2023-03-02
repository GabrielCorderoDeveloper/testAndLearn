import React from 'react'

const Goal = ({ isGoal }) => {

  return (
    <h3>{isGoal ? "Goal!" : "MISSED!"}</h3>
  )
}

export default Goal



