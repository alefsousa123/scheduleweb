// src/components/AppointmentItem.js
import React from 'react';

function AppointmentItem({ appointment }) {
  return (
    <div className="appointment-item">
      <span>{appointment.name}</span>
      <span>{appointment.date}</span>
      <span>{appointment.time}</span>
      <p>{appointment.description}</p> {/* Adiciona a descrição aqui */}
    </div>
  );
}

export default AppointmentItem;
