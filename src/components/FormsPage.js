// src/components/FormsPage.js
import React from 'react';
import UnifiedForm from './UnifiedForm';
import './FormsPage.css';

function FormsPage({ addEntry }) {
  return (
    <div className="forms-page">
      <UnifiedForm addEntry={addEntry} />
    </div>
  );
}

export default FormsPage;
