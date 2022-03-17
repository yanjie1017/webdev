import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'
import { FaTrashAlt } from 'react-icons/fa';


function App() {
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
      <Header/>
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
