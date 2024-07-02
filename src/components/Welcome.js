// src/components/Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';  // Certifique-se de que o CSS está sendo importado

function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add');
  };

  return (
    <div className="welcome-container">
      <h2>Bem-vindo ao Schedule</h2>
      <p>Organize seus afazeres e compromissos da semana de forma fácil e eficiente.</p>
      <button onClick={handleClick} className="welcome-button">Adicionar Tarefa ou Compromisso</button>
    </div>
  );
}

export default Welcome;
