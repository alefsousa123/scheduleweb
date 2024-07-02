// src/components/AddTask.js
import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name: taskName, dueDate, dayOfWeek, time, description });
    setTaskName('');
    setDueDate('');
    setDayOfWeek('');
    setTime('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Nome da Tarefa:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Data:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>
      <label>
        Dia da Semana:
        <select value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
          <option value="">Escolha o dia</option>
          <option value="Segunda-feira">Segunda-feira</option>
          <option value="Terça-feira">Terça-feira</option>
          <option value="Quarta-feira">Quarta-feira</option>
          <option value="Quinta-feira">Quinta-feira</option>
          <option value="Sexta-feira">Sexta-feira</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
      </label>
      <label>
        Horário:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        Descrição:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default AddTask;
