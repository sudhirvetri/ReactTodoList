import React, { useState, useEffect } from 'react';
import '/workspaces/ReactTodoList/todo-app/src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList()
{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() =>
    {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks)
        {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() =>
    {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (event) =>
    {
        setNewTask(event.target.value);
    };

    const handleKeyDown = (event) =>
    {
        if (event.key === 'Enter' && newTask.trim() !== '')
        {
            handleAddTask();
        }
    };

    const handleAddTask = () =>
    {
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask('');
    };

    const handleToggleComplete = (id) =>
    {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleDeleteTask = (id) =>
    {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="todo-list">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Add a new task"
                    onKeyDown={handleKeyDown}
                />
                <button className="btn btn-primary" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={task.completed}
                            onChange={() => handleToggleComplete(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button className="btn btn-danger" onClick={() => handleDeleteTask(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;