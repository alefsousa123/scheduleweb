// src/components/AppointmentList.js
import React from 'react';
import AppointmentItem from './AppointmentItem';

function AppointmentList({ appointments }) {
  return (
    <div className="appointment-list">
      <h2>Compromissos</h2>
      {appointments.length === 0 ? (
        <p>Nenhum compromisso adicionado.</p>
      ) : (
        appointments.map((appointment) => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))
      )}
    </div>
  );
}

export default AppointmentList;
