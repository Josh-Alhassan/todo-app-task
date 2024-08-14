import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoModal from "./TodoModal";

import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: newTodo, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <button onClick={() => setIsModalOpen(true)}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
      {isModalOpen && (
        <TodoModal closeModal={() => setIsModalOpen(false)} addTodo={addTodo} />
      )}
    </div>
  );
};

export default TodoList;
