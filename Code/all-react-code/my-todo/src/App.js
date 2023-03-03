import './App.css';

//I will use this method to impor many components at once
//? import { Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

//This imports the Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/SearchBar';
import AddButton from './components/AddButton';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import RemoveChecked from './components/RemoveChecked';
import React, { useState, useRef } from 'react';

function App() {
  //~   Here i will save all the todos
  const [todos, setTodos] = useState([{
    id: 1, name: 'Task 1', complete: false
  }]);
  const todoNameRef = useRef();

function handleAddTodo(e) {
  const name = todoNameRef.current.value
  if (name === '') return
  console.log(name)
}
  return (
    //main container
    <div className='main d-flex justify-content-center'>

          <div className="main-container container col-lg-8 col-11  m-2 mt-5 p-3 rounded-3 bg-light text-center"> 
            <h3 className='pb-2'>My to-do list</h3>
            <div className='row justify-content-center mb-1'>
              <SearchBar ref={todoNameRef}/> <AddButton onClick={handleAddTodo}/>

              <div className='mt-2 p-5 rounded-3 text-start'>
                <TaskList todos={todos}/>   
              </div>

            <div className='d-flex justify-content-around mt-4 flex-md-row flex-column'>
               <TaskCounter todos={todos}/> <RemoveChecked />
            </div>
            </div>

          </div>

    </div>
  );
}


// todo||  add task list
//? with the ability to be checked

// todo||  fix counter bar
// todo||  finish styling removed button, add functionality


export default App;
