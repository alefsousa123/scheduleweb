// src/components/Schedule.js
import React from 'react';

function Schedule({ tasks, appointments, selectedDay, deleteTask, deleteAppointment }) {
  const dayTasks = tasks.filter(task => task.dayOfWeek === selectedDay);
  const dayAppointments = appointments.filter(appointment => appointment.dayOfWeek === selectedDay);

  return (
    <div className="schedule-details">
      <h2>{selectedDay}</h2>
      <h3>Tarefas</h3>
      {dayTasks.length > 0 ? (
        <div className="tasks">
          {dayTasks.map(task => (
            <div key={task.id} className="task-item">
              <span>{task.title}</span>
              <span>{task.description}</span>
              <span>{task.date}</span>
              <span>{task.time}</span>
              <button onClick={() => deleteTask(task.id)} className="delete-button">Deletar</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhuma tarefa para {selectedDay}.</p>
      )}
      <h3>Compromissos</h3>
      {dayAppointments.length > 0 ? (
        <div className="appointments">
          {dayAppointments.map(appointment => (
            <div key={appointment.id} className="appointment-item">
              <span>{appointment.title}</span>
              <span>{appointment.description}</span>
              <span>{appointment.date}</span>
              <span>{appointment.time}</span>
              <button onClick={() => deleteAppointment(appointment.id)} className="delete-button">Deletar</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum compromisso para {selectedDay}.</p>
      )}
    </div>
  );
}

export default Schedule;
