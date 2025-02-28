import React, { useState } from 'react'

interface Task{
    text: string,
    completed: boolean
}

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState<string>(""); //stores the users input

    const addTask = (): void => {
        if (!taskInput.trim()) return;
        setTasks([...tasks, {text: taskInput, completed: false}]);
        setTaskInput("")
    }

    //toggle completion of a taks at a specific index
    //Creating a constant function

    const toggleTask = (index: number):void =>{
        const newTasks = tasks.map((task, i) =>
            i == index? {...task, completed: !task.completed} : task
        );
        setTasks(newTasks)
    }


  return (
    <div className='todo'>
        <h2>Todo List</h2>
        <div className='inputContainer'>
            <input 
            type='text'
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder='Add a new task... '
            />
            <button onClick={addTask}>Add</button>
        </div>

        <ul>
            {tasks.map((task, index) => (
                <li key={index} className={task.completed? "completed" : " "}>
                    <span>{task.text}</span>
                    <div className='buttons'>
                        <button onClick={() => toggleTask(index)}>✔</button>
                        <button>✖</button>
                    </div>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default TodoList