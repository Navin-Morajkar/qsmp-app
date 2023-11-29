"use client";
// components/AdminInterface.js
import React, { useState } from 'react';
import { useTasks } from '../components/TaskContext';

const AdminInterface = () => {
  const { addTask } = useTasks();
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput('');
    }
  };

  return (
    <div>
      <h1>Admin Interface</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AdminInterface;