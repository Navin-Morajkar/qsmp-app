'use client'
import React from 'react'
import { createContext, useState } from 'react'

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', description: 'Description of Task 1' },
    ]);

    const addtask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const edittask = (id, updatedTask) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
              if (task.id === id) {
                return { ...task, ...updatedTask };
              }
              return task;
            });
        });
    }

    const deletetask = (id) => {
        const updatedTasks =  tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    return (
        <TaskContext.Provider value={{tasks, addtask, edittask, deletetask}}>
            <div>{children}</div>
        </TaskContext.Provider>
    )
}