// src/components/TaskItem.js
import React from 'react';

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <span>{task.name}</span>
      <span>{task.dueDate}</span>
      <span>{task.dayOfWeek}</span>
      <span>{task.time}</span>
    </div>
  );
}

export default TaskItem;
