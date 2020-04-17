import React, { useState } from 'react';
import './App.css';
import AddInput from './components/AddInput/AddInput';
import TodoList from './components/TodoList/TodoList';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} from './redux/actionCreators';
import { VisibilityFilters } from './redux/actionTypes';
import { createStore } from 'redux';
import todoAppReducer from './redux/todoReducer';
let store = createStore(todoAppReducer);
store.subscribe(() => console.log(store.getState()))

function App() {
  const [inputValue, setInputValue] = useState();
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  }
  return (
    <div className="app-wrapper">
      <h1 className="header">todos</h1>
      <AddInput 
        value={inputValue}
        handleChange={handleChange}
      />
      <TodoList />
    </div>
  );
}

export default App;
