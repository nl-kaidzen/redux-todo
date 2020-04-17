import React from 'react';
import TodoItem from './../TodoItem/TodoItem';

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map((todo, id) => {
        return <TodoItem 
          key={id}
          text={todo.text}
          completed={todo.completed}
          onClick={() => onTodoClick(todo.id)}
        />
      })}
    </ul>
  );
}

export default TodoList;