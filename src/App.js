import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Chrome Extension</h1>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
