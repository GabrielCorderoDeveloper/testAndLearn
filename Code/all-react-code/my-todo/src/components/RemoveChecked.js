import React from 'react'
import { Button } from 'react-bootstrap'
import { GrFormClose } from "react-icons/gr";

const RemoveChecked = () => {
  return (
    <button className='btn btn-outline-success mt-md-0 mt-2'>
        Remove cheched<GrFormClose size="25px" className='icon-fix'/>
        </button>
  )
}

export default RemoveChecked
