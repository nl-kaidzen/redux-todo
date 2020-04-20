import React from 'react';
import TodoItem from './../TodoItem/TodoItem';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onTodoClick, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, id) => {
        return <TodoItem 
          key={id}
          text={todo.text}
          completed={todo.completed}
          onClick={() => onTodoClick(id)}
          onRemove={() => onRemove(id)}
        />
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TodoList;