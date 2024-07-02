// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h2>Tarefas</h2>
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa adicionada.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
}

export default TaskList;
