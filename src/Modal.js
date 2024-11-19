import React from 'react';
import './Modal.css'; // Tạo một tệp CSS cho modal

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal Title</h2>
        <div className="modal-buttons">
          <button onClick={() => alert('Button 1 clicked!')}>Button 1</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
