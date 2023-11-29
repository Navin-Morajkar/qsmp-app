"use client";
// components/UserInterface.js
import React from 'react';
import { useTasks } from '../components/TaskContext';

const UserInterface = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <h1>User Interface</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserInterface;
