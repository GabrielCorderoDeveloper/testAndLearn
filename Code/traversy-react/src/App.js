//?||  imports ---------------------->>>>>>>
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
//?||  <----------------------------------



function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Doctprs Appointment',
        day: 'Feb 5th at 2pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'Lake Appointment',
        day: 'May 7th at 1pm',
        remainder: true,
    }
]
)
//! Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//! Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//! Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)}
     showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? (<Tasks 
     tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder}
     />) : 
     ('No tasks to show') }
    </div>
  );
}

export default App;
