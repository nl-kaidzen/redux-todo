import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ text, completed, onClick, onRemove }) => {
  return (
    <li 
      className="todo-item"
    >
      <span 
        className={completed ? "todo-checkbox completed" : "todo-checkbox"} 
        onClick={onClick}
      />
      <p className={completed ? "todo-text completed" : "todo-text"}>{text}</p>
      <button 
        className="todo-close-btn"
        onClick={onRemove}
      >X</button>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TodoItem;
