// Caviet.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Caviet.css';

const Caviet = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="caviet">
      <div className="caviet-content">
        <h2>Welcome to the App</h2>
        <p>This is a caviet that shows when the app launches.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('caviet-root')
  );
};

export default Caviet;
