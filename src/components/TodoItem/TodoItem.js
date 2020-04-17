import React from 'react';

const TodoItem = ({ text, completed, onClick }) => {
  return (
    <li 
      className="todo-item"
    >
      <span 
        className={completed ? "todo-checkbox completed" : "todo-checkbox"} 
        onClick={onClick}
      />
      <p className="todo-text">{text}</p>
      <button>X</button>
    </li>
  );
}

export default TodoItem;
