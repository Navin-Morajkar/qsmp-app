"use client";
// components/AdminInterface.js
import React, { useState } from "react";
import { useTasks } from "../components/TaskContext";
import Link from "next/link";

const AdminInterface = () => {
  const { addTask } = useTasks();
  const { tasks } = useTasks();
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "" && dateInput && timeInput) {
      const newTask = {
        task: taskInput,
        date: dateInput,
        time: timeInput,
      };
      addTask(newTask);
      setTaskInput("");
      setDateInput("");
      setTimeInput("");
    }
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
      <br/>
      <br/>
      <input
        type="date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        placeholder="Enter date"
      />
      <br/>
      <br/>
      <input
        type="time"
        value={timeInput}
        onChange={(e) => setTimeInput(e.target.value)}
        placeholder="Enter time in PST"
      />
      <br/>
      <br/>
      <button onClick={handleAddTask}>Add Event</button>
    </div>
  );
};

export default AdminInterface;
