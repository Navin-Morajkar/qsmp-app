import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
    console.log(task);
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;