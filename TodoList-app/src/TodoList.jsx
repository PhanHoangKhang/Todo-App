import {useState} from 'react'

function TodoList() {
    const [task, setTask] = useState ([]);
    const [newTask, setNewTask] = useState("");

    function handleInput(event) {
        setNewTask(event.target.value);
    }
    function handlecheckboxchange(index) {
        const updateTask = task.map((task, i) => i === index ? {... task, checked: !task.checked } : task
    );
        setTask(updateTask);
    }
    function add() {
        if(newTask.trim() === "") return;
        const newTaskObject = {
            text: newTask, 
            checked: false,
        }
        setTask([...task, newTaskObject]);
        setNewTask("");
    }
    function deleteTask(index) {
        const updateTask = task.filter((_, i) => i !== index);
        setTask(updateTask);
    }
    function upTask(index) {
        const updateTask = [...task];
        if (index > 0) {
            [updateTask[index], updateTask[index -1]] = [updateTask[index -1], updateTask[index]];
            setTask(updateTask);
        }
    }
    function downTask(index) {
        const updateTask = [...task];
        if (index < task.length - 1) {
            [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
            setTask(updateTask);
        }
    }
    return (
    <div className="to-do-list">
        <h1>ToDo App</h1>
        <div className="input-field">
            <label className="custom-checkbox">
                <input type="text" value={newTask} placeholder="Enter a task..." onChange={handleInput}/>
                <span className="checkmark"></span>
            </label>
        <button className="add-btn" onClick={add}>ADD</button>
        </div>
        <div className ="list">
        <ul>
            {task.map((task, index) => 
                <li key={index}>
                    <div>
                    <input type="checkbox" id="todo-2" checked={task.checked} onChange={() => handlecheckboxchange(index)}></input>
                    <span className="text" style={{textDecoration: task.checked ? "line-through" : "none",}}> {task.text}</span>
                    </div>
                    <div>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>DELETE</button>
                        <button className ="up-btn" onClick={() => upTask(index)}>🔼</button>
                        <button className ="down-btn" onClick={() => downTask(index)}>🔽</button>
                    </div>
                </li>
            )}
        </ul>
        </div>
    </div>
    )
}
export default TodoList