// src/components/UnifiedForm.js
import React, { useState } from 'react';
import './UnifiedForm.css';

function UnifiedForm({ addEntry }) {
  const [type, setType] = useState('task');
  const [title, setTitle] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('Segunda-feira');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({ type, title, dayOfWeek, description, date, time });
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
  };

  return (
    <form className="unified-form" onSubmit={handleSubmit}>
      <h2>Adicionar Tarefa ou Compromisso</h2>
      <label>
        Tipo:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="task">Tarefa</option>
          <option value="appointment">Compromisso</option>
        </select>
      </label>
      <label>
        Título:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Dia da Semana:
        <select value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
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
        Descrição:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Data:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Hora:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default UnifiedForm;
