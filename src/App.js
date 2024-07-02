// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Schedule from './components/Schedule';
import Welcome from './components/Welcome';
import FormsPage from './components/FormsPage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');
  const [message, setMessage] = useState('');

  const addEntry = (entry) => {
    if (entry.type === 'task') {
      setTasks([...tasks, { ...entry, id: tasks.length }]);
      setMessage(`Uma tarefa foi adicionada a ${entry.dayOfWeek}`);
    } else {
      setAppointments([...appointments, { ...entry, id: appointments.length }]);
      setMessage(`Um compromisso foi adicionado a ${entry.dayOfWeek}`);
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const deleteAppointment = (appointmentId) => {
    setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Agenda</h1>
          <p>Organize seus afazeres e compromissos da semana.</p>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Adicionar Compromisso</Link> | <Link to="/schedule">Agenda</Link>
          </nav>
        </header>
        <main>
          {message && <div className="message">{message}</div>}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/add" element={<FormsPage addEntry={addEntry} />} />
            <Route path="/schedule" element={
              <>
                <div className="days-container">
                  {daysOfWeek.map((day) => (
                    <button key={day} onClick={() => handleDayClick(day)} className="day-button">
                      {day}
                    </button>
                  ))}
                </div>
                <Schedule
                  tasks={tasks}
                  appointments={appointments}
                  selectedDay={selectedDay}
                  deleteTask={deleteTask}
                  deleteAppointment={deleteAppointment}
                />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
