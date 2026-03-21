// Modal.js
import React from "react";
import "./Modal.css"; // Importing the CSS for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          &times; {/* This represents the '×' character */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
