"use client";
// components/AdminInterface.js
import React, { useState } from "react";
import { useTasks } from "../components/TaskContext";
import Link from "next/link";
import moment from 'moment-timezone';

const AdminInterface = () => {
  const { addTask } = useTasks();
  const { tasks } = useTasks();
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      addTask(taskInput);
      setTaskInput("");
    }
    console.log(tasks);
  };

  return (
    <div>
      <Link href="/">Go to Home Page</Link>
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
