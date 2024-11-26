import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { addTask } from './redux/reducers/todoSlice'

const App = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime().toString(),
      title: tasks,
      completed: false,
    }

    // dispatch action and add to store.
    dispatch(addTask(newTask))

    setTasks("") // clear input field.

    console.log(newTask)
    
  }

  return (
    <>
      <div>
        <h1>Daily Task</h1>

        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder='Enter Task here'
          value={tasks}
          onChange={(e) => setTasks(e.target.value)} />
          <button type="submit">Add Task</button>

        </form>
      </div>
    
    </>
  )

  return (
    <>
      <div>
        <h1> Daily Task</h1>

        <form action="">
          <input type="text"
          placeholder='Enter Task here'
          value={tasks}
          onChange={(e) => setTasks(e.target.value)} />
          <button type="submit">Add Task</button>

        </form>
      </div>
    
    </>
  )
}

export default App