import React from "react";
import "./Notifications.css";

const Notifications = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">
        &times;
      </button>
    </div>
  );
};

export default Notifications;
