// src/components/AddAppointment.js
import React, { useState } from 'react';

function AddAppointment({ addAppointment }) {
  const [appointmentName, setAppointmentName] = useState('');
  const [date, setDate] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ name: appointmentName, date, dayOfWeek, time, description });
    setAppointmentName('');
    setDate('');
    setDayOfWeek('');
    setTime('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Nome do Compromisso:
        <input
          type="text"
          value={appointmentName}
          onChange={(e) => setAppointmentName(e.target.value)}
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
      <button type="submit">Adicionar Compromisso</button>
    </form>
  );
}

export default AddAppointment;
