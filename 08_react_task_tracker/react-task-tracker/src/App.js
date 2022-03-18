import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { FaTrashAlt } from 'react-icons/fa';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Meeting with groupmates',
      date: 'Feb 8th',
      reminder: true
    },
    {
      id: 2,
      text: 'Doctor appointment',
      date: 'Mar 19th',
      reminder: true
    },
    {
      id: 3,
      text: 'Submission of assignment 1',
      date: 'June 17th',
      reminder: false
    }
  ])
  
  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log('add', newTask.id)
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder } : task))
    console.log('reminder', id)
  }

  return (
    <div className="container">
      <Header 
        showAddTask={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
