"use client";
// components/UserInterface.js
import React from 'react';
import { useTasks } from './components/TaskContext';
import Link from 'next/link';

const UserInterface = () => {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div>
      <Link href="/admin">Go to Admin Page</Link>
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
