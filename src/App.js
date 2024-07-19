import { useRef, useState } from 'react';
import './App.css';
import { MdAddTask } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const[tasks, setTasks] = useState([]);

  const inputRef = useRef();

  const handleAddTask = () => {
    const task = inputRef.current.value;
    const newTask = { completed: false, task };
    if(task) {setTasks([...tasks, newTask]);
      inputRef.current.value = '';
    }else{
      alert("Please enter a task");
    }
  }

  const handleItemDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  // const handleRemoveAll = () => {
  //   setTasks([]);
  // }

  return (
    <div className='container'>
        <p>To-Do List</p>
        <Row className='row'>
          <div className='row-up'>
            <input className='input' ref={inputRef} placeholder="Add a Task" />
            <button onClick={handleAddTask}><MdAddTask /></button>
          </div>
          <div className='all-dawn'>
            <ul> 
            {tasks.map(({ task, completed }, index) => {
              return (
                <>
                <div key={index} className='into-low'>
                  <li className={completed ? "done" : ""} onClick={() => handleItemDone(index) }>{task}</li>
                  <button onClick={() => handleDelete(index)}><MdRemoveCircleOutline /></button>
                </div>
                </>
                  
              )
            })}
            </ul>
          </div>
        </Row>
    </div>
  );
}

export default App;
