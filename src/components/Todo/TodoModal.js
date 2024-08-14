import React, { useState } from 'react';

const TodoModal = ({ closeModal, addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add New Todo</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            placeholder="Enter todo"
            required
          />
          <button type="submit">Add</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default TodoModal;
