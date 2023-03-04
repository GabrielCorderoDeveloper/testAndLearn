import React from 'react'
import { MdAddCircle } from "react-icons/md";
import  handleAddTodo from './SearchBar'

const SearchButton = () => {

  return (
    <span className='col-1'>
      <MdAddCircle onClick={handleAddTodo} className='main-button' size="50px"/>
    </span>
  )
}

export default SearchButton

