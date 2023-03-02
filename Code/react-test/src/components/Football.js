import React from 'react'

const Football = ({ info, inside }) => {

    const shoot = (data) => {
        alert(data);
    }

  return (
    <button className='btn' onClick={() => shoot(info)}>
        {inside}
    </button>
  )
}

export default Football
